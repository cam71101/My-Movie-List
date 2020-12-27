import React from 'react';
import { render, fireEvent, screen, storeFactory } from '../../test-utils';
import '@testing-library/jest-dom/extend-expect';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';

import Auth from './Auth';

const click = { button: 0 };
const onAuth = jest.fn();

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

const setup = () => {
  return render(<Auth onAuth={onAuth} />);
};

const thunk = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }
  return next(action);
};

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn();

  const invoke = (action) => thunk(store)(next)(action);

  return { store, next, invoke };
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

test('Button changes to the signup form', () => {
  // const { invoke } = create();
  // const onAuth = jest.fn();
  // invoke(onAuth);
  // expect(onAuth).toHaveBeenCalled();
  // setup();
  // const loginBtn = screen.getByRole('button', { name: /login/i });
  // fireEvent.click(loginBtn, click);
  const store = storeFactory({});
  const onAuth = jest.fn();
  const wrapper = shallow(<Auth store={store} onAuth={onAuth} />)
    .dive()
    .dive();
  console.log(wrapper.debug());
});
