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

                    <Typography variant="body1" gutterBottom>
                        {this.state.github}
                    </Typography>
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
