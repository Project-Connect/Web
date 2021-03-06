/**
 * The project page that contains all the discoverable projects for the user
 *
 */
import React, { Component } from "react";
import MiniProjectComponent from "../miniProjectView/miniProjectComponent";
import './discover.css';
import {showError} from "../../../actions/globalPopupAction";
import { connect } from "react-redux";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Filler from '../filler/filler'

class Discover extends Component {
    constructor(props){
        super(props);
        this.state={
            projects:[],
            search:""
        }
        this.renderProjects = this.renderProjects.bind(this)
    }
    render() {
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
                      onChange={(e)=>{this.setState({search:e.target.value})}}
                    />
                  </div>
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
        let default_description = "No Projects available"
        if (this.state.projects.length === 0){
            projects = <Filler description={default_description}/>
        }else{
            projects = this.state.projects.filter((element)=>element.name.toLowerCase().includes(this.state.search.toLowerCase())).map((element) => (
              <MiniProjectComponent key={element.id} data={element} id={element.id} history={this.props.history}/>
            ))
        }
        return projects
    }

    async getData(){
        let url=process.env.API_URL + "/api/user_associations/user/not"
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            credentials: 'include'
        })
        .then(res => res.json())
        .then(res =>
          {
            this.setState({projects:res})
          }
        ).catch(err => {
          this.props.showError(err.toString())
        })
    }
}

const mapDispatchToProps = {
  showError,
}

export default connect(null,mapDispatchToProps)(Discover);
