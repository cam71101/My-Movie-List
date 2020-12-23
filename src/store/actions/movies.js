import * as actionTypes from './actionTypes';
import axios from '../../axios-movie-data';

export const saveMovieData = (movieData) => {
  return {
    type: actionTypes.UPDATE_MOVIE_MODAL,
    searchedMovie: movieData,
  };
};

export const updateMovieModal = (movieID) => {
  return (dispatch, getState) => {
    (async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieID}?api_key=105094d957931ab7b01705c2f3d2dd58`
      );

      const movieData = await response.json();

      const cacheImages = async (srcArray) => {
        const promises = await (() => {
          return new Promise(function (resolve, reject) {
            const img = new Image();
            img.src = `https://image.tmdb.org/t/p/original${srcArray.backdrop_path}`;
            img.onLoad = resolve();
            img.onError = reject();

            const imgtwo = new Image();
            imgtwo.src = `https://image.tmdb.org/t/p/original${srcArray.poster_path}`;
            imgtwo.onLoad = resolve();
            imgtwo.onError = reject();
          });
        });

        await Promise.resolve(promises);
      };

      cacheImages(movieData);

      dispatch(saveMovieData(movieData));
    })();
  };
};

export const addMovie = (key, userId) => {
  return {
    type: actionTypes.ADD_TO_MOVIE_LIST,
    key: key,
    userId: userId,
  };
};

export const clearState = (key, userId) => {
  return {
    type: actionTypes.CLEAR_STATE,
  };
};

export const addToMovieList = (movie, token) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/movies.json?auth=' + token, movie);
      dispatch(addMovie(response.data.name, movie.userId));
    } catch (err) {
      alert(err);
    }
  };
};

export const removeMovie = (movieId) => {
  return {
    type: actionTypes.REMOVE_FROM_MOVIE_LIST,
    movieId: movieId,
  };
};

export const removeFromMovieList = (movieId, token) => {
  return async (dispatch) => {
    dispatch(removeMovie(movieId));
    try {
      await axios.delete(`/movies/${movieId}.json?auth=` + token);
    } catch (err) {
      alert(err);
    }
  };
};

export const setSelectedMovie = (movie) => {
  return {
    type: actionTypes.SET_SELECTED_MOVIE,
    movie: movie,
  };
};

export const setMovieList = (movies) => {
  return {
    type: actionTypes.SET_MOVIE_LIST,
    movies: movies,
  };
};

export const updateRating = (rating) => {
  return {
    type: actionTypes.UPDATE_STAR_RATING,
    rating: rating,
  };
};

export const updateStarRating = (key, token, movie, rating) => {
  return async (dispatch) => {
    dispatch(updateRating(rating));
    try {
      await axios.put(`/movies/${key}.json?auth=${token}`, movie);
    } catch (err) {
      alert(err);
    }
  };
};

export const watched = () => {
  return {
    type: actionTypes.UPDATE_WATCHED,
  };
};

export const updateWatched = (key, movie, token) => {
  return async (dispatch) => {
    dispatch(watched());
    if (!movie.watched) {
      movie.rating = 0;
      dispatch(updateStarRating(key, token, movie, 0));
    }
    try {
      await axios.put(`/movies/${key}.json?auth=${token}`, movie);
    } catch (err) {
      alert(err);
    }
  };
};

export const modalToggle = () => {
  return {
    type: actionTypes.MODAL_TOGGLE,
  };
};
