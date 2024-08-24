import { call, put, takeEvery } from 'redux-saga/effects';
import { 
  get_user_request,
  get_user_success,
  get_user_failure,
  update_user_request,
  update_user_success,
  update_user_fail,
} from '../actions/userActions';
import { getUserAPI } from '../APIs/userApi';

function* getUserSaga(payload) {
  try {
    
    console.log('checking saga');
    
    const res = yield call(getUserAPI, payload);
    
    console.log('res',res);
    
    if (res.success) {
      yield put({
        type: get_user_success,
        payload: res,
      });
    } else {
      yield put({
        type: get_user_failure,
        payload: res,
      });
    }
  } catch (error) {
    console.error('Error [GET USER SAGA] ', error);
  }
}

function* updateUserSaga(payload) {
  try {
    const res = yield call(getUserAPI, payload);
    if (res.success) {
      yield put({
        type: update_user_success,
        payload: res,
      });
    } else {
      yield put({
        type: update_user_fail,
        payload: res,
      });
    }
  } catch (error) {
    console.error('Error [UPDATE USER SAGA] ', error);
  }
}

export function* userSaga() {
  yield takeEvery(get_user_request, getUserSaga);
  yield takeEvery(update_user_request, updateUserSaga);
}

// export default userSaga;
