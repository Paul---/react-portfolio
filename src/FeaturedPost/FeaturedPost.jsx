import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  }
}));

export default function FeaturedPost(props) {
  const classes = useStyles();

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{
        backgroundImage: `url(https://s.abcnews.com/images/US/160825_vod_orig_historyofdogs_16x9_992.jpg)`
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: 'none' }}
          src='https://s.abcnews.com/images/US/160825_vod_orig_historyofdogs_16x9_992.jpg'
          alt='this is the alt text'
        />
      }
      <div className={classes.overlay} />
      {/* <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component='h1'
              variant='h3'
              color='inherit'
              gutterBottom
            >
              Post Title
            </Typography>
            <Typography variant='h5' color='inherit' paragraph>
              post.description
            </Typography>
            <Link variant='subtitle1' href='#'>
              post.linkText
            </Link>
          </div>
        </Grid>
      </Grid> */}
    </Paper>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object
};
