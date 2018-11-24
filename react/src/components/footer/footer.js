import React from 'react';
import Typography from '@material-ui/core/Typography';
var style = {
    backgroundColor: "#27DAAF",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "120px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

class Footer extends React.Component{
    render(){
        return (
            <div>
                <div style={phantom} />
                <div style={style}>
                    <Typography variant="h5" color="primary">Project Collab</Typography>
                    <Typography variant="h5" color="primary">Change Me</Typography>
                </div>
            </div>
        )
    }
}

export default Footer
