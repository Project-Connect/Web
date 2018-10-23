/*
This file is intended for grouping all the component into the application,
and provide routing for the application
*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import PropTypes from 'prop-types';

import ReduxExamples from "./examples/reduxExamples/examplePage"
import HomePage from "./homePage/homePage"
import newProjectComponent from "./examples/reduxExamples/newProjectComponent";

// Just add your component onto a path below
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/ReduxExamples" component={ReduxExamples} />
        <Route exact path="/NewProject" component={newProjectComponent}/>
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
