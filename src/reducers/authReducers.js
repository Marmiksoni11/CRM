import {
  login_user_request,
  login_user_success,
  login_user_fail,
} from '../actions/authActions';
  
  const initialState = {
    loading: false,
    data: null,
    error: null,
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case login_user_request:
        return {
          ...state,
          loading: true,
        };
      case login_user_success:
        return {
          ...state,
          data: action.payload,
          loading: false,
        };
      case login_user_fail:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default loginReducer;
  