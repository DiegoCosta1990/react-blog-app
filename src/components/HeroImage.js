import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundImage: "url('https://images.unsplash.com/photo-1511184150666-9bb7d41a88f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        position: "relative",
        display:"flex",
        justifyContent:"center",
        height: "90vh", 
        alignItems:"center",
        color: "black",
        fontSize: "3.5rem",
        paddingBottom: "5rem",

    }
  }));



function HeroImage() {
    const classes = useStyles();
    return(
        <Box className={classes.hero}>
            <Box>
                Welcome to my demostration website!
                <Box>
                    Built with React.js and Material-UI
                </Box>
            </Box>

        </Box>
    )

}

export default HeroImage;