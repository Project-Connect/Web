/*
This page will contain examples of all the widgets being displayed
*/
import React, { Component } from "react";
import PopupFactory from '../popupComponents/popupFactory';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles2 = theme => ({
  margin: {
    margin: theme.spacing.unit
  },
});

class CustomizedSnackbars extends Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div style={{marginTop: 70 + "px"}}>
        <Button className={classes.margin} onClick={this.handleClick}>
          Open success snackbar
        </Button>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <PopupFactory
            onClose={this.handleClose}
            variant="success"
            message="This is a success message!"
          />
        </Snackbar>
        <br/>
        @variant=enum["error","warning","info","success"]
        <br/>
        @message="Message being displayed"
        <PopupFactory
          variant="error"
          message="This is an error message!"
        />
        <PopupFactory
          variant="warning"
          message="This is a warning message!"
        />
        <PopupFactory
          variant="info"
          message="This is an information message!"
        />
        <PopupFactory
          variant="success"
          message="This is a success message!"
        />
      </div>
    );
  }
}
export default withStyles(styles2)(CustomizedSnackbars);
