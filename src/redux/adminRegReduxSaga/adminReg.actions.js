import AdminFormActionTypes from "./adminReg.action.types";

export const submitStart = formData => ({
  type: AdminFormActionTypes.SUBMIT_START,
  payload: formData
});

export const submitSuccess = payload => ({
  type: AdminFormActionTypes.SUBMIT_SUCCESS,
  payload: payload
});

export const submitFail = payload => ({
  type: AdminFormActionTypes.SUBMIT_FAIL,
  payload: payload
});
