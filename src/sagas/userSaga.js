// /src/sagas/userSaga.js

import { call, put, takeEvery } from 'redux-saga/effects';

// import { fetchUserData } from '../api/userApi';
// import { fetchUserSuccess, fetchUserFailure, USER_FETCH_REQUESTED } from '../actions/userActions';
import { USER_FETCH_REQUESTED } from "src/actions/userActions";

function* fetchUserSaga() {
  try {
    const response = yield call(fetchUserData);
    yield put(fetchUserSuccess(response.data));
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}

function* userSaga() {
  yield takeEvery(USER_FETCH_REQUESTED, fetchUserSaga);
}

export default userSaga;
