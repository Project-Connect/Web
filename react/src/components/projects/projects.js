/**
 * The project page that contains the user's projects
 *
 */
import React, { Component } from "react";

import MiniProjectComponent from "../miniProjectView/miniProjectComponent";
import ProjectView from "../newProject/newProjectComponent";
import Modal from "react-modal";
import './projects.css';

class Projects extends Component {
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
                        <ProjectView/>
                        <button onClick={this.handleCloseModal}>Cancel</button>
                    </div>
                </Modal>

                <h1>Projects</h1>

                <div className="buttonSurrounding">
                    <button className="add" onClick={this.handleOpenModal}>
                        Add project
                    </button>
                </div>

                <div>
                {this.state.ids.map((id) => (
                    <button className="project" onClick={()=>console.log(id)} key={id}>
                        <MiniProjectComponent id={id}/>
                    </button>
                ))}
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

export default Projects
