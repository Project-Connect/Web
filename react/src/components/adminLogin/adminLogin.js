import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import "./adminLogin.css";

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
                <div className="header">
                    <Typography variant="h2" color="inherit">
                        Admin Login
                    </Typography>

                    <button onClick={this.handleClick.bind(this)}
                    className="login-button"
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

                <div className="description">
                    <div className="description-2">

                    </div>
                </div>

                <div className="description">
                    <div className="description-2">
                    </div>
                </div>
            </div>
        )
    }
}
export default AdminLogin;
