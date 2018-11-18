/**
 * The page that displays information regarding a specific project
 */
import React, { Component } from "react";
import "./projectDetail.css";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

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

                <Divider></Divider>

                <Typography variant="h6" gutterBottom className="members">
                    PARTICPATING MEMBERS
                </Typography>

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
            </div>
        );
    }

    componentDidMount(){
        console.log(this.props.match.params.project_id)

        let urlProjectData = "http://127.0.0.1:8000/api/project/"  + this.props.match.params.project_id;
        let urlUsersData = "http://127.0.0.1:8000/api/user_associations/project/" + this.props.match.params.project_id;
        fetch(urlProjectData)
        .then(res => res.json())
        .then(res =>
            this.setState({
                projData: res
            })
            )
        .catch(function (err) {
            console.log(err)
        })

        fetch(urlUsersData)
        .then(res => res.json())
        .then(res =>
            this.setState({
                usersData: res
        }))
    }
}

export default ProjectDetail
