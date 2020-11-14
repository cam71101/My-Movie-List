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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '70rem',
    height: '40rem',
    [theme.breakpoints.between('sm', 'md')]: {
      height: '37rem',
      width: '45rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '37rem',
      width: '20rem',
    },
  },
  details: {
    display: 'flex',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: '5',
  },
  cover: {
    flex: '1 0 40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flex: '1 0 20%',
    },
  },
  tagline: {
    flex: '3 3 90%',
  },
  ratingsContainer: {
    display: 'flex',
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  button: {
    marginTop: '1rem',
  },
  title: {
    textTransform: 'uppercase',
  },
  rating: {
    paddingTop: '.5rem',
    marginLeft: '.3rem',
  },
  genresList: {
    width: '50%',
  },
  runTimeContainer: {
    alignSelf: 'flexend',
  },
}));

const PosterModalCard = (props) => {
  const classes = useStyles();
  const { moviePoster, genres, checkMovieAdded } = props;

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  let posterText;
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
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <div className={classes.tagline}>
            <Typography
              variant={matches ? 'h4' : 'h3'}
              gutterBottom={true}
              color="secondary"
              className={classes.title}
            >
              {props.title}
            </Typography>
            <Typography
              variant={matches ? 'h5' : 'h5'}
              color="textSecondary"
              gutterBottom={true}
            >
              {props.tagline}
            </Typography>

            <Typography
              variant={matches ? 'subtitle2' : 'subtitle1'}
              color="textPrimary"
              gutterBottom={true}
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
              <Typography variant={matches ? 'h5' : 'h5'} color="secondary">
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
            >
              add to list
            </Button>
          </div>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={moviePoster}
        src="No poster available"
      >
        {posterText}
      </CardMedia>
    </Card>
  );
};

export default PosterModalCard;
