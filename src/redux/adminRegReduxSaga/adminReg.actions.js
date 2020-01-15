import AdminFormActionTypes from "./adminReg.action.types";

export const submitStart = formData => ({
  type: AdminFormActionTypes.SUBMIT_ADMIN_START,
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

export const isExisting = payload => ({
  type: AdminFormActionTypes.ISEXISTING,
  payload: payload
});
export const closeModal = () => ({
  type: AdminFormActionTypes.CLOSEMODAL
});
export const submitExistingStart = (formData, id) => ({
  type: AdminFormActionTypes.SUBMIT_EXISTING_START,
  payload: formData,
  id: id
});
