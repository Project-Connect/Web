import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';

class Navigation extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:""
        }
        this.navigate = this.navigate.bind(this);
    }
    render(){
        return(
            <div>
                {this.renderBar()}
            </div>
        );
    }

    renderBar(){
        if (this.props.location.pathname ==="/"){
            return(
                <AppBar position="fixed" color="primary" style={{ backgroundColor: '#27DAAF' }}>
                  <Toolbar>

                    <Typography variant="h6" color="inherit">
                      <Button color="inherit">Project Collab</Button>
                    </Typography>

                  </Toolbar>
                </AppBar>
            )
        }
        let type = JSON.parse(window.sessionStorage.current_user).type
        console.log(type);
        if (type==="student"){
            return(
                <AppBar position="fixed" color="primary" style={{ backgroundColor: '#27DAAF' }}>
                  <Toolbar>

                    <Typography variant="h6" color="inherit">
                      <Button color="inherit" onClick={()=>this.navigate("discover")}>Project Collab</Button>
                    </Typography>

                    <Typography variant="h6" color="inherit">
                      <Button color="inherit" onClick={()=>this.navigate("discover")}>Discover</Button>
                    </Typography>

                    <Typography variant="h6" color="inherit">
                      <Button color="inherit" onClick={()=>this.navigate("users")}>Profile</Button>
                    </Typography>

                  </Toolbar>
                </AppBar>
            )
        }else if (type==="company"){
            return(
                <AppBar position="fixed" color="primary" style={{ backgroundColor: '#27DAAF' }}>
                  <Toolbar>

                    <Typography variant="h6" color="inherit">
                      <Button color="inherit" onClick={()=>this.navigate("projects")}>Project Collab</Button>
                    </Typography>

                    <Typography variant="h6" color="inherit">
                      <Button color="inherit" onClick={()=>this.navigate("projects")}>My Projects</Button>
                    </Typography>

                    <Typography variant="h6" color="inherit">
                      <Button color="inherit" onClick={()=>this.navigate("users")}>Profile</Button>
                    </Typography>

                  </Toolbar>
                </AppBar>
            )
        }else if (type==="admin"){
            return(
                <AppBar position="fixed" color="primary" style={{ backgroundColor: '#27DAAF' }}>
                  <Toolbar>

                    <Typography variant="h6" color="inherit">
                      <Button color="inherit" onClick={()=>this.navigate("projects")}>Project Collab</Button>
                    </Typography>

                    <Typography variant="h6" color="inherit">
                      <Button color="inherit" onClick={()=>this.navigate("projects")}>My Projects</Button>
                    </Typography>

                    <Typography variant="h6" color="inherit">
                      <Button color="inherit" onClick={()=>this.navigate("discover")}>Discover</Button>
                    </Typography>

                    <Typography variant="h6" color="inherit">
                      <Button color="inherit" onClick={()=>this.navigate("users")}>Profile</Button>
                    </Typography>

                  </Toolbar>
                </AppBar>
            );
        }else{
            return(
                <AppBar position="fixed" color="primary" style={{ backgroundColor: '#27DAAF' }}>
                  <Toolbar>

                    <Typography variant="h6" color="inherit">
                      <Button color="inherit">Project Collab</Button>
                    </Typography>

                  </Toolbar>
                </AppBar>
            );
        }
    }

    navigate(page){
        this.props.history.push(`${page}`)
    }
}

export default withRouter(Navigation);
