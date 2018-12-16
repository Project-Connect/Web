/**
 * The page that displays information regarding a specific project
 */
import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: '#F9F9F9',
    marginLeft: 5+"vw",
    marginRight: 5+"vw",
    minWidth: 50 +'vw',
    minHeight: 50 +'vh'
  },
});


function Filler(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={0}>
        <Typography variant="h5" component="h3">
          {props.description}
        </Typography>
      </Paper>
    </div>
  );
}

Filler.propTypes = {
  classes: PropTypes.object.isRequired,
};

Filler.defaultProps = {
  description: "Nothing here!"
}
//export default connect(null,mapDispatchToProps)(ProjectDetail);
export default withStyles(styles)(Filler);
