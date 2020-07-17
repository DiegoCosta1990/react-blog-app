import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {

  },
  image:{
      backgroundImage: "url('../assets/yo.jpg')"
  }

});

function DiegoCard() {
  const classes = useStyles();

  return (
    <Grid container>
        <Grid item xs={12} sm={6}>
            <img className={classes.image} alt="yo" />
        </Grid>
        <Grid item xs={12} sm={6}>

        </Grid>

    </Grid>
  );
}
export default DiegoCard;