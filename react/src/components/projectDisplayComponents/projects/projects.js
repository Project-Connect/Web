/**
 * The project page that contains the user's projects
 *
 */
import React, { Component } from "react";
import MiniProjectComponent from "../miniProjectView/miniProjectComponent";
import { connect } from "react-redux";
// these are the functions we will call to dispatch out functions
import {showError} from "../../../actions/globalPopupAction";
import './projects.css';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Filler from '../filler/filler'

class Projects extends Component {
    constructor(props){
        super(props);
        this.state={
            projects:[],
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
                    <button className="add" onClick={()=>{this.props.history.push(`/newProject`)}}>
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
            //TODO DATA SHOULD BE MORE CONSISTENT
            if (this.props.user.type  === "instructor") {
              projects = this.state.projects.filter((el)=>el.name.toLowerCase().includes(this.state.search.toLowerCase())).map((el) => (
                <MiniProjectComponent key={el.id} id={el.id} data={el} status={el.status} history={this.props.history}/>
              ))
            }else{
              projects = this.state.projects.filter((el)=>el.project.name.toLowerCase().includes(this.state.search.toLowerCase())).map((el) => (
                <MiniProjectComponent key={el.id} id={el.project.id} data={el.project} status={el.status} history={this.props.history}/>
              ))
            }
        }
        return projects
    }

    async getData(){
        let url=""
        if(this.props.user.type === "instructor"){
          url=process.env.API_URL + "/api/projects"
        }else{
          url=process.env.API_URL + "/api/user_associations/user/"
        }
        fetch(url, {credentials: 'include'})
        .then((res) => res.json())
        .then((res) =>
          {
            this.setState({projects: res})
          }
        ).catch(err => {
          this.props.showError(err.toString())
        })
    }
}
const mapDispatchToProps = {
  showError,
}
const mapStateToProps = (state) => ({
  user: state.globalStateReducer.current_user
})
export default connect(mapStateToProps,mapDispatchToProps)(Projects);
