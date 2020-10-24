import React, { useEffect, useState } from 'react';
import NavBar from '../../components/UI/NavBar';
import TransitionModal from '../../components/UI/TransitionModal';
import MovieList from './MovieList/MoveList';
import { makeStyles } from '@material-ui/core/styles';
import SelectedMovie from './SelectedMovie/SelectedMovie';
import * as actions from '../../store/actions/index';
import axios from '../../axios-movie-data';
import { connect } from 'react-redux';
import withErrorHandler from '../../hoc/withErrorHandler';
import PosterModalCard from '../../components/PosterModalCard';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    positon: 'relative',
  },
  gradient: {
    width: '100%',
    height: '35rem',
    position: 'absolute',
    top: '39rem',
    background:
      'linear-gradient(0deg, rgba(2,0,36,0) 0%, rgba(0,0,0,1) 46%, rgba(0,212,255,0) 100%)',
    // [theme.breakpoints.up('xl')]: {
    //   top: '44rem',
    // },
  },
  [theme.breakpoints.up('xl')]: {
    height: '62rem',
  },
}));

function Home(props) {
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
    setSelectInput(null);
  };

  const handleSelectChange = (e) => {
    setSelectInput(e.target.value);
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

  let homepage = null;

  let checkMovieAdded = false;
  if (movies && searchedMovie) {
    checkMovieAdded = movies.some((e) => e.id === searchedMovie.id);
  }

  if (!loading) {
    homepage = (
      <div className={classes.root}>
        <NavBar />
        <SelectedMovie />
        <div className={classes.gradient}></div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Home, axios));
