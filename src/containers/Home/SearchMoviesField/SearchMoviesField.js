import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import fetch from 'cross-fetch';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

import useStyles from './searchMoviesFieldStyles';

const SearchMoviesField = (props) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [input, setInput] = useState();
  const classes = useStyles();
  const { onUpdateMovieModal } = props;
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;
    if (!input) {
      return undefined;
    }

    (async () => {
      try {
        const response = await fetch(
          `https://ancient-river-53390.herokuapp.com/http://api.themoviedb.org/3/search/movie?api_key=105094d957931ab7b01705c2f3d2dd58&query=${input}`
        );
        const movies = await response.json();
        movies.results.length = 5;
        if (active) {
          setOptions(movies.results.map((key) => key));
        }
      } catch (err) {
        alert(err);
      }
    })();
    return () => {
      active = false;
    };
  }, [loading, input]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const handleSubmit = (e, value) => {
    e.preventDefault();
    if (value) {
      onUpdateMovieModal(value.id);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <form onSubmit={handleSubmit}>
        <Autocomplete
          className={classes.autoComplete}
          id="search movies"
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          popupIcon={false}
          autoHighlight={true}
          onChange={handleSubmit}
          getOptionSelected={(option, value) => {
            return option.name === value.name;
          }}
          getOptionLabel={(option) => option.title}
          options={options}
          loading={loading}
          renderInput={(params) => {
            return (
              <TextField
                {...params}
                label={'Search movies...'}
                variant="outlined"
                onChange={handleChange}
                value={input}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            );
          }}
        />
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateMovieModal: (movieId) =>
      dispatch(actions.updateMovieModal(movieId)),
    onSetSelectedMovie: (movie) => dispatch(actions.setSelectedMovie(movie)),
  };
};

export default connect(null, mapDispatchToProps)(SearchMoviesField);
