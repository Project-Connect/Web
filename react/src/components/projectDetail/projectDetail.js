/**
 * The page that displays information regarding a specific project
 */
import React, { Component } from "react";
import "./projectDetail.css";

class ProjectDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            title:"",
            description:"",
            start_date:"",
            group_size:0,
            github_url:"",
            project_url:"",
            stack:"",
            additonal_info:""
        }
    }
    render() {

        return (
            <div className="project-details">
                <h1>{this.state.title}</h1>
                <h2>{this.state.description}</h2>
                <h3>{this.state.start_date}</h3>
                <h3>{this.state.group_size}</h3>
                <h3>{this.state.github_url}</h3>
                <h3>{this.state.stack}</h3>
                <h3>{this.state.additonal_info}</h3>
            </div>
        );
    }

    componentDidMount(){
        this.setState({
            title:"title",
            description:"this is the description",
            start_date:"start date",
            group_size:3,
            github_url:"github.com/jboner",
            project_url:"www.myproject.com",
            stack:"overflow",
            additonal_info:""
        })
    }
}

export default ProjectDetail
