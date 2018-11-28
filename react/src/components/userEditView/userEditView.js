import React from 'react'
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {showError,showSuccess} from "../../actions/globalPopupAction";
import './userEditView.css';

class UserEditView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user_id: "",
            user_name: "",
            user_bio: "",
            user_email: "",
            user_photo: "",
            linked_in: "",
            github: ""
        }
        this.navigate = this.navigate.bind(this);
    }

    componentDidMount() {
        fetch('https://collab-project.herokuapp.com/api/users/' + JSON.parse(window.sessionStorage.current_user).id)
        .then(res => res.json())
        .then((data) => this.parseData(data))
        .catch(err =>
          {
            this.props.showError(err.toString())
          }
        );
    }

    parseData(data){
        this.setState({
            user_id:data.id,
            user_name:data.name,
            user_bio:data.bio,
            user_email:data.email,
            user_photo:data.photo,
            linked_in:data.linked_in,
            github:data.github
        })
    }


    submit(){

        if (this.state.user_id === "" || this.state.user_name === "" || this.state.github === "") {
            this.props.showError("Please fill in input field(s)")
        } else {
            fetch('https://localhost:8000/api/user/update', {
                method: "POST",
                body: JSON.stringify({
                                "id": this.state.user_id,
                    "name": this.state.user_name,
                    "bio": this.state.user_bio,
                                "email": this.state.user_email,
                                "photo": this.state.user_photo,
                                "linked_in": this.state.linked_in,
                    "github": this.state.github,
                })
            }).then(res => res.json())
                .then(
                this.props.showSuccess("User Edit Success"), 
                this.navigate("users")
                )
                .catch(err => {
                    this.props.showError(err.toString())
                  })
        }

      

    }

    clear() {
        this.setState({
            user_id: "",
            user_name: "",
            user_bio: "",
            user_email: "",
            user_photo: "",
            linked_in: "",
            github: ""
          });
    }


    render(){
        return(
            <div>
            <div className={"input-field"}>

                 <div className={"close-button"}>
                    <IconButton onClick={()=>this.navigate("users")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>
                    </IconButton>
                </div>

                <TextField
                required
                label="User ID"
                placeholder="User ID"
                value={this.state.user_id}
                onChange={(event)=>{this.setState({user_id:event.target.value})}}
                fullWidth/>

                <TextField
                required
                label="User name"
                placeholder="User name"
                value={this.state.user_name}
                onChange={(event)=>{this.setState({user_name:event.target.value})}}
                fullWidth/>

                <TextField
                label="User biography"
                placeholder="User biography"
                value={this.state.user_bio}
                onChange={(event)=>{this.setState({user_bio:event.target.value})}}
                fullWidth/>

                <TextField
                label="User e-mail"
                placeholder="User e-mail"
                value={this.state.user_email}
                onChange={(event)=>{this.setState({user_email:event.target.value})}}
                fullWidth/>

                <TextField
                label="User photo"
                placeholder="User photo"
                value={this.state.user_photo}
                onChange={(event)=>{this.setState({user_photo:event.target.value})}}
                fullWidth/>

                <TextField
                label="LinkedIn account"
                placeholder="LinkedIn account"
                value={this.state.linked_in}
                onChange={(event)=>{this.setState({linked_in:event.target.value})}}
                fullWidth/>

                <TextField
                required
                label="GitHub account"
                value={this.state.github}
                onChange={(event)=>{this.setState({github:event.target.value})}}
                fullWidth/>

                <div className={"required-buttons"}>
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

export default connect(null,mapDispatchToProps)(UserEditView);