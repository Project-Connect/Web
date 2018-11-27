/**
 * The project page that contains all the discoverable projects for the user
 *
 */
import React, { Component } from "react";
import MiniProjectComponent from "../miniProjectView/miniProjectComponent";
import './discover.css';
import {showError} from "../../actions/globalPopupAction";
import { connect } from "react-redux";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

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
              <h1>Projects</h1>
              <div className="buttonSurrounding">
                <div className= "search">
                    <div className="search-icon">
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="Search…"
                      className="input"
                    />
                  </div>
              </div>
              <div className="project-list">
                {this.state.ids.map((id) => (
                      <MiniProjectComponent key={id} id={id} history={this.props.history}/>
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
            console.log(res);
            let project_ids = []
            res.map((element)=>project_ids.push(element.id))
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
