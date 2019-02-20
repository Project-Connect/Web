
/**
 * The project page that contains the user's projects
 *
 */
import React, { Component } from "react";
import IconButton from '@material-ui/core/IconButton';
import UserEditView from "../userEditView/userEditView.js";
import Modal from "react-modal";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import "./users.css";
import {showError} from "../../../actions/globalPopupAction";
import { connect } from "react-redux";
import { Document,  Page } from 'react-pdf/dist/entry.webpack';

let profile = require("../../../assets/profile_1.png");
class Users extends Component {
    constructor(props){
        super(props);
        this.state={
            displayModal:false,
            resume: null,
            numPages: null,
            pageNumber: 1,
            username: this.props.match.params.username,
            user: null
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.showResume = this.showResume.bind(this);
        this.closeResume = this.closeResume.bind(this);

    }
    onDocumentLoadSuccess = ({ numPages }) => {
      this.setState({numPages: numPages });
    }
    componentDidMount(){
      let url = process.env.API_URL + "/api/users/"+ this.state.username
      fetch(url)
      .then((res) => res.json())
      .then((res) =>
        {
          this.setState({user: res})
        }
      ).catch(err => {
        this.props.showError(err.toString())
      })
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.state.displayModal} contentLabel="Minimal Modal" ariaHideApp={false}>
                    <div className="modal">
                         <IconButton onClick={this.handleCloseModal}>
                             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>
                         </IconButton>
                        <UserEditView/>
                    </div>
                </Modal>

                <h1> User Information. </h1>
                <div className = "description-2">
                    <img width={200} src = {profile} alt = "" />
                </div>
                {this.state.user && this.displayUserInfo()}

                <Modal isOpen={this.state.showResume} contentLabel="Minimal Modal" ariaHideApp={false}>
                    <div className="modal">
                       <IconButton onClick={this.closeResume}>
                           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>
                       </IconButton>
                        {this.displayResume()}
                    </div>
                </Modal>
            </div>
        );
    }

    displayUserInfo(){
      return (<div className="user-data">
          <Typography variant="h4" gutterBottom className="title">
              {this.state.user.name}
          </Typography>

          <Typography variant="h5" gutterBottom className="title">
              {this.state.user.username}
          </Typography>

          <Divider></Divider>

          <Typography variant="body1" gutterBottom className="title">
              {this.state.user.bio}
          </Typography>

          <Typography variant="body1" gutterBottom className="title">
              {this.state.user.linked_in}
          </Typography>

          <Typography variant="body1" gutterBottom className="title">
              {this.state.user.github}
          </Typography>
      </div>)
    }
    displayResume(){
      console.log(`${process.env.API_URL}/resource/${this.state.username}/resume.pdf`);
      return (<div>
          <Document
            file={`${process.env.API_URL}/resource/${this.state.username}/resume.pdf`}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
           <Page pageNumber={this.state.pageNumber} />
          </Document>
          <p>Page {this.state.pageNumber} of {this.state.numPages}</p>
      </div>)
    }
    showResume () {
        this.setState({ showResume: true });
    }
    closeResume () {
        this.setState({ showResume: false });
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
