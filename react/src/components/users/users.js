
/**
 * The project page that contains the user's projects
 *
 */
import React, { Component } from "react";

import UserEditView from "../userEditView/userEditView.js";
import Modal from "react-modal";


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

                <div>
                  <h1> Send GET request on load data.. </h1>
									<p> {this.state.id} </p>
									<p> {this.state.name} </p>
									<p> {this.state.bio} </p>
									<p> {this.state.email} </p>
									<p> {this.state.photo} </p>
									<p> {this.state.linked_in} </p>
									<p> {this.state.github} </p>
                </div>


            </div>
        );
    }


    componentDidMount() {
				alert('Loading user information: ' + this.state.id)

        fetch('http://localhost:8000/api/user' + this.state.id)
        .then(res => res.json())
        .then((data) => { this.setState({ name : data.name }) });
    }

    handleOpenModal () {
        this.setState({ displayModal: true });
        console.log(this.state.displayModal)
    }

    handleCloseModal () {
        this.setState({ displayModal: false });
    }
}

export default Users
