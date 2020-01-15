import RetriveActionTypes from "./retrivePass.action.types";

const initial_state = {
  isloading: false,
  res: null
};

const RetrivePasswordReducer = (state = initial_state, action) => {
  switch (action.type) {
    case RetriveActionTypes.UPDATE_CRED_START:
    case RetriveActionTypes.VALIDATE_CRED_START:
      return {
        ...state,
        isloading: true,
        res: action.payload
      };
    case RetriveActionTypes.UPDATE_CRED_FINISHED:
    case RetriveActionTypes.UPDATE_CRED_FAILED:
    case RetriveActionTypes.VALIDATE_CRED_FAILED:
    case RetriveActionTypes.VALIDATE_CRED_FINISHED:
      return {
        ...state,
        isloading: false,
        res: action.payload
      };

    default:
      return state;
  }
};

export default RetrivePasswordReducer;
