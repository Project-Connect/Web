/**
 * The project page that contains all the discoverable projects for the user
 *
 */
import React, { Component } from "react";
import MiniProjectComponent from "../miniProjectView/miniProjectComponent";
import './discover.css';
import {showError} from "../../actions/globalPopupAction";
import { connect } from "react-redux";

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
        let url="https://collab-project.herokuapp.com/api/user_associations/user/"+ JSON.parse(window.sessionStorage.current_user).id + "/not"
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

export default connect(null,mapDispatchToProps)(Discover);
