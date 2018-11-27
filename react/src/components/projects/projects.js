/**
 * The project page that contains the user's projects
 *
 */
import React, { Component } from "react";
import MiniProjectComponent from "../miniProjectView/miniProjectComponent";
import { connect } from "react-redux";
// these are the functions we will call to dispatch out functions
import {showError} from "../../actions/globalPopupAction";
import './projects.css';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state={
            approvedIds:[],
            unapprovedIds:[],
            user: JSON.parse(window.sessionStorage.getItem("current_user"))
        }
    }

    render() {
        let user = this.props.match.params.user
        return (
            <div>
                <h1>Projects</h1>

                <div className="buttonSurrounding">
                  <div className= "search">
                      <div className="search-icon">
                        <SearchIcon />
                      </div>
                      <InputBase
                        placeholder="Search…"
                        className="input"
                      />
                    </div>
                    <button className="add" onClick={()=>{this.props.history.push(`/${user}/newProject`)}}>
                        Add project
                    </button>
                </div>

                <div className="project-list">
                    {this.state.unapprovedIds.map((id) => (
                          <MiniProjectComponent key={id} id={id} user={this.state.user} history={this.props.history}/>
                    ))}
                </div>

            </div>
        );
    }

    componentDidMount(){
        this.getData();
    }

    async getData(){
        let url=""
        if(this.state.user.type === "instructor"){
          url="https://collab-project.herokuapp.com/api/projects"
        }else{
          url="https://collab-project.herokuapp.com/api/user_associations/user/" + this.state.user.id
        }
        fetch(url)
        .then((res) => res.json())
        .then((res) =>
          {
            if(res.lengh === 0){
              return
            }
            let unapprovedProjects = []
            if(this.state.user.type === "instructor" ){
              res.filter((element)=> element.status === "unapproved").map(el =>
                unapprovedProjects.push(el.id)
              )
            }
            let approvedProjects = []
            if(this.state.user.type === "student"){
              res.filter((element)=> element.project.status === "approved").map(el =>
                approvedProjects.push(el.id)
              )
            }
            if(this.state.user.type === "company"){
              res.filter((element)=> element.project.status !== "other").map(el =>
                approvedProjects.push(el.id)
              )
            }
            this.setState({unapprovedIds:unapprovedProjects, approvedIds: approvedProjects})
          }
        ).catch(err => {
          this.props.showError(err.toString())
        })
    }
}
const mapDispatchToProps = {
  showError,
}

export default connect(null,mapDispatchToProps)(Projects);
