/**
 * The project page that contains all the discoverable projects for the user
 *
 */
import React, { Component } from "react";

import MiniProjectComponent from "../miniProjectView/miniProjectComponent";
import './discover.css';

class Discover extends Component {
    constructor(props){
        super(props);
        this.state={
            ids:[]
        }
    }
    render() {

        return (
            <div>

                <div className="project-section">
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
        let url="http://127.0.0.1:8000/api/user_associations/user/5/not"
        let fetched = await fetch(url)
        let fetchedJson = await fetched.json()
        let project_ids = []
        fetchedJson.map((element)=>project_ids.push(element.id))
        this.setState({ids:project_ids})
    }
}

export default Discover
