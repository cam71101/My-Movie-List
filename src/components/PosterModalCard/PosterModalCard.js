import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: '70rem',
    height: '40rem',
    position: 'relative',
    [theme.breakpoints.between('sm', 'md')]: {
      height: '37rem',
      width: '45rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '37rem',
      width: '20rem',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  },
  details: {
    display: 'flex',
    zIndex: 1,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: '5',
    zIndex: 1,
  },
  cover: {
    flex: '1 0 40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '9rem',
      flex: 'none',
    },
  },
  tagline: {
    flex: '3 3 90%',
    zIndex: 1,
    overflow: 'auto',
    [theme.breakpoints.down('xs')]: {
      width: 'rem',
      flex: 'none',
      maxHeight: '13rem',
      minHeight: '12rem',
    },
  },
  overview: {
    paddingRight: '5rem',
    marginTop: '1rem',
    [theme.breakpoints.down('xs')]: {
      paddingRight: '3rem',
    },
  },
  ratingsContainer: {
    display: 'flex',
    zIndex: 1,
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    zIndex: 1,
  },
  button: {
    marginTop: '1rem',
    zIndex: 1,
  },
  title: {
    textTransform: 'uppercase',
  },
  rating: {
    paddingTop: '.5rem',
    marginLeft: '.3rem',
    zIndex: 1,
    [theme.breakpoints.down('xs')]: {
      paddingTop: '.3rem',
    },
  },
  genresList: {
    width: '50%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    zIndex: 1,
  },
  runTimeContainer: {
    alignSelf: 'flexend',
    zIndex: 1,
  },
  close: {
    position: 'absolute',
    right: 1,
    top: 1,
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

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
