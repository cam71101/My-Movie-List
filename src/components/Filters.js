import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    marginTop: '2.5rem',
  },
  filter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  gridContainer: {
    flexGrow: 1,
    marginTop: '2.5rem',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Filters = (props) => {
  const classes = useStyles();

  const genreItems = [
    'Action',
    'Adventure',
    'Animation',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'History',
    'Horror',
    'Music',
    'Mystery',
    'Romance',
    'Science Fiction',
    'TV Movie',
    'Thriller',
    'War',
    'Western',
  ];

  let filter = null;
  if (props.filterSelect === 'title') {
    filter = (
      <TextField
        className={classes.formControl}
        id="title"
        label="Filter by Title"
        value={props.filterTitle}
        onChange={props.handleTitleChange}
      />
    );
  } else if (props.filterSelect === 'genre') {
    filter = (
      <FormControl className={classes.formControl}>
        <InputLabel id="genre">Select Genre</InputLabel>
        <Select
          labelId="genre"
          id="genre"
          value={props.filterGenre}
          onChange={props.handleGenreChange}
        >
          {genreItems.map((genre) => {
            return <MenuItem value={genre}>{genre}</MenuItem>;
          })}
        </Select>
      </FormControl>
    );
  } else if (props.filterSelect === 'watched') {
    filter = (
      <FormControl className={classes.formControl}>
        <InputLabel id="watched"></InputLabel>
        <Select
          labelId="watched"
          id="watched"
          value={props.filterWatched}
          onChange={props.handleWatchedChange}
        >
          <MenuItem value={'watched'}>Seen</MenuItem>
          <MenuItem value={'not watched'}>Not Seen</MenuItem>
        </Select>
      </FormControl>
    );
  } else {
    filter = null;
  }

  return (
    <div className={classes.filter}>
      <FormControl className={classes.formControl}>
        <InputLabel id="filter">Select Filter</InputLabel>
        <Select
          labelId="filter"
          id="filter"
          value={props.filterSelect}
          onChange={props.handleSelectChange}
        >
          <MenuItem value={'none'} name="none">
            None
          </MenuItem>
          <MenuItem value={'title'} name="Title">
            Title
          </MenuItem>
          <MenuItem value={'genre'} name="Genre">
            Genre
          </MenuItem>
          <MenuItem value={'watched'} name="Genre">
            Watched
          </MenuItem>
        </Select>
      </FormControl>
      {filter}
    </div>
  );
};

export default Filters;
