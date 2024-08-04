import { USER_CREATE_REQUESTED,USER_CREATE_SUCCEEDED,USER_CREATE_FAILED} from "./type" 

export const CreateUserReq = (data) =>({
    type:USER_CREATE_REQUESTED,
    payload:data
});
export const CreateUserSucc = (data)=>({
    type:USER_CREATE_SUCCEEDED,
    payload:data
});
export const CreateUserFail = (error)=>({
    type:USER_CREATE_FAILED,
    payload:error
})