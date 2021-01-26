import React, { useEffect, useState } from 'react';
import axios from '../../axios-movie-data';
import { connect } from 'react-redux';
import { compose } from 'redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import SearchMoviesField from './SearchMoviesField/SearchMoviesField';
import useStyles from './homeStyles';
import withErrorHandler from '../../hoc/withErrorHandler';
import PosterModalCard from '../../components/PosterModalCard/PosterModalCard';
import SelectedMovie from './SelectedMovie/SelectedMovie';
import { NavBar } from '../../components/NavBar/NavBar';
import TransitionModal from '../../components/TransitionModal/TransitionModal';
import MovieList from './MovieList/MovieList';
import * as actions from '../../store/actions/index';

export function Home(props) {
  const [loading, setLoading] = useState(true);
  const [selectInput, setSelectInput] = useState('');
  const classes = useStyles();
  const {
    onSetMovieList,
    token,
    userId,
    onModalToggle,
    onAddToMovieList,
    searchedMovie,
    movies,
    modal,
    movieChanged,
  } = props;

  const handleClose = () => {
    onModalToggle();
  };

  const handleAdd = () => {
    let movie = { ...searchedMovie };
    movie.userId = userId;

    onAddToMovieList(movie, token);
    setSelectInput('');
  };

  const handleSelectChange = (e) => {
    setSelectInput(e.target.value);
  };

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = `https://image.tmdb.org/t/p/original${src.backdrop_path}`;
        img.onLoad = resolve();
        img.onError = reject();

        const imgtwo = new Image();
        imgtwo.src = `https://image.tmdb.org/t/p/original${src.poster_path}`;
        imgtwo.onLoad = resolve();
        imgtwo.onError = reject();
      });
    });
    await Promise.all(promises);
  };

  useEffect(() => {
    if (movieChanged === 'first load') {
      (async () => {
        try {
          const queryParams =
            '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';

          const response = await axios.get('/movies.json' + queryParams);

          const arrayResponse = Object.entries(response.data).map((e) => {
            e[1].key = e[0];
            return e[1];
          });

          onSetMovieList(arrayResponse);
          cacheImages(arrayResponse);

          setTimeout(() => {
            setLoading(false);
          }, 700);
        } catch (err) {}
      })();
    }
  }, [onSetMovieList, token, userId, movieChanged]);

  let moviePoster = null;

  if (searchedMovie) {
    if (searchedMovie.poster_path) {
      moviePoster = `https://image.tmdb.org/t/p/w500${searchedMovie.poster_path}`;
    }
  }

  let homepage = (
    <div className={classes.loading}>
      <CircularProgress color="secondary" />
    </div>
  );

  let checkMovieAdded = false;
  if (movies && searchedMovie) {
    checkMovieAdded = movies.some((e) => e.id === searchedMovie.id);
  }

  if (!loading) {
    homepage = (
      <div className={classes.rootHome}>
        <div className={classes.searchContainer}>
          <SearchMoviesField />
        </div>
        <NavBar />

        <SelectedMovie />

        <MovieList
          handleSelect={(e) => handleSelectChange(e)}
          filterSelect={selectInput}
        />

        {searchedMovie ? (
          <TransitionModal modal={modal} close={handleClose}>
            <PosterModalCard
              addMovie={handleAdd}
              moviePoster={moviePoster}
              runTime={searchedMovie.runtime}
              genres={searchedMovie.genres}
              checkMovieAdded={checkMovieAdded}
              title={searchedMovie.title}
              tagline={searchedMovie.tagline}
              overview={searchedMovie.overview}
              voteAverage={searchedMovie.vote_average}
              close={handleClose}
            />
          </TransitionModal>
        ) : null}
      </div>
    );
  }

  return <React.Fragment>{homepage}</React.Fragment>;
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    token: state.auth.token,
    userId: state.auth.userId,
    modal: state.movies.modal,
    searchedMovie: state.movies.searchedMovie,
    movieChanged: state.movies.movieChanged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveFromMovieList: (id, token) =>
      dispatch(actions.removeFromMovieList(id, token)),
    onSetSelectedMovie: (movie) => dispatch(actions.setSelectedMovie(movie)),
    onSetMovieList: (movies) => dispatch(actions.setMovieList(movies)),
    onModalToggle: () => dispatch(actions.modalToggle()),
    onAddToMovieList: (movie, token) =>
      dispatch(actions.addToMovieList(movie, token)),
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  withErrorHandler(Home, axios)
);
