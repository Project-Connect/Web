/**
 * The page that displays information regarding a specific project
 */
import React, { Component } from "react";
import "./projectDetail.css";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import {showError} from "../../actions/globalPopupAction";
import { connect } from "react-redux";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import IconButton from '@material-ui/core/IconButton';

class ProjectDetail extends Component {

    constructor(props){
        super(props);
        this.state={
            title:"",
            description:"",
            start_date:"",
            group_size:0,
            github_url:"",
            project_url:"",
            stack:"",
            additonal_info:"",
            projData: {
              },
            usersData: []

        }
    }
    render() {

        let github_icon;
        let website_icon;

        let website_link = "https://" + this.state.projData.url
        let github_link = "https://" + this.state.projData.github

        if (this.state.projData.github === undefined) {
            github_icon =  <IconButton disabled style={{opacity:0.3}}> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 28"><path d="M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z"/></svg>
                           </IconButton>;
        } else {
            github_icon =  <IconButton>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 28"><path d="M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z"/></svg>
                           </IconButton>;     
        }

        if (this.state.projData.url === undefined) {
            website_icon =  <IconButton disabled style={{opacity:0.3}}> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 28"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                           </IconButton>;
        } else {
            website_icon =  <IconButton> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 28"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                           </IconButton>;  
        }

        return (
            <div className="surrounding">
                <div className="project-owner">
                    <Typography variant="h6" gutterBottom className="members">
                        Participating Members
                    </Typography>

                    {this.renderUsers()}
                    <Divider></Divider>
                    <div>
                        <Typography variant="h6" gutterBottom className="members">
                            Location
                        </Typography>

                        <Map
                        google={this.props.google}
                        zoom={15}
                        style={{width:"300px", height:"300px"}}
                        initialCenter={{
                            lat: 43.659735,
                            lng: -79.397042
                        }}>
                        <Marker
                        name={'Bahen Center'} />
                        </Map>
                    </div>

                </div>
                <div className="project-details">

                    <Typography variant="h3" gutterBottom className="title">
                        {this.state.projData.name}
                    </Typography>

                    <Divider></Divider>

                    <Typography variant="body1" gutterBottom>
                        {this.state.projData.description}
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        {this.state.projData.project_start_date}
                    </Typography>
                    
                    <div className={"icon-button"}>
                        <a href={github_link} >
                            {github_icon}
                       </a>
                       <a href={website_link}>
                        {website_icon}
                       </a>
                    </div>
                                    

                </div>
            </div>
        );
    }

    /**
     * Renders a button for every participant
     */
    renderUsers(){
        return(
            <div>
            { this.state.usersData.map(data => (
                <Button
                color="primary"
                onClick={()=>this.props.history.push(`/users/${data.user.username}`)}
                key={data.user.username}>
                    {data.user.username}
                </Button>
            ))}
            </div>
        );
    }

    componentDidMount(){
        console.log(this.props.match.params.project_id)

        let urlProjectData = "https://collab-project.herokuapp.com/api/project/"  + this.props.match.params.project_id;
        let urlUsersData = "https://collab-project.herokuapp.com/api/user_associations/project/" + this.props.match.params.project_id;
        fetch(urlProjectData)
        .then(res => res.json())
        .then(res =>
            this.setState({
                projData: res
            })
            )
        .catch(function (err) {
            this.props.showError(err.toString())

        })

        fetch(urlUsersData)
        .then(res => res.json())
        .then(res =>
            this.setState({
                usersData: res
        }))
        .catch(err => {
          this.props.showError(err.toString())
        })
    }
}

const mapDispatchToProps = {
  showError,
}

//export default connect(null,mapDispatchToProps)(ProjectDetail);
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCcv1aP4thlAGBEBUtt44LU2Trki3VxfZo")
})(connect(null,mapDispatchToProps)(ProjectDetail));
