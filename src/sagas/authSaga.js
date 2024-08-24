import { call, put, takeEvery } from 'redux-saga/effects';
import { 
  login_user_request,
  login_user_success,
  login_user_fail,
  create_user_request, 
  create_user_success,
  create_user_fail,
} from '../actions/authActions';
import { loginUserAPI, createUserAPI } from '../APIs/authApi';

function* loginUserSaga(payload) {
  try {
    const res = yield call(loginUserAPI, payload);
    
    console.log('checking here', res);
    
    if (res.success) {
      yield put({
        type: login_user_success,
        payload: res,
      });
    } else {
      yield put({
        type: login_user_fail,
        payload: res,
      });
    }
  } catch (error) {
    console.error('Error [LOGIN USER SAGA] ', error);
  }
}

function* createUserSaga(payload) {
  try {
    const res = yield call(createUserAPI, payload);
    if (res.success) {
      yield put({
        type: create_user_success,
        payload: res,
      });
    } else {
      yield put({
        type: create_user_fail,
        payload: res,
      });
    }
  } catch (error) {
    console.error('Error [LOGIN USER SAGA] ', error);
  }
}

export function* authSaga() {
  yield takeEvery(login_user_request, loginUserSaga);
  yield takeEvery(create_user_request, createUserSaga);
}

// export default userSaga;
