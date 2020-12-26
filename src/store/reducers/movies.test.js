import reducer from './movies';
import * as types from '../actions/actionTypes';
import { cleanup } from '@testing-library/react';

import selectedMovie from '../../__mocks__/selected_movie_response.json';
import movies from '../../__mocks__/movies_response.json';

selectedMovie.key = 578;

describe('movies reducer', () => {
  afterEach(cleanup);

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      modal: false,
      movies: [],
      movieChanged: 'first load',
      newMovie: false,
    });
  });

  it('should handle MODAL_TOGGLE', () => {
    expect(
      reducer(undefined, {
        type: types.MODAL_TOGGLE,
      })
    ).toEqual({
      modal: true,
      movies: [],
      movieChanged: 'first load',
      newMovie: false,
    });

    expect(
      reducer(
        {
          modal: true,
          movies: [],
          movieChanged: 'first load',
          newMovie: false,
        },
        {
          type: types.MODAL_TOGGLE,
        }
      )
    ).toEqual({
      modal: false,
      movies: [],
      movieChanged: 'first load',
      newMovie: false,
    });
  });

  it('should handle UPDATE_MOVIE_MODAL', () => {
    expect(
      reducer(undefined, {
        type: types.UPDATE_MOVIE_MODAL,
        searchedMovie: selectedMovie,
      })
    ).toEqual({
      modal: true,
      movies: [],
      movieChanged: 'first load',
      newMovie: false,
      searchedMovie: {
        backdrop_path: '/3nYlM34QhzdtAvWRV5bN4nLtnTc.jpg',
        genres: [
          {
            id: 27,
            name: 'Horror',
          },
          {
            id: 53,
            name: 'Thriller',
          },
          {
            id: 12,
            name: 'Adventure',
          },
        ],
        id: 578,
        overview:
          'When an insatiable great white shark terrorizes the townspeople of Amity Island, the police chief, an oceanographer and a grizzled shark hunter seek to destroy the blood-thirsty beast.',
        poster_path: '/s2xcqSFfT6F7ZXHxowjxfG0yisT.jpg',
        rating: 0,
        runtime: 124,
        tagline: "Don't go in the water",
        title: 'Jaws',
        vote_average: 7.6,
        watched: false,
      },
    });
  });

  it('should handle ADD_TO_MOVIE_LIST', () => {
    expect(
      reducer(undefined, {
        type: types.ADD_TO_MOVIE_LIST,
        key: 'jaws',
        userId: 1245,
      })
    ).toEqual({
      modal: true,
      movies: [{ key: 'jaws', userId: 1245 }],
      movieChanged: true,
      newMovie: true,
      selectedMovie: {
        key: 'jaws',
        userId: 1245,
      },
    });
  });

  it('should handle REMOVE_FROM_MOVIE_LIST', () => {
    expect(
      reducer(
        { movies: [selectedMovie] },
        {
          type: types.REMOVE_FROM_MOVIE_LIST,
          movieId: 578,
        }
      )
    ).toEqual({
      movies: [],
      selectedMovie: undefined,
      movieChanged: true,
      newMovie: false,
    });
  });

  it('should handle SET_SELECTED_MOVIE', () => {
    expect(
      reducer(undefined, {
        type: types.SET_SELECTED_MOVIE,
        movie: selectedMovie,
      })
    ).toEqual({
      selectedMovie: selectedMovie,
      movieChanged: true,
      newMovie: false,
      modal: false,
      movies: [],
    });
  });

  it('should handle SET_MOVIE_LIST', () => {
    expect(
      reducer(undefined, {
        type: types.SET_MOVIE_LIST,
        movies: movies,
      })
    ).toEqual({
      selectedMovie: movies[0],
      movieChanged: 'first load',
      newMovie: false,
      modal: false,
      movies: movies,
    });
  });

  it('should handle UPDATE_STAR_RATING', () => {
    const copySelectedMovie = { ...selectedMovie };
    const copyMovies = [...movies];

    copySelectedMovie.rating = 5;
    copyMovies[0].rating = 5;

    expect(
      reducer(
        { selectedMovie: selectedMovie, movies: movies },
        {
          type: types.UPDATE_STAR_RATING,
          rating: 5,
        }
      )
    ).toEqual({
      selectedMovie: copySelectedMovie,
      movieChanged: false,
      movies: copyMovies,
    });
  });

  it('should handle UPDATE_WATCHED', () => {
    const copySelectedMovie = { ...selectedMovie };
    const copyMovies = [...movies];

    copySelectedMovie.watched = true;
    copyMovies[0].watched = true;

    expect(
      reducer(
        { selectedMovie: selectedMovie, movies: movies },
        {
          type: types.UPDATE_WATCHED,
          rating: 5,
        }
      )
    ).toEqual({
      selectedMovie: copySelectedMovie,
      movieChanged: false,
      movies: copyMovies,
    });
  });

  it('should handle CLEAR_STATE', () => {
    const copySelectedMovie = { ...selectedMovie };
    const copyMovies = [...movies];

    copySelectedMovie.watched = true;
    copyMovies[0].watched = true;

    expect(
      reducer(undefined, {
        type: types.CLEAR_STATE,
      })
    ).toEqual({
      modal: false,
      movies: [],
      movieChanged: 'first load',
      newMovie: false,
    });
  });
});
