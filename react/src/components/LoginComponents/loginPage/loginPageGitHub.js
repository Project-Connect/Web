import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import "typeface-roboto";
import "./loginPageGithub.css";

var brain = require("../../../assets/brain.png");
//https://pixabay.com/en/brain-anatomy-abstract-art-2146817/ credits for photo
var merge = require("../../../assets/merge.png");
// https://commons.wikimedia.org/wiki/File:Octicons-git-pull-request.svg
var logo = require("../../../assets/logo.jpg");

class LoginPageGitHub extends Component {
  // Stole this from an example - not sure why importing oauthio-web package wouldn't work but kept not
  // sending request so I

  handle_login(e) {
    this.props.history.push("/login");
  }

  render() {
    return (
      <div>
        <div className="header2">
          <img src={logo} alt="" />
          <Typography variant="h2" color="inherit">
            Find the Perfect Project{" "}
          </Typography>
          <Typography component="h5" variant="display2" gutterBottom>
            Get all the projects served to you{" "}
          </Typography>
          <Typography component="h5" variant="display1" gutterBottom>
            Login with Github to get started{" "}
          </Typography>
          <button
            onClick={() => this.handle_login()}
            className="login-button"
            color="primary"
          >
            Login for Students{" "}
          </button>
          <button
            onClick={() => this.handle_login()}
            className="login-button"
            color="primary"
          >
            Login for Companies{" "}
          </button>{" "}
        </div>
        <div className="description">
          <div className="description-2">
            <img src={merge} alt="" />
            <Typography
              variant="h4"
              color="inherit"
              className="description-text"
            >
              Post and Find Projects Within the UofT Community.{" "}
            </Typography>
            <Typography
              variant="h6"
              color="inherit"
              className="description-text"
            >
              Find the perfect project or group members at Uoft with a click of
              a button.Submit new project ideas and applications to participate
              on existing projects in seconds, giving you more time to work on
              what matters to you.{" "}
            </Typography>{" "}
          </div>{" "}
        </div>
        <div className="description">
          <div className="description-2">
            <img src={brain} alt="" />
            <Typography
              variant="h4"
              color="inherit"
              className="description-text"
            >
              Find Projects Hosted by Companies{" "}
            </Typography>
            <Typography
              variant="h6"
              color="inherit"
              className="description-text"
            >
              Companies host projects for students to work on.It is the perfect
              time to get connected.{" "}
            </Typography>
            <Typography
              variant="h6"
              color="inherit"
              className="description-text"
            >
              Start now{" "}
            </Typography>
            <button
              onClick={() => this.handle_login()}
              className="login-button"
              color="primary"
            >
              Login with Github{" "}
            </button>
            <button
              onClick={() => this.handle_login()}
              className="login-button"
              color="primary"
            >
              Login for Companies{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
export default LoginPageGitHub;
