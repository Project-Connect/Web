/*
Component to summarize a project in its miniaturized format.
It contains info of the project's title, description, and stacks.
*/
import React, { Component } from "react";

import './miniProjectComponent.css';

class MiniProjectComponent extends Component {

 
    constructor() {
        super()
        this.state = {
            results: {
              id: '',
              name: '',
              description: '',
              github: '',
              url: '',
              project_start_date: ''
            }}
    }

    render() {

        const modalStyle = {
        backgroundColor: '#cdcdcd',
        borderRadius: 5,
        maxWidth: 700,
        minHeight: 150,
        margin: '0 auto',
        padding: 30
        };

        return (

        <div className="modal" style={modalStyle}>
            <div className="txtTitle" >
                {this.state.results.name}
            </div>
            <br />
            <div>
                {this.state.results.description}
            </div>
            <br />
            <div>
                {this.state.results.project_start_date}
            </div>
        </div>

        );
    }


    componentDidMount() {
        let urlData = "http://127.0.0.1:8000/api/project/"  + this.props.id;
        
        fetch(urlData)
        .then(res => res.json())
        .then(res =>
            this.setState({
                results: res
            })
        )
        .catch(function (err) {
            console.log(err)
        })

    }
}

export default MiniProjectComponent
