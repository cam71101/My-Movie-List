import React from 'react';
import { render, fireEvent, screen } from '../../test-utils';
import '@testing-library/jest-dom/extend-expect';

import Auth from './Auth';

const click = { button: 0 };
const onAuth = jest.fn();

const setup = () => {
  return render(<Auth onAuth={onAuth} />);
};

test('Button changes to the signup form', () => {
  setup();
  const switchBtn = screen.getByRole('button', { name: /SWITCH TO SIGNUP/i });
  fireEvent.click(switchBtn, click);
  expect(
    screen.getByRole('button', { name: /SWITCH TO SIGNIN/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /SIGNUP/i })).toBeInTheDocument();
});

// test('Button changes to the signup form', () => {
//   setup();
//   const loginBtn = screen.getByRole('button', { name: /login/i });
//   fireEvent.click(loginBtn, click);
// });

// test('Fires off addMovie function when add button is clicked', () => {
//   setup(false);
//   const addBtn = screen.getByRole('button');
//   fireEvent.click(addBtn, click);
//   expect(addMovie).toHaveBeenCalled();
// });

// test('Modal fires off close functions which close icon is clicked', () => {
//   setup(false);
//   const closeBtn = screen.getByLabelText('close button');
//   fireEvent.click(closeBtn, click);
//   expect(close).toHaveBeenCalled();
// });

// test('Add buttton is disabled when checkMoviesAdded is true', () => {
//   setup(true);
//   const addBtn = screen.getByRole('button');
//   expect(addBtn).toHaveAttribute('disabled');
// });

// test('does not throw warning with expected props', () => {
//   const expectedProps = {
//     genres: [],
//     moviePoster: 'string',
//     checkMovieAdded: true,
//     close: close,
//     title: 'string',
//     tagline: 'string',
//     overview: 'string',
//     runTime: 'string',
//     voteAverage: 0,
//     addMovie: addMovie,
//   };
//   checkProps(PosterModalCard, expectedProps);
// });
