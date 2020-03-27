import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import space from '../assets/img/space.jpg';
import FeaturedPost from '../FeaturedPost/FeaturedPost';

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

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const cards = [
  {
    heading: 'React Ecommerce Application',
    subheading: `This is a live ecommerce demo built with React, Redux and Firebase`,
    img: '',
    link: `https://paul---.github.io/e-commerce/`
  },
  {
    heading: 'React Ecommerce Application',
    subheading: `This is a live ecommerce demo built with React, Redux and Firebase`,
    img: '',
    link: `https://paul---.github.io/e-commerce/`
  },
  {
    heading: 'React Ecommerce Application',
    subheading: `This is a live ecommerce demo built with React, Redux and Firebase`,
    img: '',
    link: `https://paul---.github.io/e-commerce/`
  },
];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position='relative'>
        <Grid container justify='center'>
          <Toolbar>
            <Typography variant='h6' color='inherit' noWrap>
              Welcome. I'm so glad you stopped by...
            </Typography>
          </Toolbar>
        </Grid>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div
          className={classes.heroContent}
          style={{
            backgroundImage: `url(${space})`
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
              Imagine what we could do together...
            </Typography>
            <Typography
              style={{ color: '#ffffff' }}
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              Contact me
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>
                    Email Me...
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  className={classes.card}
                  onClick={() =>
                    window.open(
                      card.link,
                      '_blank'
                    )
                  }
                >
                  <CardMedia
                    className={classes.cardMedia}
                    image='https://source.unsplash.com/random'
                    title='Image title'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {card.heading}
                    </Typography>
                    <Typography>{card.subheading}</Typography>
                    <Button size='small' color='primary'>
                      Click here
                    </Button>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
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
