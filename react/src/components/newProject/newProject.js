import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./newProject.css"
import {showError,showSuccess} from "../../actions/globalPopupAction";
import { connect } from "react-redux";
import IconButton from '@material-ui/core/IconButton';


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
        this.navigate = this.navigate.bind(this);

    }

    submit(){
        if (this.state.title !== undefined 
            || this.state.githubUrl != undefined 
            || this.state.projectUrl != undefined 
            || this.techStack != undefined 
            || this.groupSize != undefined) {
            this.props.showError("Please fill in input field(s)")
        } 
        else {
            let url = "https://collab-project.herokuapp.com/api/project";
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({...this.state, user_id:1})
            })
            .then(()=>{
              this.props.showSuccess("Project Created Success")
              this.props.history.push("projects")
            })
            .catch(err => {
              this.props.showError(err.toString())
      
            })
        }
     
    }

    clear() {
        this.setState({
            title: "",
            githubUrl: "",
            projectUrl: "",
            description: "",
            techStack: "",
            groupSize: "",
            additionalInfo: ""
          });
    }


    render(){
        return(
            <div>

                <div className={"close-button"}>
                
                    <IconButton onClick={()=>this.navigate("projects")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>         
                    </IconButton>
                </div>

            <div className={"input-field"}>
                <TextField
                label="Project Title"
                id="standard-required"
                placeholder="Project Title"
                value={this.state.title}
                ref={el => this.inputTitle = el}
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

                    <Button color="secondary" onClick={() => {this.clear()}}>
                        Clear
                    </Button>
                </div>
            </div>
            </div>
        )
    }

    navigate(page){
        console.log(this.props)
        this.props.history.push(`${page}`)
    }
}

const mapDispatchToProps = {
  showError,
  showSuccess
}

export default connect(null,mapDispatchToProps)(NewProject);
