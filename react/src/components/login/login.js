
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

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
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

function validate(){
  const oauthScript = document.createElement("script");
  oauthScript.src = "https://cdn.rawgit.com/oauth-io/oauth-js/c5af4519/dist/oauth.js";
  document.body.appendChild(oauthScript);
}

let handleClickStudent = (e) =>{
  e.preventDefault();
  window.OAuth.initialize('3W-CZOoDWCoNxvU8640HxpITvHM');
  window.OAuth.popup('github').then((provider) => {
    provider.me().then((data) => {
      validateUser(data, "student");
    });

  });
}
//
let handleClickCompany = (e) => {
  e.preventDefault();
  window.OAuth.initialize('3W-CZOoDWCoNxvU8640HxpITvHM');
  window.OAuth.popup('github').then((provider) => {
    provider.me().then((data) => {
      validateUser(data, "company");
    });

  });
}
let validateUser = (data, type) => {
//   let newUser = "";
//   let route = "";
//   if (type === "student") {
//     newUser =
//       "https://collab-project.herokuapp.com/api/user/createorfind/student";
//     route = `${data.alias}/users`;
//   } else if (type === "company") {
//     newUser =
//       "https://collab-project.herokuapp.com/api/user/createorfind/company";
//     route = `${data.alias}/projects`;
//   }
//   await fetch(newUser, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json; charset=utf-8"
//     },
//     body: JSON.stringify({
//       name: data.name,
//       username: data.alias,
//       bio: data.bio,
//       password: "",
//       email: data.email,
//       photo: "",
//       linked_in: "",
//       github: ""
//     })
//   });
//   const token = `https://collab-project.herokuapp.com/api/user/token/${
//     data.alias
//   }`;
//   const userToken = await fetch(token);
//   const userTokenJason = await userToken.json();
//   window.sessionStorage.setItem(
//     "current_user",
//     JSON.stringify(userTokenJason[0])
//   );
}
function SignIn(props) {
  const { classes } = props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => {console.log("clicked");}}
          >
            Sign in
          </Button>
        </form>
        <button
          onClick={() => {console.log("clicked");}}
          className="login-button"
          color="primary"
        >
          Login with Github{" "}
        </button>
      </Paper>
    </main>
  );
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);
