import SetupActionTypes from "./setup.action.types";

export const setToOrg = () => ({
  type: SetupActionTypes.HIDE_ADMIN_FORM
});
export const setToAdmin = () => ({
  type: SetupActionTypes.HIDE_ORG_FORM
});
export const setStepStatus = payload => ({
  type: SetupActionTypes.SET_STATUS,
  payload: payload
});
