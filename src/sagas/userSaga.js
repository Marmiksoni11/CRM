import { ca } from 'date-fns/locale';
import { call, put, takeEvery } from 'redux-saga/effects';
import { CreateUserFail, CreateUserReq, CreateUserSucc } from 'src/actions/userAction/CreateUserAction';
import { fetchUserFail, fetchUserReq, fetchUserSucc } from 'src/actions/userAction/FetchUserAction';
import { USER_CREATE_REQUESTED, USER_FETCH_REQUESTED, USER_UPDATE_REQUESTED } from 'src/actions/userAction/type';
import { updateUserFail, updateUserReq, updateUserSucc} from 'src/actions/userAction/UpdateUserAction';
// import { updateUserRequested } from 'src/actions/userAction/UpdateUserAction';

// import { fetchUserSuccess, fetchUserFailure, createUserRequested, USER_CREATE_REQUESTED, createUserFailure } from '../actions/userActions';
// import { USER_FETCH_REQUESTED } from "src/actions/userActions";
import { instance } from 'src/APIs/apiBase';

function* fetchUserSaga() {
  try {
    const response = yield call(instance.get,"/api/v1/user",{
      headers: {
        'Content-Type': 'application/json', // here set header for a perticular req ok!
      },
    });
    console.log("response====>>>>",response)
    yield put(fetchUserSucc(response.data));
  } catch (error) {
    yield put(fetchUserFail(error.message));
  }
}

function* createUserSaga(action){
  try {
    const response = yield call(instance.post,"/api/v1/user",action.payload);
    yield put(CreateUserSucc(response.data))
  } catch (error) {
    yield put(CreateUserFail(error.message));
  }
}
function* updateUserSaga(action){
  try {
    const response = yield call(instance.put,`/api/v1/user/${action.payload.id}`);
    yield put(updateUserSucc(response.data))
  } catch (error) {
    yield put(updateUserFail(error.message));
    
  }
}

function* userSaga() {
  yield takeEvery(USER_FETCH_REQUESTED, fetchUserSaga);
  yield takeEvery(USER_CREATE_REQUESTED,createUserSaga);
  yield takeEvery(USER_UPDATE_REQUESTED,updateUserSaga);
}

export default userSaga;
