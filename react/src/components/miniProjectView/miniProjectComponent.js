/*
Component to summarize a project in its miniaturized format.
It contains info of the project's title, description, and stacks.
*/
import React, { Component } from "react";

import './miniProjectComponent.css';

class MiniProjectComponent extends Component {

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
                Title {this.props.id}
            </div>
            <br />
            <div>
                Project Description
            </div>
            <br />
            <div>
                Stacks
            </div>
        </div>

        );
  }
}

export default MiniProjectComponent
