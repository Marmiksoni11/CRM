import {
  get_user_request,
  get_user_success,
  get_user_failure,
} from '../actions/userActions';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case get_user_request:
      return {
        ...state,
        loading: true,
      };
    case get_user_success:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case get_user_failure:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
