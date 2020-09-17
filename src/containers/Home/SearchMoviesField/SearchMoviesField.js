import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import fetch from 'cross-fetch';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    width: '20rem',
    order: 2,
    [theme.breakpoints.down('xs')]: {
      order: 3,
      width: '20rem',
      margin: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    right: 20,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: theme.palette.common.white,
    [theme.breakpoints.down('xs')]: {
      right: 10,
    },
  },
  autoComplete: {
    width: '20rem',
    [theme.breakpoints.down('xs')]: {
      margin: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchMoviesBar = (props) => {
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
          `https://api.themoviedb.org/3/search/movie?api_key=105094d957931ab7b01705c2f3d2dd58&query=${input}`
        );
        const movies = await response.json();
        movies.results.length = 2;
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
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search movies..."
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
          )}
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

export default connect(null, mapDispatchToProps)(SearchMoviesBar);
