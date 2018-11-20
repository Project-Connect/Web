/*
Component to summarize a project in its miniaturized format.
It contains info of the project's title, description, and stacks.
*/
import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {showError} from "../../actions/globalPopupAction";
import { connect } from "react-redux";

import './miniProjectComponent.css';


class MiniProjectComponent extends Component {

    constructor() {
        super()
        this.state = {
            results: {
              id: '',
              name: '',
              description: '',
              github: '',
              url: '',
              project_start_date: ''
            }}
    }

    render() {

        const modalStyle = {
            marginTop: '15px'
        };

        const typographyStyle = {
            marginBottom: '10px'
        };

        return (

            <div style={modalStyle}>
                <Card style={{ backgroundColor: '#F5F5F5'}}>
                    <CardContent>
                        <Typography variant="h5" component="h2" style ={typographyStyle}>
                            {this.state.results.name}
                        </Typography>
                        <Typography color="textSecondary" style ={typographyStyle}>
                            {this.state.results.description}
                        </Typography>
                        <Typography component="p" style ={typographyStyle}>
                            {this.state.results.project_start_date}
                        </Typography>
                    </CardContent>
                </Card>
            </div>


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
    }
}

const mapDispatchToProps = {
  showError,
}

export default connect(null,mapDispatchToProps)(MiniProjectComponent);
