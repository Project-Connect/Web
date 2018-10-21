/*
This file is intended for grouping all the component into the application,
and TODO: provide routing for the application
*/
import React, { Component } from 'react';
//NOTE: Always use PacalCase for react components
import ReduxExamples from "./components/examples/reduxExamples/examplePage"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReduxExamples/>
      </div>
    );
  }
}

export default App;
