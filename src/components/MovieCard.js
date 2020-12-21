import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Rating from '@material-ui/lab/Rating';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    margin: '.5rem',
    zIndex: 10000,
  },
  media: {
    width: 350,
    height: 140,
    opacity: 0.5,
  },
  yourRatings: {
    zIndex: 1000,
    color: theme.palette.secondary.main,
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    marginLeft: 0,
  },
  titleContainer: {
    opacity: 1,
    backgroundColor: 'black',
  },
  title: {},
}));

export default function MediaCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  let borderStyle;
  props.movie.title === props.title
    ? (borderStyle = { border: '.1rem solid red' })
    : (borderStyle = null);

  let style;
  props.watched
    ? (style = { backgroundColor: theme.palette.secondary.light })
    : (style = null);

  return (
    <Card className={classes.root}>
      {/* <div className={classes.titleContainer}>
        <Typography color="secondary" className={classes.title}>
          {props.title}
        </Typography>
      </div> */}
      <CardActionArea onClick={props.select}>
        <CardMedia
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w500${props.poster}`}
          title={props.title}
          movie={props.movie}
          style={borderStyle}
        ></CardMedia>
      </CardActionArea>

      <CardActions className={classes.cardActions} style={style}>
        <Rating
          name="rating"
          className={classes.yourRatings}
          value={props.rating}
          precision={0.5}
          readOnly
          max={10}
          size="small"
        />
        <Button size="small" color="default" onClick={props.remove}>
          Remove Movie
        </Button>
      </CardActions>
    </Card>
  );
}
