import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Rating from '@material-ui/lab/Rating';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import useStyles from './movieCardStyles';

export default function MovieCard({
  movie,
  title,
  watched,
  select,
  poster,
  rating,
  remove,
}) {
  const classes = useStyles();
  const theme = useTheme();

  let borderStyle;

  movie.title === title
    ? (borderStyle = { border: '.1rem solid red' })
    : (borderStyle = null);

  let style;
  watched
    ? (style = { backgroundColor: theme.palette.secondary.light })
    : (style = null);

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={select}>
        <CardMedia
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w500${poster}`}
          title={title}
          movie={movie}
          style={borderStyle}
        ></CardMedia>
      </CardActionArea>

      <CardActions className={classes.cardActions} style={style}>
        <Rating
          name="rating"
          className={classes.yourRatings}
          value={rating}
          precision={0.5}
          readOnly
          max={10}
          size="small"
        />
        <Button size="small" color="default" onClick={remove}>
          Remove Movie
        </Button>
      </CardActions>
    </Card>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  watched: PropTypes.bool.isRequired,
  select: PropTypes.func.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  remove: PropTypes.func.isRequired,
};
