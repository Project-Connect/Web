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

    getData(){
        let url="http://127.0.0.1:8000/api/user_associations/user/5"
        fetch(url)
        .then(res => res.json())
        .then(res =>
          {
            let project_ids = []
            res.map((element)=>project_ids.push(element.project_id))
            this.setState({ids:project_ids})
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
