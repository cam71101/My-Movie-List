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
import { compose } from 'redux';
import { removeMovie } from '../../../store/actions/movies';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '57rem',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'theme.palette.background.paper',
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
    width: '150rem',
    transform: 'translateY(10vw)',
    [theme.breakpoints.up('xl')]: {
      width: '180rem',
    },
    [theme.breakpoints.down('l')]: {
      width: '180rem',
    },
    [theme.breakpoints.down('md')]: {
      width: '120rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '90rem',
    },
    zIndex: 0,
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    zIndex: 1,
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
  ratingText: {
    margin: '0 0 0 8px',
  },
  title: {
    textAlign: 'center',
    textTransform: 'uppercase',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '80vw',
    },
    zIndex: 1,
  },
  description: {
    width: '50vw',
    height: '13rem',
    [theme.breakpoints.down('sm')]: {
      height: '18rem',
      width: '80vw',
    },
  },
  btn: {
    width: '50vw',
    [theme.breakpoints.down('sm')]: {
      width: '80vw',
    },
  },
  search: {
    marginBottom: '8rem',
  },
}));

export function SelectedMovie(props) {
  const [fade, setFade] = useState(true);
  const [movie, setMovie] = useState();

  const classes = useStyles();
  const {
    selectedMovie,
    onUpdateStarRating,
    onUpdateWatched,
    movieChanged,
    newMovie,
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

  let background = (
    <React.Fragment>
      <img
        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        className={classes.img}
        alt="backgro
        undImage"
        style={{ opacity: 1 }}
      />
      <Box component="div" className={classes.startContainer}>
        <Typography
          variant="h1"
          component="h2"
          color="secondary"
          gutterBottom={true}
          className={classes.title}
        >
          Start building your Movie List!
        </Typography>
        <div className={classes.search}>
          <SearchMovieField />
        </div>
      </Box>
    </React.Fragment>
  );

  let timeout = {
    enter: 1000,
    exit: 700,
  };

  useEffect(() => {
    if (movieChanged === 'first load') {
      setMovie(selectedMovie);
    } else if (movieChanged) {
      if (!newMovie) {
        setFade(false);
        setTimeout(() => {
          setMovie(selectedMovie);
          setFade(true);
        }, 500);
      } else {
        setMovie(selectedMovie);
      }
    }
  }, [selectedMovie, movieChanged, newMovie]);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  if (movie) {
    const backgroundImageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    background = (
      <React.Fragment>
        <Box component="div" className={classes.infoContainer}>
          <Typography
            variant="h2"
            component="h2"
            color="secondary"
            className={classes.title}
          >
            {movie.title}
          </Typography>

          <Typography variant="h4" color="textSecondary" gutterBottom={true}>
            {movie.tagline}
          </Typography>

          <Typography
            variant="h5"
            color="textPrimary"
            gutterBottom={true}
            className={classes.description}
          >
            {movie.overview}
          </Typography>

          {movie.watched ? (
            <Button
              color="secondary"
              variant="contained"
              onClick={setMovieWatched}
              className={classes.btn}
              size={matches ? 'small' : 'large'}
            >
              seen
            </Button>
          ) : (
            <Button
              color="primary"
              variant="contained"
              onClick={setMovieWatched}
              className={classes.btn}
              size={matches ? 'small' : 'large'}
            >
              not seen
            </Button>
          )}
          <div className={classes.ratingsContainer}>
            <Box component="div" className={classes.ratingContainer}>
              <Typography
                variant="h5"
                color="textSecondary"
                className={classes.ratingText}
              >
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
                size={matches ? 'small' : 'medium'}
              />
            </Box>
            <Box component="div" className={classes.ratingContainer}>
              <Typography
                variant="h5"
                color="textSecondary"
                className={classes.ratingText}
              >
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
                size={matches ? 'small' : 'medium'}
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
    newMovie: state.movies.newMovie,
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

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  SelectedMovie
);
