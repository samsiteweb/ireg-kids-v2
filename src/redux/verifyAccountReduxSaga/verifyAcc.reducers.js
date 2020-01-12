import VerifyAccActionType from "./verifyAcc.actions.types";

const initial_state = {
  response: null,
  isloading: false
};

const VerifyAccReducer = (state = initial_state, action) => {
  switch (action.type) {
    case VerifyAccActionType.VERIFY_START:
      return {
        ...state,
        isloading: true
      };
    case VerifyAccActionType.VERIFY_FINISHED:
      return {
        ...state,
        response: action.payload,
        isloading: false
      };
    case VerifyAccActionType.VERIFY_FAILED:
      return {
        ...state,
        response: action.payload,
        isloading: false
      };

    default:
      return state;
  }
};

export default VerifyAccReducer;
