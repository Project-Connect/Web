/*
This file is intended for grouping all the component into the application,
and provide routing for the application
*/
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import PropTypes from 'prop-types';

import ReduxExamples from "./examples/reduxExamples/examplePage"
import Users from "./users/users.js"
import NewProject from "./newProject/newProject";
import loginPage from "./loginPage/loginPage"
import loginPageGitHub from "./loginPage/loginPageGitHub"

import Projects from "./projects/projects";
import ProjectDetail from "./projectDetail/projectDetail";
import Discover from "./discover/discover";


// Just add your component onto a path below
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/ReduxExamples" component={ReduxExamples} />
        <Route exact path="/users" component={Users}/>
        <Route exact path="/newProject" component={NewProject}/>
        <Route exact path="/loginPage" component={loginPage}/>
        <Route exact path="/loginPageGitHub" component={loginPageGitHub}/>
        <Route exact path="/" component={Projects}/>
        <Route path={"/project/:project_id"} component={ProjectDetail}/>
        <Route exact path="/discover" component={Discover}/>
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
