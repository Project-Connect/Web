import React, { Component } from "react";
import PopupFactory from './popupFactory';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';
// This is the core of connecting react to redux
import { connect } from "react-redux";
// these are the functions we will call to dispatch out functions
import {closeSuccess} from "../../actions/globalPopupAction";

const styles = theme => ({
  margin: {
    marginTop: 70 + "px"
  }
});

class Success extends Component {
  handleClose = () => {
      this.props.closeSuccess();
  };

  render() {
    return (
      <div style={{marginTop: 70 + "px"}}>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.props.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <PopupFactory
            onClose={this.handleClose}
            variant="success"
            message={this.props.content}
          />
        </Snackbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  open: state.globalPopupReducer.showSuccess,
  content: state.globalPopupReducer.successContent
})

const mapDispatchToProps = {
  closeSuccess,
}
const SuccessComponent = withStyles(styles)(Success);
export default connect(mapStateToProps, mapDispatchToProps)(SuccessComponent);
