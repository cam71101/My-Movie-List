import React from 'react';
import { render, screen } from '../../../test-utils';
import '@testing-library/jest-dom/extend-expect';

import SearchMoviesField from './SearchMoviesField';

test('Renders component with movie cards', async () => {
  render(<SearchMoviesField />);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});
