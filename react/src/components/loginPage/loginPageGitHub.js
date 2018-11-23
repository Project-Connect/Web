import React, { Component } from 'react';

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
        this.props.history.push(`${data.alias}`)
    }

    render() {
        return <button onClick={this.handleClick.bind(this)} className="button"> Sign in with Github</button>;
    }
}
export default LoginPageGitHub;
