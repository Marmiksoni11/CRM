import { USER_FETCH_SUCCEEDED,USER_FETCH_REQUESTED,USER_DELETE_FAILED } from "./type";
export const fetchUserReq = ()=> ({
    type:USER_FETCH_REQUESTED
});
export const fetchUserSucc = (data)=> ({
    type:USER_FETCH_SUCCEEDED,
    payload:data
});
export const fetchUserFail = (error)=> ({
    type:USER_DELETE_FAILED,
    payload:error
});
