import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import "./adminLogin.css";
var brain = require("../../assets/brain.png");
//https://pixabay.com/en/brain-anatomy-abstract-art-2146817/ credits for photo
var merge = require("../../assets/merge.png");
// https://commons.wikimedia.org/wiki/File:Octicons-git-pull-request.svg
var logo = require("../../assets/logo.jpg");

class AdminLogin extends Component {

    // Stole this from an example - not sure why importing oauthio-web package wouldn't work but kept not
    // sending request so I
    componentDidMount () {
        const oauthScript = document.createElement("script");
        oauthScript.src = "https://cdn.rawgit.com/oauth-io/oauth-js/c5af4519/dist/oauth.js";
        document.body.appendChild(oauthScript);
    }

    handleClick(e) {
        e.preventDefault();
        window.OAuth.initialize('3W-CZOoDWCoNxvU8640HxpITvHM');
        window.OAuth.popup('github').then((provider) => {
            provider.me().then((data) => {
                console.log("data: ", data);
                this.validateUser(data);
            });

        });
    }

    async validateUser(data){
        let newUser = "https://collab-project.herokuapp.com/api/user/createorfind/instructor"
        await fetch(newUser, {
            method: "POST",
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                "name": data.name,
                "username": data.alias,
                "bio": data.bio,
                "password": "",
                "email": data.email,
                "photo": "",
                "linked_in": "",
                "github": ""
            })
        })
        const token = `https://collab-project.herokuapp.com/api/user/token/${data.alias}`
        const userToken = await fetch(token)
        const userTokenJason = await userToken.json()
        window.sessionStorage.setItem('current_user', JSON.stringify(userTokenJason[0]))
        this.props.history.push(`${data.alias}/projects`)
    }

    render() {
        return (
            <div>
              <div className = "header2" >
                <img src={logo} alt=""/>

                <Typography variant = "h2"
                color = "inherit" >
                    Find the Perfect Project
                </Typography>

                <Typography component = "h5"
                variant = "display2"
                gutterBottom >
                    Get all the projects served to you
                </Typography>

                <Typography component = "h5"
                variant = "display1"
                gutterBottom >
                    Login with Github to get started
                </Typography>

                <div className="header1">
                    <Typography variant="h2" color="inherit">
                        Admin Login
                    </Typography>

                    <button onClick={this.handleClick.bind(this)}
                    className="login-button1"
                    color="primary">
                        Login for Admin
                    </button>

                    <Typography component="h5" variant="display2" gutterBottom>
                        As an admin, you have the options of:
                    </Typography>

                    <Typography component="h5" variant="display1" gutterBottom>
                        - Approving and declining project proposals
                    </Typography>

                    <Typography component="h5" variant="display1" gutterBottom>
                        - View all projects proposals
                    </Typography>
                </div>
            </div >

            <div className = "description" >
                <div className = "description-2" >
                <img src = {merge} alt = "" / >
                <Typography variant = "h4"
                color = "inherit"
                className = "description-text" >
                    Post and Find Projects Within the UofT Community.
                </Typography>

                <Typography variant = "h6"
                color = "inherit"
                className = "description-text" >
                    Find the perfect project or group members at Uoft with a click of a button.Submit new project ideas and applications to participate on existing projects in seconds,
                    giving you more time to work on what matters to you.
                </Typography>
            </div>
        </div>

        <div className = "description" >
            <div className = "description-2" >
                <img src = {brain} alt = "" / >

                <Typography variant = "h4"
                color = "inherit"
                className = "description-text" >
                    Find Projects Hosted by Companies
                </Typography>

                <Typography variant = "h6"
                color = "inherit"
                className = "description-text" >
                    Companies host projects
                    for students to work on.It is the perfect time to get connected.
                </Typography>

                <Typography variant = "h6"
                color = "inherit"
                className = "description-text" >
                    Start now
                </Typography>
            </div>
        </div>
    < /div >
    )
    }
}
export default AdminLogin;
