import LOGIN_ACTION_TYPES from "./login.action.types";
const INITIAL_USER_AUTH = {
  isLoading: false,
  data: null,
  message: ""
};

const loginReducer = (state = INITIAL_USER_AUTH, action) => {
  switch (action.type) {
    case LOGIN_ACTION_TYPES.LOGIN_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    case LOGIN_ACTION_TYPES.LOGIN_FAIL:
    case LOGIN_ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        message: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
export default loginReducer;
