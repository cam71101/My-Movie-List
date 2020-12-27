import React from 'react';
import {
  render,
  fireEvent,
  screen,
  storeFactory,
  findByTestAttr,
} from '../../test-utils';
import '@testing-library/jest-dom/extend-expect';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';

import Auth from './Auth';
import { auth } from '../../store/actions/index';
import * as types from '../../store/actions/actionTypes';

const click = { button: 0 };
const onAuth = jest.fn();

Enzyme.configure({ adapter: new Adapter() });

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
//   const onAuth = jest.fn();
//   const error = {
//     data: {
//       error: {
//         message: 'error',
//       },
//     },
//   };
//   const store = storeFactory({
//     auth: {
//       error: error,
//     },
//   });

//   const wrapper = shallow(<Auth store={store} onAuth={onAuth} />)
//     .dive()
//     .dive();

//   const button = findByTestAttr(wrapper, 'button');
//   button.simulate('click', { preventDefault() {} });

// expect(onAuth).toHaveBeenCalled();

// const errorProp = wrapper.instance().props.error;

// console.log(errorProp);

// store.dispatch(auth('test@test.com', 'happy123', false));
// const newState = store.getState();
// const expectedState = {
//   auth: { error: null, loading: true, token: null, userId: null },
//   movies: {
//     modal: false,
//     movies: [],
//     movieChanged: 'first load',
//     newMovie: false,
//   },
// };

// expect(newState).toEqual(expectedState);
// });
