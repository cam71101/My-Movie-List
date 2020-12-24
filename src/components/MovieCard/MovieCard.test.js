import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import MovieCard from './MovieCard';
import selectedMovie from '../../__mocks__/selected_movie_response.json';
import { render, fireEvent, screen } from '@testing-library/react';
import { checkProps } from '../../test-utils';

const click = { button: 0 };
const select = jest.fn();
const remove = jest.fn();
const setup = () => {
  return render(
    <MovieCard
      movie={selectedMovie}
      title="Mean Girls 2"
      watched={false}
      select={select}
      poster="/34zKHT98ZgSCz6ag1ZNBul7f1Wu.jpg"
      rating={0}
      remove={remove}
    />
  );
};
test('Fires remove function when clicked remove button', () => {
  setup();
  const removeBtn = screen.getByRole('button', { name: /remove Movie/i });
  fireEvent.click(removeBtn, click);
  expect(remove).toHaveBeenCalled();
});

test('Fires select function when card is clicked on', () => {
  setup();
  const selectBtn = screen.getByRole('button', { name: /mean girls 2/i });
  fireEvent.click(selectBtn, click);
  expect(select).toHaveBeenCalled();
});

test('does not throw warning with expected props', () => {
  const expectedProps = {
    movie: selectedMovie,
    title: 'string',
    watched: false,
    select: select,
    poster: 'string',
    rating: 0,
    remove: remove,
  };
  checkProps(MovieCard, expectedProps);
});
