import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CancelIcon from '@material-ui/icons/Cancel';
import PropTypes from 'prop-types';

import useStyles from './posterModalCardStyles';

const PosterModalCard = (props) => {
  const classes = useStyles();
  const { moviePoster, genres, checkMovieAdded } = props;

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  let posterText = null;
  if (!moviePoster) {
    posterText = (
      <Typography variant="h5" color="textSecondary" gutterBottom={true}>
        No poster available
      </Typography>
    );
  }

  const genresList = genres.map((e) => {
    return e.name + ' ';
  });

  return (
    <Card className={classes.root}>
      {matches ? (
        <img
          className={classes.cover}
          src={moviePoster}
          alt="No poster available"
        />
      ) : null}

      <CancelIcon
        onClick={props.close}
        color="secondary"
        className={classes.close}
        fontSize={matches ? 'medium' : 'large'}
        aria-label="close button"
      />

      {/* {posterText} */}
      <div className={classes.details} aria-label="modal-root">
        <CardContent className={classes.content}>
          <div className={classes.tagline}>
            <Typography
              variant={matches ? 'h4' : 'h3'}
              color="secondary"
              className={classes.title}
            >
              {props.title}
            </Typography>
            <Typography
              variant={matches ? 'h5' : 'h4'}
              color="textSecondary"
              gutterBottom={true}
            >
              {props.tagline}
            </Typography>

            <Typography
              variant="subtitle2"
              color="textPrimary"
              gutterBottom={true}
              className={classes.overview}
            >
              {props.overview}
            </Typography>
          </div>

          <div className={classes.bottomContainer}>
            <Typography
              variant="h5"
              color="textSecondary"
              className={classes.genresList}
            >
              {genresList}
            </Typography>
            <div className={classes.runTimeContainer}>
              <Typography
                variant="h5"
                color="textSecondary"
                gutterBottom={true}
                display="inline"
              >
                Runtime:
              </Typography>
              <Typography
                variant="h5"
                color="textPrimary"
                gutterBottom={true}
                display="inline"
              >
                &nbsp;&nbsp;{props.runTime} mins
              </Typography>
            </div>
            <div className={classes.ratingsContainer}>
              <Typography variant="h5" color="secondary">
                Rating:
              </Typography>
              <Rating
                className={classes.rating}
                name="rating"
                value={props.voteAverage}
                precision={1}
                max={10}
                readOnly
                size="small"
              />
            </div>

            <Button
              variant="contained"
              color="secondary"
              onClick={props.addMovie}
              disabled={checkMovieAdded}
              className={classes.button}
              size={matches ? 'small' : 'medium'}
            >
              add to list
            </Button>
          </div>
        </CardContent>
      </div>
      {!matches ? (
        <CardMedia
          className={classes.cover}
          image={moviePoster}
          src="No poster available"
        >
          {posterText}
        </CardMedia>
      ) : null}
    </Card>
  );
};

PosterModalCard.propTypes = {
  genres: PropTypes.array.isRequired,
  moviePoster: PropTypes.string.isRequired,
  checkMovieAdded: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  runTime: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  addMovie: PropTypes.func.isRequired,
};

export default PosterModalCard;
