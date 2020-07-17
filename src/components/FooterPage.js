import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/DiegoCosta1990">
          Diego Alberto Costa Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: "#BBC4BB",
        padding: theme.spacing(6)
    }
}));


export default function FooterPage() {
  
    const classes = useStyles();
    return(
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                React.js and Material-UI Website
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                I hope you really like the webpage. You can contact me in the social network links
                or <Link href= "mailto:d.costa1990@outlook.com" style={{'textDecoration': 'none', color: '#796464', fontStyle:'italic'}}> send me an email </Link>
            </Typography>
            <br></br>
            <Copyright />
            <br></br>
            <Button>
                <Link style={{textDecoration: 'none', color:'#2DA699'}} href="#top"> Back to top </Link>
            </Button>
        </footer>
    )
}