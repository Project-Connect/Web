
import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

import TextField from '@material-ui/core/TextField';
import {showError,showSuccess} from "../../../actions/globalPopupAction";
import {login} from "../../../actions/globalStateAction";
import { connect } from "react-redux";

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          username: "",
          password: ""
        }
        this.props.user && this.props.history.push(`user/${this.props.user.username}`)

    }

    componentDidUpdate(prevProps, prevState, snapshot){
      this.props.user && this.props.history.push(`user/${this.props.user.username}`)
    }
    componentDidMount(){
        const oauthScript = document.createElement("script");
        oauthScript.src = "https://cdn.rawgit.com/oauth-io/oauth-js/c5af4519/dist/oauth.js";
        document.body.appendChild(oauthScript);
    }

    render(){
        const { classes } = this.props;
        return(
            <div className={classes.main}>
              <Paper className={classes.paper}>
                <TextField
                required
                label="username"
                id="standard-required"
                value={this.state.username}
                onChange={(event)=>{this.setState({username:event.target.value})}}
                fullWidth/>

                <TextField
                label="password"
                id="standard-required"
                value={this.state.password}
                onChange={(event)=>{this.setState({password:event.target.value})}}
                fullWidth/>

                <div>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => {this.props.login(this.state.username)}}
                  >
                    Sign in
                  </Button>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => {this.props.history.push('/register')}}
                  >
                    Sign up
                  </Button>
                </div>
              </Paper>
            </div>
        )
    }
}

const mapDispatchToProps = {
  showError,
  showSuccess,
  login
}

const mapStateToProps = (state) => ({
  user: state.globalStateReducer.current_user
})

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(SignIn));
