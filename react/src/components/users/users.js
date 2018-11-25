
/**
 * The project page that contains the user's projects
 *
 */
import React, { Component } from "react";

import UserEditView from "../userEditView/userEditView.js";
import Modal from "react-modal";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import "./users.css";
import {showError} from "../../actions/globalPopupAction";
import { connect } from "react-redux";

class Users extends Component {
    constructor(props){
        super(props);
        this.state={
            id:"",
            name:"",
            bio:"",
            email:"",
            photo:"",
            linked_in:"",
            github:"",
            displayModal:false
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    render() {

        return (
            <div>

                <Modal isOpen={this.state.displayModal} contentLabel="Minimal Modal" ariaHideApp={false}>
                    <div className="modal">
                        <UserEditView/>
                        <button onClick={this.handleCloseModal}>Cancel</button>
                    </div>
                </Modal>

                <h1> User Information. </h1>

                <div className="buttonSurrounding">
                    <button className="add" onClick={this.handleOpenModal}>
                        Edit
                    </button>
                </div>

                <div className="user-data">
                    <Typography variant="h4" gutterBottom className="title">
                        {this.state.name}
                    </Typography>

                    <Typography variant="h5" gutterBottom className="title">
                        {this.state.username}
                    </Typography>

                    <Divider></Divider>

                    <Typography variant="body1" gutterBottom className="title">
                        {this.state.bio}
                    </Typography>

                    <Typography variant="body1" gutterBottom className="title">
                        {this.state.linked_in}
                    </Typography>

                    <Typography variant="body1" gutterBottom className="title">
                        {this.state.github}
                    </Typography>
                </div>
            </div>
        );
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
            id:data.id,
            name:data.name,
            bio:data.bio,
            email:data.email,
            photo:data.photo,
            linked_in:data.linked_in,
            github:data.github
        })
    }

    handleOpenModal () {
        this.setState({ displayModal: true });
    }

    handleCloseModal () {
        this.setState({ displayModal: false });
    }
}


const mapDispatchToProps = {
  showError,
}

export default connect(null,mapDispatchToProps)(Users);
