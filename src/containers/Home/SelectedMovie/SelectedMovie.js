import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import { Button } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { compose } from 'redux';

import useStyles from './selectedMovieStyles';

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
      <div className={classes.imgContainer} style={{ opacity: 1 }}>
        <img
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          className={classes.img}
          alt="backgroundImage"
        />
        <div className={classes.gradientBG} />
      </div>
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
          setTimeout(() => {
            setFade(true);
          }, 200);
        }, 600);
      } else {
        setFade(false);

        const cacheImages = async (srcArray) => {
          const promises = await (() => {
            return new Promise(function (resolve, reject) {
              const img = new Image();
              img.src = `https://image.tmdb.org/t/p/original${srcArray.backdrop_path}`;
              img.onLoad = resolve();
              img.onError = reject();

              const imgtwo = new Image();
              imgtwo.src = `https://image.tmdb.org/t/p/original${srcArray.poster_path}`;
              imgtwo.onLoad = resolve();
              imgtwo.onError = reject();
            });
          });

          await Promise.resolve(promises);
        };

        cacheImages(selectedMovie);
        setTimeout(() => {
          setMovie(selectedMovie);
          setTimeout(() => {
            setFade(true);
          }, 300);
        }, 600);
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

          <Typography
            variant="h4"
            color="textSecondary"
            gutterBottom={true}
            className={classes.tagline}
          >
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
        <div className={classes.imgContainer}>
          <img
            src={backgroundImageUrl}
            className={classes.img}
            alt="backgroundImage"
          />

          <div className={classes.gradient} />
        </div>
      </React.Fragment>
    );
  }

  return (
    <Box className={classes.black}>
      <Fade in={fade} timeout={timeout}>
        <Box className={classes.selectedMovieRoot}>{background}</Box>
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
    movies: state.movies.movies,
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
