// /src/reducers/userReducer.js

import { USER_FETCH_FAILED, USER_FETCH_REQUESTED, USER_FETCH_SUCCEEDED } from "src/actions/userAction/type";

// import { USER_FETCH_FAILED, USER_FETCH_REQUESTED, USER_FETCH_SUCCEEDED } from "src/actions/userAction";

const initialState = {
  user: null,
  error: null,
  loading:false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCH_REQUESTED:
        return {...state,loading:true};
    case USER_FETCH_SUCCEEDED:
        return { ...state, user: action.payload, error: null };
    case USER_FETCH_FAILED:
        return { ...state, error: action.payload };
    default:
        return state;
  }
};

export default userReducer;
