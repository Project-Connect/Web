import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Exit from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import {logout} from "../../../actions/globalStateAction";
import "./navbar.css";

class Navigation extends React.Component{
    constructor(props){
        super(props);
        this.navigate = this.navigate.bind(this);
    }

    render(){
        return(
          <AppBar position="fixed" color="primary" style={{ backgroundColor: '#2196f3' }}>
            <Toolbar>
                {this.renderBar(this.props.user || {})}
            </Toolbar>
          </AppBar>
        );
    }

    get_student_app_button(){
      return [this.generate_home_button(),
        this.generate_discover_button(),
        this.generate_project_button(),
        this.generate_profile_button(),
        this.generate_logout_button()]
    }

    get_company_app_button(){
      return [this.generate_home_button(),
        this.generate_discover_button(),
        this.generate_project_button(),
        this.generate_profile_button(),
        this.generate_logout_button()]
    }
    get_instructor_nav_button(){
      return [this.generate_home_button(),
        this.generate_discover_button("Project Approval"),
        this.generate_project_button(),
        this.generate_profile_button(),
        this.generate_project_upload_button(),
        this.generate_logout_button()]
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
        return <Button color="inherit" onClick={()=>this.navigate("user/"+this.props.user.username)}>profile</Button>
    }
    generate_project_button(){
        return <Button color="inherit" onClick={()=>this.navigate("projects")}>projects</Button>
    }
    generate_login_button(){
        return <Button color="inherit" onClick={()=>this.navigate("login")}>login</Button>
    }
    generate_project_upload_button(){
        return <Button color="inherit" onClick={()=>this.navigate("projectUpload")}>Upload Projects</Button>
    }
    generate_logout_button(){
        return <Button color="inherit" onClick={()=>this.logout()}>Log out<Exit/></Button>
    }

    logout(){
      this.props.logout()
      this.navigate("login")
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
const mapStateToProps = (state) => ({
  user: state.globalStateReducer.current_user
})
const mapDispatchToProps = {
  logout,
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Navigation));
