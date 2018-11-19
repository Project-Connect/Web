import React, { Component } from "react";
import PopupFactory from './popupFactory';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';
// This is the core of connecting react to redux
import { connect } from "react-redux";
// these are the functions we will call to dispatch out functions
import * as popupActions from "../../actions/globalPopupAction";

const styles = theme => ({
  margin: {
    marginTop: 70 + "px"
  }
});

class Error extends Component {
  handleClose = () => {
      this.props.dispatch(popupActions.closeError());
  };

  render() {
    return (
      <div style={{marginTop: 70 + "px"}}>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={this.props.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <PopupFactory
            onClose={this.handleClose}
            variant="error"
            message={this.props.content}
          />
        </Snackbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  open: state.globalPopupReducer.showError,
  content: state.globalPopupReducer.errorContent
})

const ErrorComponent = withStyles(styles)(Error);
export default connect(mapStateToProps)(ErrorComponent);
