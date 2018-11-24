import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./newProject.css"
import {showError,showSuccess} from "../../actions/globalPopupAction";
import { connect } from "react-redux";
class NewProject extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:"",
            githubUrl:"",
            projectUrl:"",
            description:"",
            techStack:"",
            groupSize:0,
            additionalInfo:""
        }
    }

    submit(){
      this.props.showSuccess("Working");
    }

    render(){
        return(
            <div>
            <div className={"input-field"}>
                <TextField
                label="Project Title"
                id="standard-required"
                placeholder="Project Title"
                value={this.state.title}
                onChange={(event)=>{this.setState({title:event.target.value})}}
                fullWidth/>

                <TextField
                label="GitHub URL"
                placeholder="GitHub URL"
                value={this.state.githubUrl}
                onChange={(event)=>{this.setState({githubUrl:event.target.value})}}
                fullWidth/>

                <TextField
                label="Project Website"
                placeholder="Project Website"
                value={this.state.projectUrl}
                onChange={(event)=>{this.setState({projectUrl:event.target.value})}}
                fullWidth/>

                <TextField
                label="Description"
                placeholder="Description"
                value={this.state.description}
                onChange={(event)=>{this.setState({description:event.target.value})}}
                multiline
                rows="4"
                fullWidth/>

                <TextField
                label="Tech Stack"
                placeholder="Tech Stack"
                value={this.state.techStack}
                onChange={(event)=>{this.setState({techStack:event.target.value})}}
                fullWidth/>

                <TextField
                label="Group Size"
                placeholder="Group Size"
                value={this.state.groupSize}
                onChange={(event)=>{this.setState({groupSize:event.target.value})}}
                type="number"
                fullWidth/>

                <TextField
                label="Additional Information"
                value={this.state.additionalInfo}
                onChange={(event)=>{this.setState({additionalInfo:event.target.value})}}
                multiline
                rows="4"
                fullWidth/>

                <div>
                    <Button color="primary" onClick={() => {this.submit()}}>
                        Submit
                    </Button>

                    <Button color="secondary">
                        Clear
                    </Button>
                </div>
            </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
  showError,
  showSuccess
}

export default connect(null,mapDispatchToProps)(NewProject);
