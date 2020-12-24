import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';

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
    [theme.breakpoints.down('lg')]: {
      marginTop: '2rem',
    },
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

const Filters = ({
  filterSelect,
  filterGenre,
  filterTitle,
  handleTitleChange,
  handleGenreChange,
  handleSelectChange,
}) => {
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
  if (filterSelect === 'title') {
    filter = (
      <TextField
        className={classes.formControl}
        id="title"
        label="Filter by Title"
        value={filterTitle}
        onChange={handleTitleChange}
      />
    );
  } else if (filterSelect === 'genre') {
    filter = (
      <FormControl className={classes.formControl}>
        <InputLabel id="genre">Select Genre</InputLabel>
        <Select
          labelId="genre"
          id="genre"
          value={filterGenre}
          onChange={handleGenreChange}
          aria-label="genre"
        >
          {genreItems.map((genre, index) => {
            return (
              <MenuItem value={genre} key={index}>
                {genre}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    );
  } else {
    filter = '';
  }

  return (
    <div className={classes.filter}>
      <FormControl className={classes.formControl}>
        <InputLabel id="filter">Select Filter</InputLabel>
        <Select
          labelId="filter"
          id="filter"
          value={filterSelect}
          onChange={handleSelectChange}
          aria-label="select filter"
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
          <MenuItem value={'watched'} name="watched">
            Seen
          </MenuItem>
          <MenuItem value={'not watched'} name="not watched">
            Not Seen
          </MenuItem>
        </Select>
      </FormControl>
      {filter}
    </div>
  );
};

Filters.propTypes = {
  filterSelect: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  handleGenreChange: PropTypes.func.isRequired,
};

export default Filters;
