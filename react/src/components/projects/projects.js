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
                    <button className="project" onClick={()=>this.props.history.push(`/project/${id}`)} key={id}>
                        <MiniProjectComponent id={id}/>
                    </button>
                ))}
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

    componentDidMount(){
        this.getData();
    }

    async getData(){
        let url="http://127.0.0.1:8000/api/user_associations/user/5"
        let fetched = await fetch(url)
        let fetchedJson = await fetched.json()
        let project_ids = []
        fetchedJson.map((element)=>project_ids.push(element.project_id))
        this.setState({ids:project_ids})
    }
}

export default Projects
