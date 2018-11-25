import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import "./loginPageGithub.css";

var brain = require("../../assets/brain.png");
//https://pixabay.com/en/brain-anatomy-abstract-art-2146817/ credits for photo
var merge = require("../../assets/merge.png");
// https://commons.wikimedia.org/wiki/File:Octicons-git-pull-request.svg

class LoginPageGitHub extends Component {

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
        let urlUsers = "https://collab-project.herokuapp.com/api/users/"
        let newUser = "https://collab-project.herokuapp.com/api/users/company"
        let users = await fetch(urlUsers)
        let usersJSON = await users.json()
        let notPresent = true
        usersJSON.forEach(element=>{
            if (element.username === data.alias){
                notPresent = false;
            }
        })
        if (notPresent){
            console.log("new user created")
            fetch(newUser,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body:JSON.stringify({
                    "name":data.name,
                    "username":data.alias,
                    "bio":data.bio,
                    "password":"",
                    "email":data.email,
                    "photo":"",
                    "linked_in":"",
                    "github":""
                })
            })
        }
        this.props.history.push(`${data.alias}/projects`)
    }

    render() {
        return (
            <div>
                <div className="header">
                    <img  src={brain} alt=""/>

                    <Typography variant="h2" color="inherit">
                        Find the Perfect Project
                    </Typography>

                    <Typography component="h5" variant="display2" gutterBottom>
                        Get all the projects served to you
                    </Typography>

                    <Typography component="h5" variant="display1" gutterBottom>
                        Login with Github to get started
                    </Typography>

                    <button onClick={this.handleClick.bind(this)}
                    className="login-button"
                    color="primary">
                        Login with Github
                    </button>
                </div>

                <div className="description">
                    <div className="description-2">
                        <img  src={merge} alt=""/>
                        <Typography variant="h4" color="inherit" className="description-text">
                            Post and Find Projects Within the UofT Community.
                        </Typography>

                        <Typography variant="h6" color="inherit" className="description-text">
                            Find the perfect project or group members at Uoft with a click of a button.
                            Submit new project ideas and applications to participate on existing projects in seconds,
                            giving you more time to work on what matters to you.
                        </Typography>
                    </div>
                </div>

                <div className="description">
                    <div className="description-2">

                        <Typography variant="h4" color="inherit" className="description-text">
                            Find Projects Hosted by Companies
                        </Typography>

                        <Typography variant="h6" color="inherit" className="description-text">
                            Companies host projects for students to work on. It is the perfect time to
                            get connected.
                        </Typography>

                        <Typography variant="h6" color="inherit" className="description-text">
                            Start now
                        </Typography>

                        <button onClick={this.handleClick.bind(this)}
                        className="login-button"
                        color="primary">
                            Login with Github
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginPageGitHub;
