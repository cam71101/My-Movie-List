import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import PosterModalCard from './PosterModalCard';
import { render, fireEvent, screen } from '@testing-library/react';
import { checkProps } from '../../test-utils';

const click = { button: 0 };
const close = jest.fn();
const addMovie = jest.fn();

const setup = (checkMovieAdded) => {
  return render(
    <PosterModalCard
      genres={[]}
      moviePoster="string"
      checkMovieAdded={checkMovieAdded}
      close={close}
      title="string"
      tagline="string"
      overview="string"
      runTime="string"
      voteAverage={5}
      addMovie={addMovie}
    />
  );
};

test('Component renders', () => {
  setup(false);
  screen.getByLabelText('modal-root');
  expect(screen.getByLabelText('modal-root')).toBeInTheDocument();
});

test('Fires off addMovie function when add button is clicked', () => {
  setup(false);
  const addBtn = screen.getByRole('button');
  fireEvent.click(addBtn, click);
  expect(addMovie).toHaveBeenCalled();
});

test('Modal fires off close functions which close icon is clicked', () => {
  setup(false);
  const closeBtn = screen.getByLabelText('close button');
  fireEvent.click(closeBtn, click);
  expect(close).toHaveBeenCalled();
});

test('Add buttton is disabled when checkMoviesAdded is true', () => {
  setup(true);
  const addBtn = screen.getByRole('button');
  expect(addBtn).toHaveAttribute('disabled');
});

test('does not throw warning with expected props', () => {
  const expectedProps = {
    genres: [],
    moviePoster: 'string',
    checkMovieAdded: true,
    close: close,
    title: 'string',
    tagline: 'string',
    overview: 'string',
    runTime: 'string',
    voteAverage: 0,
    addMovie: addMovie,
  };
  checkProps(PosterModalCard, expectedProps);
});
