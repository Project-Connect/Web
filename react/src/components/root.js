/*
This file is intended for grouping all the component into the application,
and provide routing for the application
*/
import React from 'react';
import { BrowserRouter as Router, Route , Redirect} from "react-router-dom";
import { Provider } from 'react-redux'
import PropTypes from 'prop-types';

import ReduxExamples from "./examples/reduxExamples/examplePage"
import Widgets from "./examples/widgets";

//user info and edit
import Users from "./userInfoComponents/users/users.js"
import UserEditView from "./userInfoComponents/userEditView/userEditView";

//Login and user Auth
import LoginPageGitHub from "./LoginComponents/loginPage/loginPageGitHub"
import Login from "./LoginComponents/login/login";
import Register from "./LoginComponents/register/register";

//Project displays
import Projects from "./projectDisplayComponents/projects/projects";
import ProjectDetail from "./projectDisplayComponents/projectDetail/projectDetail";
import Discover from "./projectDisplayComponents/discover/discover";

//layouts
import Footer from "./layoutComponents/footer/footer";
import Navigation from "./layoutComponents/navbar/navbar";

//popups
import ErrorPopup from "./popupComponents/errorPopup"
import SuccessPopup from "./popupComponents/successPopup"

//Project Creation
import ProjectUpload from "./projectCreationComponents/parse-csv/parse-csv";
import NewProject from "./projectCreationComponents/newProject/newProject";

// Just add your component onto a path below
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        {
          !isLoggedIn(store) && <Redirect to='/login' />
        }
        <Navigation/>
        <SuccessPopup />
        <ErrorPopup />
        <Route exact path="/ReduxExamples" component={ReduxExamples} />
        <Route exact path={"/users/"} component={Users}/>
        <Route exact path="/newProject" component={NewProject}/>
        <Route exact path="/userEdit" component={UserEditView}/>
        <Route exact path="/" component={LoginPageGitHub}/>
        <Route exact path="/projects" component={Projects}/>
        <Route path={"/project/:project_id"} component={ProjectDetail}/>
        <Route exact path="/discover" component={Discover}/>
        <Route exact path="/widgets" component={Widgets}/>
        <Route exact path="/projectUpload" component={ProjectUpload}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Footer/>
      </div>
    </Router>
  </Provider>
)
function isLoggedIn(store){
    if(!window.sessionStorage.getItem("current_user")){
      return false;
    }
    store.dispatch({
      type: 'SET_USER',
      payload: JSON.parse(window.sessionStorage.getItem("current_user"))
    })
    return true;
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
