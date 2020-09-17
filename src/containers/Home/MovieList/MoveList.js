import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';
import MovieCard from '../../../components/MovieCard';
import Box from '@material-ui/core/Box';
import Filters from '../../../components/Filters';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    marginTop: '-5rem',
  },
  filter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  gridContainer: {
    flexGrow: 1,
    marginTop: '1rem',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const MovieGrid = (props) => {
  const [filterTitle, setFilterTitle] = useState('');
  const [filterGenre, setFilterGenre] = useState('');
  const [filterWatched, setFilterWatched] = useState('');

  const { movies, onRemoveFromMovieList, onSetSelectedMovie, token } = props;
  const classes = useStyles();

  const removeMovie = async (id) => {
    onRemoveFromMovieList(id, token);
  };

  const selectMovie = (movie) => {
    onSetSelectedMovie(movie);
  };

  const handleTitleChange = (e) => {
    setFilterTitle(e.target.value);
  };

  const handleGenreChange = (e) => {
    setFilterGenre(e.target.value);
  };

  const handleWatchedChange = (e) => {
    setFilterWatched(e.target.value);
  };

  let movieList;
  if (movies) {
    let filteredMovies = [...movies];

    if (props.filterSelect === 'title') {
      filteredMovies = filteredMovies.filter((movie) => {
        return movie.title.toLowerCase().includes(filterTitle.toLowerCase());
      });
    } else if (props.filterSelect === 'genre') {
      if (filterGenre) {
        filteredMovies = movies.filter((movie) => {
          return movie.genres.some((genre) => {
            return genre.name === filterGenre;
          });
        });
      }
    } else if (props.filterSelect === 'watched') {
      if (filterWatched === 'watched') {
        filteredMovies = movies.filter((movie) => movie.watched === true);
      } else {
        filteredMovies = movies.filter((movie) => movie.watched === false);
      }
    }

    movieList = filteredMovies.map((value) => (
      <Grow in key={value.key}>
        <Grid key={value.key} item>
          <MovieCard
            item
            title={value.title}
            overview={value.overview}
            rating={value.rating}
            poster={value.poster_path}
            remove={() => removeMovie(value.key)}
            select={() => selectMovie(value)}
            key={value.key}
            movie={props.selectedMovie}
            watched={value.watched}
          ></MovieCard>
        </Grid>
      </Grow>
    ));
  } else {
    movieList = null;
  }

  return (
    <Box component="div" className={classes.root}>
      {movies.length !== 0 ? (
        <Filters
          filterTitle={filterTitle}
          handleTitleChange={handleTitleChange}
          filterGenre={filterGenre}
          handleGenreChange={handleGenreChange}
          filterSelect={props.filterSelect}
          handleSelectChange={props.handleSelect}
          handleWatchedChange={handleWatchedChange}
          filterWatched={filterWatched}
        />
      ) : null}
      <Grid
        container
        className={classes.gridContainer}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {movieList}
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    token: state.auth.token,
    userId: state.auth.userId,
    selectedMovie: state.movies.selectedMovie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveFromMovieList: (id, token) =>
      dispatch(actions.removeFromMovieList(id, token)),
    onSetSelectedMovie: (movie) => dispatch(actions.setSelectedMovie(movie)),
    onSetMovieList: (movies) => dispatch(actions.setMovieList(movies)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieGrid);
