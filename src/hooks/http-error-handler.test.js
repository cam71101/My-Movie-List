import * as React from 'react';
import { render, act } from '@testing-library/react';
import useHttpErrorHandler from './http-error-handler';
import axios from 'axios';

function setup(...args) {
  const returnVal = {};
  function TestComponent() {
    Object.assign(returnVal, useHttpErrorHandler(...args));
    return null;
  }
  render(<TestComponent />);
  return returnVal;
}

test('allows you to clear error', () => {
  const http = setup(axios);

  expect(http[0]).toBe(false);

  act(() => {
    http[1]();
  });

  expect(http[0]).toBe(false);
});
