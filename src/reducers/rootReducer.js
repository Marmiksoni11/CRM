import { combineReducers } from 'redux';
import userReducer from './userReducers';
import authReducers from './authReducers';

const rootReducer = combineReducers({
  users: userReducer,
  auth: authReducers,
});

export default rootReducer;
