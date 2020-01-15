import VerifyAccActionType from "./verifyAcc.actions.types";

const initial_state = {
  resDataInfo: null,
  response: null,
  isLoading: false,
  isValid: false
};

const VerifyAccReducer = (state = initial_state, action) => {
  switch (action.type) {
    case VerifyAccActionType.VERIFY_START:
      return {
        ...state,
        isLoading: true
      };
    case VerifyAccActionType.VERIFY_FINISHED:
      return {
        ...state,
        response: action.payload,
        isLoading: false,
        isValid: true,
        resDataInfo: action.payloadData
      };
    case VerifyAccActionType.VERIFY_FAILED:
      return {
        ...state,
        response: action.payload,
        isLoading: false
      };

    default:
      return state;
  }
};

export default VerifyAccReducer;
