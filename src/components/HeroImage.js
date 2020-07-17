import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundImage: "url('https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80')",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        position: "relative",
        display:"flex",
        justifyContent:"center",
        height: "90vh", 
        alignItems:"center",
        color: "black",
        fontSize: "4rem",
        paddingBottom: "5rem",

    }
  }));



function HeroImage() {
    const classes = useStyles();
    return(
        <Box className={classes.hero}>
            <Box>
                Blog Build in React.js and Material UI
            </Box>

        </Box>
    )

}

export default HeroImage;