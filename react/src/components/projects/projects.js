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
            ids:[],
            user: JSON.parse(window.sessionStorage.getItem("current_user"))
        }
    }
    render() {
        let user = this.props.match.params.user
        return (
            <div>
                <h1>Projects</h1>

                <div className="buttonSurrounding">
                    <button className="add" onClick={()=>{this.props.history.push(`/${user}/newProject`)}}>
                        Add project
                    </button>
                </div>

                <div>
                {this.state.ids.map((id) => (
                    <button className="project" onClick={()=>this.props.history.push(`/${user}/project/${id}`)} key={id}>
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
        let url="https://collab-project.herokuapp.com/api/user_associations/user/" + this.state.user.id
        fetch(url)
        .then((res) => res.json())
        .then((res) =>
          {
            console.log(res);
            if(res.lengh === 0){
              return
            }
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
