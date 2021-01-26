import * as actions from './index';
import * as types from './actionTypes';

describe('actions', () => {
  it('should create an action to toggle modal', () => {
    const expectedAction = {
      type: types.MODAL_TOGGLE,
    };

    expect(actions.modalToggle()).toEqual(expectedAction);
  });

  it('should update movie modal', () => {
    const movieData = [];
    const expectedAction = {
      type: types.UPDATE_MOVIE_MODAL,
      searchedMovie: movieData,
    };

    expect(actions.saveMovieData(movieData)).toEqual(expectedAction);
  });

  it('should add movie to list', () => {
    const key = 'string';
    const userId = 'string';
    const expectedAction = {
      type: types.ADD_TO_MOVIE_LIST,
      key: key,
      userId: userId,
    };

    expect(actions.addMovie(key, userId)).toEqual(expectedAction);
  });

  it('should clear state', () => {
    const expectedAction = {
      type: types.CLEAR_STATE,
    };

    expect(actions.clearState()).toEqual(expectedAction);
  });

  it('should remove movie from list', () => {
    const movieId = 12345;
    const expectedAction = {
      type: types.REMOVE_FROM_MOVIE_LIST,
      movieId: movieId,
    };

    expect(actions.removeMovie(movieId)).toEqual(expectedAction);
  });

  it('update state with selected movie', () => {
    const movie = 'movie';
    const expectedAction = {
      type: types.SET_SELECTED_MOVIE,
      movie: movie,
    };

    expect(actions.setSelectedMovie(movie)).toEqual(expectedAction);
  });

  it('set state for movie list', () => {
    const movies = [];
    const expectedAction = {
      type: types.SET_MOVIE_LIST,
      movies: movies,
    };

    expect(actions.setMovieList(movies)).toEqual(expectedAction);
  });

  it('update star rating', () => {
    const rating = 0;
    const expectedAction = {
      type: types.UPDATE_STAR_RATING,
      rating: rating,
    };

    expect(actions.updateRating(rating)).toEqual(expectedAction);
  });

  it('update watched movies', () => {
    const expectedAction = {
      type: types.UPDATE_WATCHED,
    };

    expect(actions.watched()).toEqual(expectedAction);
  });
});
