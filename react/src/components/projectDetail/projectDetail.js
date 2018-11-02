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
            additonal_info:"",
            projData: {
              },
            usersData: []
                    
        }
    }
    render() {
        return (
            <div className="project-details">
                <br />
                <br />
                <h1>{this.state.projData.name}</h1>
                <h4>{this.state.projData.description}</h4>
                <h4>{this.state.projData.project_start_date}</h4>
                <h4>{this.state.github}</h4>
                <br />
                <br />
                <h2>PARTICPATING MEMBERS:</h2> 
                <div>
                    { this.state.usersData.map(data => (
                        <h3>{data.user.username}</h3>
                    ))}
                </div>
                
            </div>
        );
    }

    componentDidMount(){
        console.log(this.props.match.params.project_id)

        let urlProjectData = "http://127.0.0.1:8000/api/project/"  + this.props.match.params.project_id;
        let urlUsersData = "http://127.0.0.1:8000/api/user_associations/project/" + this.props.match.params.project_id;
        fetch(urlProjectData)
        .then(res => res.json())
        .then(res =>
            this.setState({
                projData: res
            })
            )
        .catch(function (err) {
            console.log(err)
        })
        
        fetch(urlUsersData)
        .then(res => res.json())
        .then(res =>
            this.setState({
                usersData: res
        }))

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
