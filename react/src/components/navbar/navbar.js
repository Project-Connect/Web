import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';
import "./navbar.css";

class Navigation extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:"",
            user: JSON.parse(window.sessionStorage.getItem("current_user")) || {}
        }
        this.navigate = this.navigate.bind(this);
    }
    render(){
        return(
          <AppBar position="fixed" color="primary" style={{ backgroundColor: '#2196f3' }}>
            <Toolbar>
                {this.renderBar(this.state.user)}
            </Toolbar>
          </AppBar>
        );
    }

    get_student_app_button(){
      return [this.generate_home_button(),this.generate_discover_button(),this.generate_project_button(),this.generate_profile_button()]
    }

    get_company_app_button(){
      return [this.generate_home_button(),this.generate_discover_button(),this.generate_project_button(),this.generate_profile_button()]
    }
    get_instructor_nav_button(){
      return [this.generate_home_button(),this.generate_discover_button("Project Approval"),this.generate_project_button(),this.generate_profile_button()]
    }
    get_default_nav_button(){
      return [this.generate_home_button(),this.generate_login_button()]
    }
    generate_home_button(){
      return <Button color="inherit" onClick={()=>this.navigate("")}>Project Collab</Button>
    }

    generate_discover_button(heading){
        return <Button color="inherit" onClick={()=>this.navigate("discover")}>{heading || "Discover"}</Button>
    }

    generate_profile_button(){
        return <Button color="inherit" onClick={()=>this.navigate("users")}>profile</Button>
    }

    generate_project_button(){
        return <Button color="inherit" onClick={()=>this.navigate("projects")}>projects</Button>
    }
    generate_login_button(){
        return <Button color="inherit" onClick={()=>this.navigate("login")}>login</Button>
    }


    renderBar(user){
        switch(user.type){
          case "student":
            return this.get_student_app_button()
          case "company":
            return this.get_company_app_button()
          case "instructor":
            return this.get_instructor_nav_button()
          default:
            return this.get_default_nav_button()
        }
    }

    navigate(page){
        this.props.history.push( `/${page}`)
    }
}

export default withRouter(Navigation);
