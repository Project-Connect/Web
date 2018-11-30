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
import Filler from '../filler/filler'

class Projects extends Component {
    constructor(props){
        super(props);
        this.state={
            projects:[],
            user: JSON.parse(window.sessionStorage.getItem("current_user")),
            search:""
        }
        this.renderProjects = this.renderProjects.bind(this)
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
                        onChange={(e)=>{this.setState({search:e.target.value}, ()=>console.log(this.state.search))}}
                      />
                    </div>
                    <button className="add" onClick={()=>{this.props.history.push(`/${user}/newProject`)}}>
                        Add project
                    </button>
                </div>

                <div className="project-list">
                    {this.renderProjects()}
                </div>

            </div>
        );
    }

    componentDidMount(){
        this.getData();
    }

    renderProjects = () => {
        let projects;
        let default_description = "You don't have any projects right now"
        if (this.state.projects.length === 0){
            projects = <Filler description={default_description}/>
        }else{
            projects = this.state.projects.filter((el)=>el.project.name.toLowerCase().includes(this.state.search.toLowerCase())).map((el) => (
              <MiniProjectComponent key={el.project.id} id={el.project.id} status={el.status} history={this.props.history}/>
            ))
        }
        return projects
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
            let projects = []
            //This page for instructor is to approve unapproved Projects
            //While for student or company, it is for them to see their projects status
            //TODO: this page should be refactored for the instructor view
            if(this.state.user.type === "instructor" ){
              res.filter((element)=> element.status === "unapproved").map(el =>
                projects.push(el)
              )
            } else {
              res.map(el =>
                  projects.push(el)
              )
            }
            this.setState({projects: projects})
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
