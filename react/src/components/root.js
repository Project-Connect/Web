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
import loginPageGitHub from "./loginPage/loginPageGitHub"

import Projects from "./projects/projects";
import ProjectDetail from "./projectDetail/projectDetail";
import Discover from "./discover/discover";

import Widgets from "./examples/widgets";
import ErrorPopup from "./globalPopups/errorPopup"
import SuccessPopup from "./globalPopups/successPopup"
import ProjectUpload from "./parse-csv/parse-csv";
import Footer from "./footer/footer";
import Navigation from "./navbar/navbar";
import Login from "./login/login";

import UserEditView from "./userEditView/userEditView";

// Just add your component onto a path below
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Navigation/>
        <SuccessPopup />
        <ErrorPopup />
        <Route exact path="/ReduxExamples" component={ReduxExamples} />
        <Route exact path={"/users/"} component={Users}/>
        <Route exact path="/newProject" component={NewProject}/>
        <Route exact path="/userEdit" component={UserEditView}/>
        <Route exact path="/" component={loginPageGitHub}/>
        <Route exact path="/projects" component={Projects}/>
        <Route path={"/project/:project_id"} component={ProjectDetail}/>
        <Route exact path="/discover" component={Discover}/>
        <Route exact path="/widgets" component={Widgets}/>
        <Route exact path="/projectUpload" component={ProjectUpload}/>
        <Route exact path="/login" component={Login}/>

        <Footer/>
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
