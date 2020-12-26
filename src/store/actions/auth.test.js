import * as actions from './index';
import * as types from './actionTypes';

describe('actions', () => {
  it('should start authorisation process', () => {
    const expectedAction = {
      type: types.AUTH_START,
    };

    expect(actions.authStart()).toEqual(expectedAction);
  });

  it('should updated state with successfull authorisation', () => {
    const token = 12345;
    const userId = 12345;
    const expectedAction = {
      type: types.AUTH_SUCCESS,
      idToken: token,
      userId: userId,
    };

    expect(actions.authSuccess(token, userId)).toEqual(expectedAction);
  });

  it('should updated state with error', () => {
    const error = 'error';
    const expectedAction = {
      type: types.AUTH_FAIL,
      error: error,
    };
    expect(actions.authFail(error)).toEqual(expectedAction);
  });

  it('should logout user', () => {
    const expectedAction = {
      type: types.AUTH_LOGOUT,
    };
    expect(actions.logout()).toEqual(expectedAction);
  });
});
