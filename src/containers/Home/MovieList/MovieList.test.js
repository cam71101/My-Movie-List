import React from 'react';
import { render, fireEvent, screen } from '../../../test-utils';
import '@testing-library/jest-dom/extend-expect';

import Movielist from './MovieList';

test('loads and displays greeting', async () => {
  render(<Movielist />, {});
});
