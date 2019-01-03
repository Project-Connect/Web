/*
This page will be used for putting together all redux demo components.
*/
import React, { Component } from 'react';
//NOTE: Always use PacalCase for react components
import ExampleComponent from "./exampleComponent"
import ExampleComponentTwo from "./exampleComponentTwo"
import MiniProjectComponent from "../../projectDisplayComponents/miniProjectView/miniProjectComponent"

class ReduxExamples extends Component {
  render() {
    return (
      <div className="redux-examples">
        Open up the developer console,
        then click on the "Click Me" button to see redux in action
        <ExampleComponent/>
        <ExampleComponentTwo/>
      </div>
    );
  }
}

export default ReduxExamples;
