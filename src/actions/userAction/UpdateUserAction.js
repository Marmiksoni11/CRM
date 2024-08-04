import { USER_UPDATE_SUCCEEDED,USER_UPDATE_REQUESTED,USER_UPDATE_FAILED } from "./type";

export const updateUserReq = (id, user) => ({
    type: USER_UPDATE_REQUESTED,
    payload: { id, user },
  });
export const updateUserSucc = (data) => ({
    type: USER_UPDATE_SUCCEEDED,
    payload: data,
  });
export const updateUserFail = (error) => ({
    type: USER_UPDATE_FAILED,
    payload: error,
  });