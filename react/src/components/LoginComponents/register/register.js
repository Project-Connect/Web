import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./register.css"
import {showError,showSuccess} from "../../../actions/globalPopupAction";
import { connect } from "react-redux";
import IconButton from '@material-ui/core/IconButton';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            passworsd: "",
            email: "",
            type: "student"
        }
        this.navigate = this.navigate.bind(this);
    }

    submit(){
      console.log("submitting");
        if (this.state.name === "" || this.state.description === "") {
            this.props.showError("Please fill in input field(s)")
        }else {
            let url = process.env.API_URL + "/api/users/" + this.state.type;
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({...this.state})
            })
            .then(()=>{
              this.props.showSuccess("Account Created")
              this.navigate("login")
            })
            .catch(err => {
              this.props.showError(err.toString())
            })
        }

    }

    clear() {
        this.setState({
            username: "",
            password: "",
            email: "",
            type: "student"
          });
    }


    render(){
        return(
            <div>
            <div className={"input-field"}>

                <div className={"close-button"}>
                    <IconButton onClick={()=>this.navigate("login")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>
                    </IconButton>
                </div>

                <TextField
                required
                label="Username"
                id="standard-required"
                value={this.state.name}
                onChange={(event)=>{this.setState({username:event.target.value})}}
                fullWidth/>

                <TextField
                label="Password"
                id="standard-required"
                value={this.state.github}
                onChange={(event)=>{this.setState({password:event.target.value})}}
                fullWidth/>

                <TextField
                label="Email"
                id="standard-required"
                value={this.state.url}
                onChange={(event)=>{this.setState({email:event.target.value})}}
                fullWidth/>


                <div>
                    <Button color="primary" onClick={() => {this.submit()}}>
                        Submit
                    </Button>

                    <Button color="secondary" onClick={() => {this.clear()}}>
                        Clear
                    </Button>
                </div>
            </div>
            </div>
        )
    }

    navigate(page){
        this.props.history.push(`${page}`)
    }
}

const mapDispatchToProps = {
  showError,
  showSuccess
}

export default connect(null,mapDispatchToProps)(Register);
