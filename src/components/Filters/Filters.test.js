import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import Filters from './Filters';
// import selectedMovie from '../../__mocks__/selected_movie_response.json';
import { render, fireEvent, screen } from '@testing-library/react';
import { checkProps } from '../../test-utils';

const click = { button: 0 };
const handleTitleChange = jest.fn();
const handleGenreChange = jest.fn();
const handleSelectChange = jest.fn();

const setup = (filter, filterGenre) => {
  return render(
    <Filters
      filterSelect={filter}
      handleGenreChange={handleGenreChange}
      handleSelectChange={handleSelectChange}
      filterGenre={filterGenre}
      handleTitleChange={handleTitleChange}
    />
  );
};

test('It should call handleTitleChange function', () => {
  setup('title');
  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'batman' } });
  expect(input.value).toBe('batman');
  expect(handleTitleChange).toHaveBeenCalled();
});

test('Dropdown should have genre ', () => {
  setup('genre', 'Action');
  const filter = screen.getByLabelText('genre');
  expect(filter).toBeInTheDocument();
});

test('does not throw warning with expected props', () => {
  const expectedProps = {
    filterSelect: 'string',
    handleTitleChange: handleTitleChange,
    handleGenreChange: handleGenreChange,
  };
  checkProps(Filters, expectedProps);
});
