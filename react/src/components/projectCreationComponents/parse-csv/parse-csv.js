import CsvParse from '@vtex/react-csv-parse';
import React from 'react';
import Button from '@material-ui/core/Button';
import {showError,showSuccess} from "../../../actions/globalPopupAction";
import { connect } from "react-redux";
import "./parse-csv.css";
import reactElementToJSXString from 'react-element-to-jsx-string';

const divStyle = {
  "overflowY": "scroll",
  "maxHeight": 50+"vh",
  "overflowX": "visible",
  "overflowWrap": "break-word",
};



class ProjectUpload extends React.Component{
  constructor() {
    super()
    this.ref = React.createRef();
    this.state = {
      data: null,
      error: null,
    }
  }

  // Post project with only Description and user association
  // NOTE: Here we only send the description given it includes everything we want to display

  uploadProjects = (projectArray) => {
      for(let i in projectArray){
          //parse all jsx elements of project into string
          let project = reactElementToJSXString(projectArray[i]);
          let url = process.env.API_URL + "/api/project";
          fetch(url, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json; charset=utf-8"
              },
              body: JSON.stringify({description: project, name: i ,user_id:this.props.user.id})
          })
          .then(()=>{
            this.props.showSuccess("Upload Success")
          })
          .catch(err => {
            this.props.showError(err.toString())
          })
      }
  }



  //load csv data from csvParse into state
  handleData = data => {
    let allProjects = this.renderProjects(data);
    this.setState({allProjects: allProjects})
  }

  //Render all project data into JSX elements
  renderProjects(data){
    if(!data){
      return null
    }

    let allProjects = data.map(project => {

      let allAttributes = []
      for (const el of Object.keys(project)) {
          if (el !== "TimeStamp" && el !== "Organization" && "Got Experience"){
              let item = <p key={el}>{el}: {project[el]}</p>
              allAttributes.push(item)
          }
      }

      return(
        <div key={project["TimeStamp"]}>
              <h2>Organization: {project["Organization"]}</h2>
              {allAttributes}
        </div>
      )
    })
    return allProjects
  }


  render() {
    const keys = [
      "TimeStamp",
      "Email",
      "Organization",
      "Name",
      "Phone",
      "Address",
      "Got Experience",
      "Organization Description",
      "Project Description",
      "Organization Size",
      "Other"
    ]

    return (
      <div>
          <h1>Upload Project data</h1>

          <CsvParse
            keys={keys}
            onDataUploaded={this.handleData}
            onError={this.handleError}
            render={onChange => <input type="file" onChange={onChange} />}
          />

        {this.state.allProjects &&
          <div>
            <br/>
            <div style={divStyle} >
                {this.state.allProjects}
            </div>
            <br/>
            <br/>
            <Button variant="contained" color="primary" onClick={() => {this.uploadProjects(this.state.allProjects)}}>
                  Save
            </Button>
          </div>
        }
          {this.state.error && (
            <pre>{JSON.stringify(this.state.error, null, 2)}</pre>
          )}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  user: state.globalStateReducer.current_user
})

const mapDispatchToProps = {
  showError,
  showSuccess
}

export default connect(mapStateToProps,mapDispatchToProps)(ProjectUpload);
