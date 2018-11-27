/*
Component to summarize a project in its miniaturized format.
It contains info of the project's title, description, and stacks.
*/
import React, { Component } from "react";
import {showError,showSuccess} from "../../actions/globalPopupAction";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';

import './miniProjectComponent.css';


class MiniProjectComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            results: {
              id: null,
              name: "",
              description: "",
              github: "",
              url:"",
              project_start_date: '',
              user: JSON.parse(window.sessionStorage.getItem("current_user"))
            }}
        this.navigate = this.navigate.bind(this);
    }

    approve = () => {
        let urlData = "https://collab-project.herokuapp.com/api/project/"  + this.props.id + "/approved";
        fetch(urlData, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }}
        )
        .then(res => res.json())
        .then(res =>
            this.props.showSuccess("Project Approved")
        )
        .catch(function (err) {
            this.props.showError(err.toString())
        })
    }

    reject = () => {
        let urlData = "https://collab-project.herokuapp.com/api/project/"  + this.props.id + "/rejected";
        fetch(urlData, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }}
        )
        .then(res => res.json())
        .then(res =>
            this.props.showSuccess("Project Rejected")
        )
        .catch(function (err) {
            this.props.showError(err.toString())
        })
    }
    render_approve = () => {
      if(this.state.results.status === "unapproved" &&  this.props.user.type === "instructor"){
        return <Button className="buttons" variant="contained" color="primary" onClick = {() => {this.approve()}}>Approve</Button>
      } else {
        return <p className="buttons" variant="contained" color="primary"> Status: {this.state.results.status}</p>
      }
    }
    render_reject = () => {
      if(this.state.results.status === "unapproved" &&  this.props.user.type === "instructor"){
        return <Button className="buttons" variant="contained" onClick = {() => {this.reject()}}>Reject</Button>
      }
    }
    render() {

        return (
          <div className="wrapper">
                <div className="miniaturized-content" onClick={() => {this.navigate(this.props.id)}}>
                    <h2>{this.state.results.name}</h2>
                    <p>{this.state.results.description}</p>
                </div>
                {this.render_approve()}
                {this.render_reject()}
            </div>
        );
    }

    componentDidMount() {
        let urlData = "https://collab-project.herokuapp.com/api/project/"  + this.props.id;
        fetch(urlData)
        .then(res => res.json())
        .then(res =>
            this.setState({
                results: res
            })
        )
        .catch(function (err) {
            this.props.showError(err.toString())
        })
    }

    navigate(id){
        this.props.history.push(`project/${id}`)
    }
}

const mapDispatchToProps = {
  showError,
  showSuccess
}

export default connect(null,mapDispatchToProps)(MiniProjectComponent);
