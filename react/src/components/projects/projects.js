/**
 * The project page that contains the user's projects
 *
 */
import React, { Component } from "react";

import MiniProjectComponent from "../miniProjectView/miniProjectComponent";
import './projects.css';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state={
            ids:[]
        }
    }
    render() {

        return (
            <div>
                <h1>Projects</h1>

                <div className="buttonSurrounding">
                    <button className="add" onClick={()=>{this.props.history.push("/newProject")}}>
                        Add project
                    </button>
                </div>

                <div>
                {this.state.ids.map((id) => (
                    <button className="project" onClick={()=>this.props.history.push(`/project/${id}`)} key={id}>
                        <MiniProjectComponent id={id}/>
                    </button>
                ))}
                </div>

            </div>
        );
    }

    componentDidMount(){
        this.getData();
    }

    async getData(){
        let url="https://collab-project.herokuapp.com/api/user_associations/user/5"
        let fetched = await fetch(url)
        let fetchedJson = await fetched.json()
        let project_ids = []
        fetchedJson.map((element)=>project_ids.push(element.project_id))
        this.setState({ids:project_ids})
    }
}

export default Projects
