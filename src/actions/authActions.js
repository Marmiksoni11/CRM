
import {
  USER_CREATE_REQUESTED,
  USER_CREATE_SUCCEEDED,
  USER_CREATE_FAILED,
  USER_LOGIN_REQUESTED,
  USER_LOGIN_SUCCEEDED,
  USER_LOGIN_FAILED,
} from './types';

export const create_user_request = (data) => ({
  type: USER_CREATE_REQUESTED,
  payload: data,
});
export const create_user_success = (data) => ({
  type: USER_CREATE_SUCCEEDED,
  payload: data,
});
export const create_user_fail = (error) => ({
  type: USER_CREATE_FAILED,
  payload: error,
});
  
export const login_user_request = (data) => ({
  type: USER_LOGIN_REQUESTED,
  payload: data,
});
export const login_user_success = (data) => ({
  type: USER_LOGIN_SUCCEEDED,
  payload: data,
});
export const login_user_fail = (error) => ({
  type: USER_LOGIN_FAILED,
  payload: error,
});
  