import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import space from '../assets/img/space.jpg';
import FeaturedPost from '../FeaturedPost/FeaturedPost';
import 'typeface-roboto';

import ecommerce from '../assets/img/ecommerce.png';
import facial from '../assets/img/facial.png';
import rolodex from '../assets/img/rolodex.png';

import git from '../assets/img/git.jpg';
import reactjs from '../assets/img/reactjs-thumb.jpg';
import nodeEx from '../assets/img/node-express.png';
import redux from '../assets/img/redux.png';
import github from '../assets/img/github.jpg';
import htmlcss from '../assets/img/htmlcss.png';
import bootstrap from '../assets/img/bootstrap.jfif';
import firebase from '../assets/img/firebase.png';
import heroku from '../assets/img/heroku.png';
import material from '../assets/img/material.jpg';
import mongo from '../assets/img/mongo.png';
import postgres from '../assets/img/postgres.png';
import python from '../assets/img/python.png';
import es6 from '../assets/img/es6.png';
import javascript from '../assets/img/javascript.png';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='#'>
        Paul Pilcher's Portfolio
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
  {
    heading: 'React Ecommerce Application',
    subheading: `This is a live ecommerce demo built with React, Redux and Firebase + OAuth authentication. You can even simulate a credit transaction. `,
    note: `{ Desktop Only }`,
    img: ecommerce,
    link: `https://paul---.github.io/e-commerce/`,
    githubLink: `https://github.com/Paul---/e-commerce`,
  },
  {
    heading: 'Facial Recognition Game',
    subheading: `This is a full stack JavaScript facial recognition game built with React and Nodejs (includes hooks). Includes a postgreSQL database with user authentication. Responsive design. Deployed with Heroku.`,
    img: facial,
    link: `https://paul---.github.io/facial-recognition/`,
    githubLink: `https://github.com/Paul---/facial-recognition`,
  },
  {
    heading: 'Online Rolodex Application',
    subheading: `This is a simple React contact search application built to demonstrate understanding of fundamental React concepts. Responsive design. Used React hooks to implement functionality.`,
    img: rolodex,
    link: `https://paul---.github.io/my-online-rolodex/`,
    githubLink: `https://github.com/Paul---/my-online-rolodex`,
  },
];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div
          className={classes.heroContent}
          style={{
            backgroundImage: `url(${space})`,
          }}
        >
          <Container maxWidth='sm'>
            <FeaturedPost />
            <Typography
              style={{ color: '#ffffff' }}
              component='h1'
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Hi, My name is Paul.
            </Typography>
            <Typography
              style={{ color: '#ffffff' }}
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              I am a full stack developer looking for great opportunities with
              great people.
            </Typography>
            <Typography
              style={{ color: '#ffffff' }}
              variant='h6'
              align='center'
              color='textSecondary'
              paragraph
            >
              Let's do something great together...
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button
                    onClick={() =>
                      window.open('mailto:paulpilcher@live.com', '_blank')
                    }
                    variant='contained'
                    color='primary'
                  >
                    Email Me
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    onClick={() =>
                      window.open(
                        'https://docs.google.com/document/d/1nSSgX31a_pcIGmDxLUhCUmF9P741XY6YgoteWiBdx3Q/edit?usp=sharin',
                        '_blank'
                      )
                    }
                    variant='contained'
                    color='primary'
                  >
                    View My Resume
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='lg'>
          <Paper
            xs={12}
            md={12}
            style={{ width: '100%', marginBottom: '12px' }}
          >
            <Typography variant='h4' component='h4'>
              Here are a few personal projects I built.
            </Typography>
            <Typography variant='h4' component='h4'>
              Feel free to check them out.{' '}
            </Typography>
          </Paper>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.img}
                    title='Image title'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {card.heading}
                    </Typography>{' '}
                    <Typography>{card.note}</Typography>
                    <Typography>{card.subheading}</Typography>
                    <div>
                      <Button
                        onClick={() => window.open(card.link, '_blank')}
                        variant='contained'
                        color='primary'
                        style={{ margin: '5px' }}
                      >
                        Live Demo
                      </Button>
                      <Button
                        onClick={() => window.open(card.githubLink, '_blank')}
                        variant='contained'
                        color='Primary'
                      >
                        Github Repo
                      </Button>
                    </div>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Paper
            xs={12}
            md={12}
            style={{ width: '100%', marginBottom: '12px', marginTop: '12px' }}
          >
            <Typography variant='h6' component='h6'>
              Some of the Technologies I find useful:
            </Typography>

            <Grid container>
              <Grid item xs={3} sm={2} md={1}>
                <img style={iconStyles} src={javascript} />
              </Grid>
              <Grid item xs={3} sm={2} md={1}>
                <img style={iconStyles} src={python} />
              </Grid>
              <Grid item xs={3} sm={2} md={1}>
                <img style={iconStyles} src={reactjs} />
              </Grid>
              <Grid item xs={3} sm={2} md={1}>
                <img style={iconStyles} src={nodeEx} />
              </Grid>
              <Grid item xs={3} sm={2} md={1}>
                <img style={iconStyles} src={redux} />
              </Grid>
              <Grid item xs={3} sm={2} md={1}>
                <img style={iconStyles} src={htmlcss} />
              </Grid>
              <Grid item xs={3} sm={2} md={1}>
                <img style={iconStyles} src={git} />
              </Grid>
              <Grid item xs={3} sm={2} md={1}>
                <img style={iconStyles} src={github} />
              </Grid>
              <Grid item xs={3} sm={2} md={1}>
                <img style={iconStyles} src={bootstrap} />
              </Grid>
              <Grid item xs={3} sm={2} md={1}>
                <img style={iconStyles} src={material} />
              </Grid>
              <Grid item xs={3} sm={2} md={1}>
                <img style={iconStyles} src={postgres} />
              </Grid>
              <Grid item xs={3} sm={2} md={1}>
                <img style={iconStyles} src={heroku} />
              </Grid>
              <Grid item xs={3} sm={2} md={1}>
                <img style={iconStyles} src={firebase} />
              </Grid>
              <Grid item xs={3} sm={2} md={1}>
                <img style={iconStyles} src={mongo} />
              </Grid>
              <Grid item xs={3} sm={2} md={1}>
                <img style={iconStyles} src={es6} />
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          We are all faced with a series of great opportunities brilliantly
          disguised as impossible situations. --Charles R. Swindoll
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

const iconStyles = { width: '100%', height: '70%', margin: '1px' };

const focusStyles = {
  border: '1px blue solid',
  width: '125px',
  height: '90%',
  marginRight: '10px',
};
