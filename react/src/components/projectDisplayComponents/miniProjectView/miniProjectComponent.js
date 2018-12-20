/*
Component to summarize a project in its miniaturized format.
It contains info of the project's title, description, and stacks.
*/
import React, { Component } from "react";
import {showError,showSuccess} from "../../../actions/globalPopupAction";
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
        this.navigate_to_project_details = this.navigate_to_project_details.bind(this);
    }

    // approve/reject project status if instructor
    send_project_request = (status) => {
        let urlData = process.env.API_URL + "/api/project/"  + this.props.id + "/" + status;
        fetch(urlData, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }}
        )
        .then(res => res.json())
        .then(res =>
            this.props.showSuccess("Project" + status)
        )
        .catch(function (err) {
            this.props.showError(err.toString())
        })
    }

    render_approve = () => {
        return <Button className="buttons" variant="contained" color="primary" onClick = {() => {this.send_project_request("rejected")}}>Approve</Button>
    }

    render_reject = () => {
        return <Button className="buttons" variant="contained" color="secondary" onClick = {() => {this.send_project_request("approved")}}>Reject</Button>
    }

    render_student_view = () => {
      let status = this.props.status === "unapproved" ? "pending" : this.props.status
      return status && <Typography component="p"> Status: {status}</Typography>
    }

    render_instructor_view = () => {
      return [this.render_approve(), this.render_reject()]
    }

    render() {
        const{classes} = this.props
        return (
          <Card className={classes.card} >
           <Grid container spacing={16}>
           <Grid item xs={6}>
            <CardContent>
              <Typography component="p">
                {this.props.data}
              </Typography>
            </CardContent>
            </Grid>
            <Grid item xs={6} container justify="flex-end" alignContent="flex-end">
            <CardActions className={classes.cardAction} >
              {this.props.user.type === "student" && this.render_student_view()}
              {this.props.user.type === "instructor" && this.render_instructor_view()}
              <Button variant="contained" onClick={() => {this.navigate_to_project_details(this.props.id)}}>Learn More</Button>
            </CardActions>
            </Grid>
            </Grid>
          </Card>

        );
    }

    navigate_to_project_details(id){
        this.props.history.push(`project/${id}`)
    }
}

const mapDispatchToProps = {
  showError,
  showSuccess
}
const mapStateToProps = (state) => ({
  user: state.globalStateReducer.current_user
})
MiniProjectComponent.defaultProps = {
  status:false,
  data: "NO INFO AVAILABLE"
}
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(MiniProjectComponent));
