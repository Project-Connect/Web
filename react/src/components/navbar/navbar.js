import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

class Navigation extends React.Component{
    render(){
        return(
            <div>
              <AppBar position="fixed" color="primary">
                <Toolbar>
                  <IconButton color="inherit" aria-label="Menu">
                    <Button color="inherit" href="/">Project Collab</Button>
                  </IconButton>
                  <Typography variant="h6" color="inherit">
                    <Button color="inherit" href="/">My Projects</Button>
                  </Typography>
                  <Typography variant="h6" color="inherit">
                    <Button color="inherit" href="/discover">Discover</Button>
                  </Typography>
                  <Button color="inherit" href="/users">Profile</Button>
                </Toolbar>
              </AppBar>
            </div>
        );
    }

}

export default Navigation;
