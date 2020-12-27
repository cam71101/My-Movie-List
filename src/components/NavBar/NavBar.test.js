import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';
import { NavBar, LocationDisplay } from './NavBar';

test('full app rendering/navigating', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <NavBar />
    </Router>
  );

  const signOut = screen.getByText(/signout/i);
  expect(signOut).toBeInTheDocument();
});

test('link updates url correctly', () => {
  const history = createMemoryHistory();
  history.push = jest.fn();
  render(
    <Router history={history}>
      <NavBar />
    </Router>
  );

  const signOut = screen.getByText(/signout/i);
  const leftClick = { button: 0 };
  userEvent.click(signOut, leftClick);

  expect(history.push).toHaveBeenCalledWith('/logout');
});
