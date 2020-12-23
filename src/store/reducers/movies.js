import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  modal: false,
  movies: [],
  movieChanged: 'first load',
  newMovie: false,
};

const reducer = (state = initialState, action) => {
  let newState = { ...state };
  const selectedMovie = { ...newState.selectedMovie };

  const index = newState.movies.findIndex((movie) => {
    return movie.id === selectedMovie.id;
  });

  const movies = [...newState.movies];

  switch (action.type) {
    case actionTypes.MODAL_TOGGLE:
      return updateObject(state, { modal: !state.modal });

    case actionTypes.UPDATE_MOVIE_MODAL:
      const duplicatedSearchedMovie = { ...action.searchedMovie };
      const movie = {
        backdrop_path: duplicatedSearchedMovie.backdrop_path,
        genres: duplicatedSearchedMovie.genres,
        id: duplicatedSearchedMovie.id,
        overview: duplicatedSearchedMovie.overview,
        poster_path: duplicatedSearchedMovie.poster_path,
        rating: 0,
        runtime: duplicatedSearchedMovie.runtime,
        tagline: duplicatedSearchedMovie.tagline,
        title: duplicatedSearchedMovie.title,
        vote_average: duplicatedSearchedMovie.vote_average,
        watched: false,
      };

      return updateObject(state, {
        searchedMovie: movie,
        modal: !state.modal,
      });

    case actionTypes.ADD_TO_MOVIE_LIST:
      const searchedMovie = { ...newState.searchedMovie };
      searchedMovie.key = action.key;
      searchedMovie.userId = action.userId;
      movies.push(searchedMovie);
      return updateObject(state, {
        movies: movies,
        selectedMovie: searchedMovie,
        modal: !state.modal,
        movieChanged: true,
        newMovie: true,
      });

    case actionTypes.REMOVE_FROM_MOVIE_LIST:
      const removedMovie = movies.filter((e) => e.key !== action.movieId);
      return updateObject(state, {
        movies: removedMovie,
        selectedMovie: removedMovie[0],
        movieChanged: true,
        newMovie: false,
      });

    case actionTypes.SET_SELECTED_MOVIE:
      return updateObject(state, {
        selectedMovie: action.movie,
        movieChanged: true,
        newMovie: false,
      });

    case actionTypes.SET_MOVIE_LIST:
      return updateObject(state, {
        movies: action.movies,
        selectedMovie: action.movies[0],
      });

    case actionTypes.UPDATE_STAR_RATING:
      selectedMovie.rating = action.rating;
      movies[index].rating = action.rating;
      return updateObject(state, {
        selectedMovie: selectedMovie,
        movies: movies,
        movieChanged: false,
      });

    case actionTypes.UPDATE_WATCHED:
      selectedMovie.watched = !selectedMovie.watched;
      movies[index].watched = !movies[index].watched;
      return updateObject(state, {
        selectedMovie: selectedMovie,
        movies: movies,
        movieChanged: false,
      });

    case actionTypes.CLEAR_STATE:
      return updateObject(state, {
        modal: false,
        movies: [],
        movieChanged: 'first load',
        newMovie: false,
      });

    default:
      return state;
  }
};

export default reducer;
