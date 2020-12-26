import React from 'react';
import { render, fireEvent, screen } from '../../../test-utils';
import '@testing-library/jest-dom/extend-expect';

import Movielist from './MovieList';
import movies from '../../../__mocks__/movies_response.json';
import selectedMovie from '../../../__mocks__/selected_movie_response.json';

test('Renders component with movie cards', async () => {
  render(<Movielist filterSelect={'none'} />, {
    initialState: {
      movies: {
        movies: movies,
        selectedMovie: selectedMovie,
      },
    },
  });
  screen.getAllByRole('button');
});

test('Renders component with no movies and no errors', async () => {
  render(<Movielist filterSelect={'none'} />, {});
  screen.getByLabelText('root');
});
