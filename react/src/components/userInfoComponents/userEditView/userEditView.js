import React from 'react'
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {showError,showSuccess} from "../../../actions/globalPopupAction";
import Dropzone from 'react-dropzone'
import classNames from 'classnames'
import './userEditView.css';

class UserEditView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:this.props.user.id || "",
            username:this.props.user.username || "",
            bio:this.props.user.bio || "" ,
            email:this.props.user.email || "",
            photo:this.props.user.photo || "",
            linked_in:this.props.user.linked_in || "",
            github:this.props.user.github || "",
            user_name:this.props.user.name || "",
            type:this.props.user.type || ""
        }
        this.navigate = this.navigate.bind(this);
    }

    submit(){
        if (this.state.user_name === "") {
            this.props.showError("Please fill in input field(s)")
        }
        else {
            let url = process.env.API_URL + "/api/user/update";
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({ "id": this.state.user_id,
                "name": this.state.user_name,
                "bio": this.state.user_bio,
                "email": this.state.user_email,
                "photo": this.state.user_photo,
                "linked_in": this.state.linked_in,
                "github": this.state.github,
                "username": this.state.username,
                "type": this.state.type})
            })
            .then(res => res.json())
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
            user_name: "",
            user_bio: "",
            user_email: "",
            user_photo: "",
            linked_in: "",
            github: ""
          });
    }
    onDrop = (acceptedFiles, rejectedFiles) => {
      // Do something with files
    }


    render(){
        return(
            <div>
            <div className={"input-field"}>

                <TextField
                required
                label="Name"
                value={this.state.user_name}
                onChange={(event)=>{this.setState({user_name:event.target.value})}}
                fullWidth/>

                <TextField
                label="biography"
                value={this.state.user_bio}
                onChange={(event)=>{this.setState({user_bio:event.target.value})}}
                fullWidth/>

                <TextField
                label="e-mail"
                value={this.state.user_email}
                onChange={(event)=>{this.setState({user_email:event.target.value})}}
                fullWidth/>

                <TextField
                label="photo"
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
                label="GitHub account"
                value={this.state.github}
                onChange={(event)=>{this.setState({github:event.target.value})}}
                fullWidth/>
                <Dropzone onDrop={this.onDrop}>
                  {({getRootProps, getInputProps, isDragActive}) => {
                    return (
                      <div
                        {...getRootProps()}
                        className={classNames('dropzone', {'dropzone--isActive': isDragActive})}
                      >
                        <input {...getInputProps()} />
                        {
                          isDragActive ?
                            <p>Drop files here...</p> :
                            <p>Try dropping some files here, or click to select files to upload.</p>
                        }
                      </div>
                    )
                  }}
                </Dropzone>
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
const mapStateToProps = (state) => ({
  user: state.globalStateReducer.current_user
})

const mapDispatchToProps = {
  showError,
  showSuccess
}

export default connect(mapStateToProps,mapDispatchToProps)(UserEditView);
