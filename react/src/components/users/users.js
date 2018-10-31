
/**
 * The project page that contains the user's projects
 *
 */
import React, { Component } from "react";

import MiniProjectComponent from "../miniProjectView/miniProjectComponent";
import UserEditView from "../userEditView/userEditView.js";
import Modal from "react-modal";


class Users extends Component {
    constructor(props){
        super(props);
        this.state={
            ids:[],
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
                  <h1> Send GET request on load of this component.. </h1>
                </div>


            </div>
        );
    }

    handleOpenModal () {
        this.setState({ displayModal: true });
        console.log(this.state.displayModal)
    }

    handleCloseModal () {
        this.setState({ displayModal: false });
    }

    componentDidMount(){
        this.setState({ids:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, ()=>{
            console.log(this.state.ids)
        })
    }
}

export default Users
