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

import Widgets from "./examples/widgets";
import ErrorPopup from "./globalPopups/errorPopup"
import SuccessPopup from "./globalPopups/successPopup"
import ButtonAppBar from "./navbar/navbar";

// Just add your component onto a path below
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <ButtonAppBar/>
        <SuccessPopup />
        <ErrorPopup />
        <Route exact path="/ReduxExamples" component={ReduxExamples} />
        <Route exact path={"/:user/users/:user_id"} component={Users}/>
        <Route exact path="/:user/newProject" component={NewProject}/>
        <Route exact path="/:user/loginPage" component={loginPage}/>
        <Route exact path="/" component={loginPageGitHub}/>
        <Route exact path="/:user/" component={Projects}/>
        <Route path={"/:user/project/:project_id"} component={ProjectDetail}/>
        <Route exact path="/:user/discover" component={Discover}/>
        <Route exact path="/:user/widgets" component={Widgets}/>
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
