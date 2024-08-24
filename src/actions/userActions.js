import {
  USER_GET_SUCCEEDED,
  USER_GET_REQUESTED,
  USER_GET_FAILED,
  USER_UPDATE_SUCCEEDED,
  USER_UPDATE_REQUESTED,
  USER_UPDATE_FAILED,
} from './types';

export const get_user_request = (data) => ({
  type: USER_GET_REQUESTED,
  payload: data,
});
export const get_user_success = (data) => ({
  type: USER_GET_SUCCEEDED,
  payload: data,
});
export const get_user_failure = (error) => ({
  type: USER_GET_FAILED,
  payload: error,
});

export const update_user_request = (id, user) => ({
  type: USER_UPDATE_REQUESTED,
  payload: { id, user },
});
export const update_user_success = (data) => ({
  type: USER_UPDATE_SUCCEEDED,
  payload: data,
});
export const update_user_fail = (error) => ({
  type: USER_UPDATE_FAILED,
  payload: error,
});
