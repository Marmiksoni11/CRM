// /src/sagas/index.js

import { all } from 'redux-saga/effects';
import { userSaga } from './userSaga';
import { authSaga } from './authSaga';

export default function* rootSaga() {
  yield all([ 
    authSaga(),
    userSaga(),
  ]);
}
