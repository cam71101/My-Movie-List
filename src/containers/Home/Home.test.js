import React from 'react';
import { render, fireEvent, screen } from '../../test-utils';
import '@testing-library/jest-dom/extend-expect';

import Home from './Home';

test('Renders component with movie cards', async () => {
  render(<Home />, {
    initialState: {},
  });
  expect(screen.getByRole('progressbar')).toBeInTheDocument();
});
