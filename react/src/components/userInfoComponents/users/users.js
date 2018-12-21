
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
import {showError} from "../../../actions/globalPopupAction";
import { connect } from "react-redux";
import { Document } from 'react-pdf';

var profile = require("../../../assets/profile_1.png");
class Users extends Component {
    constructor(props){
        super(props);
        this.state={
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

                     <button className="add" onClick={()=>{this.props.history.push(`/userEdit`)}}>
                        Edit
                    </button>
                </div>

                <div className = "description-2">
                    <img width={200} src = {profile} alt = "" />
                </div>

                <div className="user-data">
                    <Typography variant="h4" gutterBottom className="title">
                        {this.props.user.name}
                    </Typography>

                    <Typography variant="h5" gutterBottom className="title">
                        {this.props.user.username}
                    </Typography>

                    <Divider></Divider>
                      <Document
                        file={`public/${this.props.user.username}/resume.pdf`}
                        onLoadSuccess={this.onDocumentLoadSuccess}
                      >
                      </Document>
                    <Typography variant="body1" gutterBottom className="title">
                        {this.props.user.bio}
                    </Typography>

                    <Typography variant="body1" gutterBottom className="title">
                        {this.props.user.linked_in}
                    </Typography>

                    <Typography variant="body1" gutterBottom className="title">
                        {this.props.user.github}
                    </Typography>
                </div>
            </div>
        );
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
const mapStateToProps = (state) => ({
  user: state.globalStateReducer.current_user
})

export default connect(mapStateToProps,mapDispatchToProps)(Users);
