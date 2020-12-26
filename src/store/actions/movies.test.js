import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './index';
import * as types from './actionTypes';
import fetchMock from 'fetch-mock';

import res from '../../__mocks__/movies_response.json';

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);
// const store = mockStore({});

// describe('async actions', () => {
// afterEach(() => {
//   fetchMock.restore();
// });
// it('Dispatches BOOKS_SUCCESS after fetching books', () => {
// expect.assertions(0);
// const mJson = res;
// const mResponse = { json: jest.fn().mockResolvedValueOnce(mJson) };
// global.fetch = jest.fn().mockResolvedValueOnce(mResponse);
// const expectedActions = [
//   { type: 'UPDATE_MOVIE_MODAL,', searchedMovie: res },
// ];
// store.dispatch(actions.updateMovieModal(12345));
// expect(actions.saveMovieData).toHaveBeenCalled();
// return store.dispatch(actions.updateMovieModal(12345)).then(() => {
//   expect(store.getActions()).toEqual(expectedActions);
// expect(global.fetch).toBeCalledWith(
//   'https://api.github.com/search/topics?q=javascript',
//   {
//     headers: {
//       Accept: 'application/vnd.github.mercy-preview+json',
//     },
//   }
// );
// });
// });
// it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', async () => {
// fetchMock.mock(
//   'https://api.themoviedb.org/3/movie/12345?api_key=105094d957931ab7b01705c2f3d2dd58',
//   res
// );
// const expectedActions = [
//   { type: types.UPDATE_MOVIE_MODAL, searchedMovie: { movie: ['movie'] } },
// ];
// const expectAction = {
//   type: types.UPDATE_MOVIE_MODAL,
// };
// const saveMovieData = jest.fn();
// expect(saveMovieData).toHaveBeenCalled();
// console.log(store.dispatch.updateMovieModal());
// return store.dispatch(actions.updateMovieModal(12345)).then(() => {
// return of async actions
// expect(store.getActions()).toEqual(expectedActions);
// });
// });
// });

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
