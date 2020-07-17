import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    maxHeight: 550,
    display: 'inline-block',
    justifyContent: 'center',
    marginBottom:"20px",
    overflow: 'hidden'
  },
  cardCenter: {
      display: 'flex',
      justifyContent: 'center'
  },
  cardImage: {
      objectFit:'contain',
      marginTop: '40px'
  },
  title: {
      padding: "50px",

      fontStyle:'italic'
    }
});

function SkillsGrid() {
  const classes = useStyles();

  return (
    <>       
    <Typography variant="h3" component="h2" gutterBottom className={classes.title}>
         Skills applied
    </Typography>
    <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.cardImage}
                component="img"
                alt="React.js"
                height="300"
                image="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                title="React.js"
                />
                <CardContent>
                <Typography gutterBottom variant="h4" component="h2">
                    React.js
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    React.js is an open-source JavaScript library for building user interfaces. 
                    It is maintained by Facebook and a community of individual developers and companies.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardCenter}>
                <Button size="small" color="primary">
                    <Link href="https://es.reactjs.org/">
                        Learn More about React
                    </Link>
                </Button>
            </CardActions>
            </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.cardImage}
                component="img"
                alt="Material-ui"
                height="300"
                image="https://material-ui.com/static/logo_raw.svg"
                title="Material-ui"
                />
                <CardContent>
                <Typography gutterBottom variant="h4" component="h2">
                    Material-UI
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Material-UI is an open-source project that features React components 
                that implement Google’s Material Design and is in the top user interface libraries for React out there.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardCenter}>
                <Button size="small" color="primary">
                    <Link href="https://material-ui.com/">
                        Learn More about Material-UI
                    </Link>
                </Button>
            </CardActions>
            </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.cardImage}
                component="img"
                alt="React.js"
                height="300"
                image="https://image.flaticon.com/icons/svg/25/25231.svg"
                title="React.js"
                />
                <CardContent>
                <Typography gutterBottom variant="h4" component="h2">
                    Github
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Git is a version control system, a command-line tool, but the center around which all things
                involving Git revolve is the hub where developers store their projects and network with others.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardCenter}>
                <Button size="small" color="primary">
                <Link href="https://github.com/">
                    Learn More about Github
                </Link>
                </Button>
            </CardActions>
            </Card>
        </Grid>
    </Grid>
    </>
  );
}
export default SkillsGrid;