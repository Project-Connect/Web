/*
Component to summarize a project in its miniaturized format.
It contains info of the project's title, description, and stacks.
*/
import React, { Component } from "react";
import {showError,showSuccess} from "../../actions/globalPopupAction";
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import './miniProjectComponent.css';

const styles = {
  card: {
    minWidth: 275,
    background: '#2196f3',
    borderRadius: 5,
    marginBottom: 15,
  },

  title: {
    fontSize: 30,
  },
  pos: {
    marginBottom: 12,
  },
  cardAction:{
  }
};


class MiniProjectComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            results: {
              id: null,
              name: "",
              description: "",
              github: "",
              url:"",
              project_start_date: '',
            },
            user: JSON.parse(window.sessionStorage.getItem("current_user")),
            currUsersData: {}
          }
        this.navigate = this.navigate.bind(this);
    }

    approve = () => {
        let urlData = "https://collab-project.herokuapp.com/api/project/"  + this.props.id + "/approved";
        fetch(urlData, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }}
        )
        .then(res => res.json())
        .then(res =>
            this.props.showSuccess("Project Approved")
        )
        .catch(function (err) {
            this.props.showError(err.toString())
        })
    }

    reject = () => {
        let urlData = "https://collab-project.herokuapp.com/api/project/"  + this.props.id + "/rejected";
        fetch(urlData, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }}
        )
        .then(res => res.json())
        .then(res =>
            this.props.showSuccess("Project Rejected")
        )
        .catch(function (err) {
            this.props.showError(err.toString())
        })
    }
    render_approve = () => {
      if(this.state.results.status === "unapproved" &&  this.state.user.type === "instructor"){
        return <Button className="buttons" variant="contained" color="primary" onClick = {() => {this.approve()}}>Approve</Button>
      } else if (this.state.user.type === "student"){
        //for students, status is only rendered if the student has applied to the project
        if(this.state.currUsersData){
            let status = this.state.currUsersData.status === "unapproved" ? "pending" : this.state.currUsersData.status
            return <Typography component="p"> Status: {status}</Typography>
        }
      } else {
        return <Typography component="p"> Status: {this.state.results.status}</Typography>
      }
    }
    render_reject = () => {
      if(this.state.results.status === "unapproved" &&  this.state.user.type === "instructor"){
        return <Button className="buttons" variant="contained" color="secondary" onClick = {() => {this.reject()}}>Reject</Button>
      }
    }
    render() {
        const{classes} = this.props
        return (
          <Card className={classes.card} >
           <Grid container spacing={16}>
           <Grid item xs={6}>
            <CardContent>
              <Typography className={classes.title} gutterBottom>
                {this.state.results.name}
              </Typography>
              <Typography component="p">
                {this.state.results.description}
              </Typography>
            </CardContent>
            </Grid>
            <Grid item xs={6} container justify="flex-end" alignContent="flex-end">
            <CardActions className={classes.cardAction} >
            {this.render_approve()}
            {this.render_reject()}
              <Button variant="contained" onClick={() => {this.navigate(this.props.id)}}>Learn More</Button>
            </CardActions>
            </Grid>
            </Grid>
          </Card>

        );
    }

    componentDidMount() {
        let urlData = "https://collab-project.herokuapp.com/api/project/"  + this.props.id;
        fetch(urlData)
        .then(res => res.json())
        .then(res =>
            this.setState({
                results: res
            })
        )
        .catch(function (err) {
            this.props.showError(err.toString())
        })

        let currUsersData = "https://collab-project.herokuapp.com/api/user_associations/user/" + this.state.user.id + "/project/"+  this.props.id;
        fetch(currUsersData)
        .then(res => res.json())
        .then(res =>
            this.setState({
                currUsersData: res[0]
            })
          )
        .catch(err => {
          this.props.showError(err.toString())
        })
    }

    navigate(id){
        this.props.history.push(`project/${id}`)
    }
}

const mapDispatchToProps = {
  showError,
  showSuccess
}

MiniProjectComponent.defaultProps = {
  status:false
}
export default connect(null,mapDispatchToProps)(withStyles(styles)(MiniProjectComponent));
