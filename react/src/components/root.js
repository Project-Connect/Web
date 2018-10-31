/*
This file is intended for grouping all the component into the application,
and provide routing for the application
*/
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import ReduxExamples from "./examples/reduxExamples/examplePage"
import newProjectComponent from "./newProject/newProjectComponent"

import Projects from "./projects/projects"
import Users from "./users/users.js"

// Just add your component onto a path below
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/ReduxExamples" component={ReduxExamples} />
        <Route exact path="/newProject" component={newProjectComponent}/>
        <Route exact path="/" component={Projects}/>
        <Route exact path="/users" component={Users}/>
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
