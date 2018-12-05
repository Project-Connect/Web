import React from 'react';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
var style = {

    backgroundColor: "#2196f3",
    textAlign: "center",
    padding: "20px",
    left: "0",
    bottom: "0",
    height: "5%",
    width: "100%",
    position:"relative",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

const theme = createMuiTheme({
    palette: {
        primary: { main: "#FFFFFF"},
        secondary: { main: '#11cb5f' },
    },
});


class Footer extends React.Component{
    render(){
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                <div style={phantom} />
                <div style={style}>
                    <Typography variant="h5" color="primary">Project Collab</Typography>
                    <Typography variant="h5" color="primary">Build Code Together</Typography>
                </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Footer
