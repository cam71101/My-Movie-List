import React from 'react';
import { render, fireEvent, screen } from '../../test-utils';
import '@testing-library/jest-dom/extend-expect';
// import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Auth from './Auth';

const click = { button: 0 };
const onAuth = jest.fn();

// Enzyme.configure({ adapter: new Adapter() });

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
