import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    boxShadow: "10px 10px 200px teal"
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    padding: "60px"
  },
  centeredCard: {
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    padding: "50px",
    fontStyle:"italic"
  }
}));

export default function DiegoCard() {
  const classes = useStyles();

  return (
    <>
    <Typography variant="h3" component="h2" gutterBottom className={classes.title}>
      About me
    </Typography>
    <div className={classes.centered}>
      <Card f className={classes.root}>
        <CardHeader
          title="Diego Alberto Costa"
          subheader="Julio 27, 1990"
        />
        <CardMedia
          className={classes.media}
          image="https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/281577_2301644018065_573639_n.jpg?_nc_cat=100&_nc_sid=e007fa&_nc_ohc=f2vD3mp2zSoAX9IETvG&_nc_ht=scontent-mad1-1.xx&oh=bcc4a7041e50da3990678a7e621f94bd&oe=5F38A527"
          title="Diego Costa"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            I was born in Argentina, but nowadays, I´m living in Alicante, Spain. 
            I'm 30 years old and I know that I´ll be a good addition in your team because I love learning new things every day, improve myself and build awesome things.
            Visit my social networks and take a look to my website that use the IMDb API: <a href="http://diegocosta-search-movie.surge.sh" style={{textDecoration:"none"}}>Movie Finder</a>
          </Typography>
        </CardContent>
        <CardActions className={classes.centeredCard}>
          <IconButton>
            <Link href="https://www.facebook.com/Diego.LBT">
               <FacebookIcon />     
            </Link>            
          </IconButton>
          <IconButton>
            <Link href="https://www.instagram.com/diegoalbertocosta/">
               <InstagramIcon />     
            </Link>            
          </IconButton>
          <IconButton>
            <Link href="https://www.linkedin.com/in/diego-alberto-costa-36338678/">
               <LinkedInIcon />     
            </Link>            
          </IconButton>
          <IconButton>
            <Link href="https://github.com/DiegoCosta1990">
               <GithubIcon />     
            </Link>            
          </IconButton>
        </CardActions>
      </Card>
    </div>
    </>
  );
}