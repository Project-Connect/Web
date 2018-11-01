import React, { Component } from 'react';

class App extends Component {

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
                alert("TODO: " + data.alias + " SEND TO SHEESHA'S ENDPOINT!");
                if (true){ // TODO: VALID LOGIN
                    window.location = '/';
                } else {
                    alert("Invalid User");
                }
            });

        });
    }

    render() {
        return <button onClick={this.handleClick.bind(this)} className="button"> Sign in with Github</button>;
    }
}
export default App;