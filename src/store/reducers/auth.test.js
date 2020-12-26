import reducer from './auth';
import * as types from '../actions/actionTypes';
import { cleanup } from '@testing-library/react';

describe('movies reducer', () => {
  afterEach(cleanup);

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
    });
  });

  it('should handle AUTH_START', () => {
    expect(
      reducer(undefined, {
        type: types.AUTH_START,
      })
    ).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: true,
    });
  });

  it('should handle AUTH_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: types.AUTH_SUCCESS,
        idToken: 12345,
        userId: 12345,
      })
    ).toEqual({
      token: 12345,
      userId: 12345,
      error: null,
      loading: false,
    });
  });

  it('should handle AUTH_FAIL', () => {
    expect(
      reducer(undefined, {
        type: types.AUTH_FAIL,
        error: 'error',
      })
    ).toEqual({
      token: null,
      userId: null,
      error: 'error',
      loading: false,
    });
  });

  it('should handle AUTH_LOGOUT', () => {
    expect(
      reducer(
        { token: 12345, userId: 15653 },
        {
          type: types.AUTH_LOGOUT,
        }
      )
    ).toEqual({
      token: null,
      userId: null,
    });
  });
});
