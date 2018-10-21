/*
This page will be used for putting together all redux demo components.
*/
import React, { Component } from 'react';
//NOTE: Always use PacalCase for react components
import ExampleComponent from "./exampleComponent"
import ExampleComponentTwo from "./exampleComponentTwo"

class ReduxExamples extends Component {
  render() {
    return (
      <div className="redux-examples">
        <ExampleComponent/>
        <ExampleComponentTwo/>
      </div>
    );
  }
}

export default ReduxExamples;
