import LOGIN_ACTION_TYPES from "./login.action.types";
export const loginStart = data => ({
  type: LOGIN_ACTION_TYPES.LOGIN_START,
  payload: data
});

export const loginSuccess = payload => ({
  type: LOGIN_ACTION_TYPES.LOGIN_SUCCESS,
  payload: payload
});
export const loginFail = payload => ({
  type: LOGIN_ACTION_TYPES.LOGIN_FAIL,
  payload: payload
});
