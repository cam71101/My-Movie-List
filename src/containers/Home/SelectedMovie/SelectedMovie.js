import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import { Button } from '@material-ui/core';
import SearchMovieField from '../SearchMoviesField/SearchMoviesField';
import Fade from '@material-ui/core/Fade';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '57rem',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
  },
  black: {
    width: '100%',
    height: '57rem',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'black',
  },
  img: {
    position: 'absolute',
    opacity: 0.2,
    width: '160rem',
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '90rem',
    },
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '45rem',
    zIndex: 100,
    [theme.breakpoints.down('xs')]: {
      width: '20rem',
    },
  },
  ratingsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1rem',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  yourRatings: {
    zIndex: 1000,
    color: theme.palette.secondary.main,
    margin: theme.spacing(1),
  },
  audienceStars: {
    margin: theme.spacing(1),
  },
  startContainer: {
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function SelectedMovie(props) {
  const [fade, setFade] = useState(true);
  const [movie, setMovie] = useState();

  const classes = useStyles();
  const {
    selectedMovie,
    onUpdateStarRating,
    onUpdateWatched,
    movieChanged,
  } = props;

  const handleRating = async (e, rating) => {
    const duplicateSelectedMovie = { ...selectedMovie };
    duplicateSelectedMovie.rating = rating;
    onUpdateStarRating(
      selectedMovie.key,
      props.token,
      duplicateSelectedMovie,
      rating
    );
  };

  const setMovieWatched = async () => {
    const duplicateSelectedMovie = { ...selectedMovie };
    duplicateSelectedMovie.watched = !duplicateSelectedMovie.watched;
    onUpdateWatched(selectedMovie.key, duplicateSelectedMovie, props.token);
  };

  let background = null;

  background = (
    <React.Fragment>
      <img
        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        className={classes.img}
        alt="backgro
        undImage"
      />
      <Box component="div" className={classes.startContainer}>
        <Typography
          variant="h1"
          component="h2"
          color="secondary"
          gutterBottom={true}
        >
          Start building your Movie List!
        </Typography>
        <SearchMovieField />
      </Box>
    </React.Fragment>
  );

  let timeout = {
    enter: 700,
    exit: 700,
  };

  useEffect(() => {
    if (movieChanged === 'first load') {
      setMovie(selectedMovie);
    } else if (movieChanged) {
      setFade(false);
      setTimeout(() => {
        setMovie(selectedMovie);
        setFade(true);
      }, 500);
    }
  }, [selectedMovie, movieChanged]);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  if (movie) {
    const backgroundImageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    background = (
      <React.Fragment>
        <Box component="div" className={classes.infoContainer}>
          <Typography variant="h1" component="h2" color="secondary">
            {movie.title}
          </Typography>

          <Typography variant="h4" color="textPrimary" gutterBottom={true}>
            {movie.tagline}
          </Typography>

          <Typography
            variant="subtitle1"
            color="textPrimary"
            gutterBottom={true}
          >
            {movie.overview}
          </Typography>

          {movie.watched ? (
            <Button
              color="secondary"
              variant="contained"
              onClick={setMovieWatched}
            >
              seen
            </Button>
          ) : (
            <Button
              color="primary"
              variant="contained"
              onClick={setMovieWatched}
            >
              not seen
            </Button>
          )}
          <div className={classes.ratingsContainer}>
            <Box component="div" className={classes.ratingContainer}>
              <Typography variant="h5" color="textSecondary">
                AUDIENCE RATING:
              </Typography>
              <Rating
                className={classes.audienceStars}
                name="rating"
                value={movie.vote_average}
                precision={0.5}
                onChange={handleRating}
                max={10}
                readOnly
                size={matches ? 'xsall' : 'medium'}
              />
            </Box>
            <Box component="div" className={classes.ratingContainer}>
              <Typography variant="h5" color="textSecondary">
                YOUR RATING:{' '}
              </Typography>
              <Rating
                name="rating"
                className={classes.yourRatings}
                value={movie.rating}
                precision={0.5}
                onChange={handleRating}
                disabled={!movie.watched}
                max={10}
                size={matches ? 'xsall' : 'medium'}
              />
            </Box>
          </div>
        </Box>
        <img
          src={backgroundImageUrl}
          className={classes.img}
          alt="backgroundImage"
        />
      </React.Fragment>
    );
  }

  return (
    <Box className={classes.black}>
      <Fade in={fade} timeout={timeout}>
        <Box className={classes.root}>{background}</Box>
      </Fade>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.movies.selectedMovie,
    token: state.auth.token,
    movieChanged: state.movies.movieChanged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateStarRating: (key, token, movie, rating) =>
      dispatch(actions.updateStarRating(key, token, movie, rating)),
    onUpdateWatched: (key, movie, token) =>
      dispatch(actions.updateWatched(key, movie, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedMovie);
