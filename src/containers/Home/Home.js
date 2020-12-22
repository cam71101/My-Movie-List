import React, { useEffect, useState } from 'react';
import NavBar from './UI/NavBar';
import TransitionModal from '../../components/TransitionModal';
import MovieList from './MovieList/MovieList';
import { makeStyles } from '@material-ui/core/styles';
import SelectedMovie from './SelectedMovie/SelectedMovie';
import * as actions from '../../store/actions/index';
import axios from '../../axios-movie-data';
import { connect } from 'react-redux';
import withErrorHandler from '../../hoc/withErrorHandler';
import PosterModalCard from '../../components/PosterModalCard';
import { compose } from 'redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchMoviesField from './SearchMoviesField/SearchMoviesField';

const useStyles = makeStyles((theme) => ({
  rootHome: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  loading: {
    width: '100%',
    height: '80rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wheel: {
    height: '20rem',
    width: '20rem',
  },
  searchContainer: {
    position: 'absolute',
    top: 26,
    left: 0,
    right: 0,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      top: 25,
    },
    [theme.breakpoints.down('sm')]: {
      top: 20,
    },
    [theme.breakpoints.down('xs')]: {
      top: 80,
    },
  },
}));

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
  } = props;

  const handleClose = () => {
    onModalToggle();
  };

  const handleAdd = async () => {
    let movie = { ...searchedMovie };
    movie.userId = userId;
    onAddToMovieList(movie, token);
    setSelectInput('');
  };

  const handleSelectChange = (e) => {
    console.log(e);
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
    console.log(promises);
    await Promise.all(promises);
  };

  useEffect(() => {
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

        console.log(arrayResponse);
        cacheImages(arrayResponse);

        setLoading(false);
      } catch (err) {}
    })();
  }, [onSetMovieList, token, userId]);

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
