// /src/actions/userActions.js

export const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED';
export const USER_FETCH_SUCCEEDED = 'USER_FETCH_SUCCEEDED';
export const USER_FETCH_FAILED = 'USER_FETCH_FAILED';

// Action creators
export const fetchUser = () => ({
  type: USER_FETCH_REQUESTED,
});

export const fetchUserSuccess = (user) => ({
  type: USER_FETCH_SUCCEEDED,
  payload: user,
});

export const fetchUserFailure = (error) => ({
  type: USER_FETCH_FAILED,
  payload: error,
});
