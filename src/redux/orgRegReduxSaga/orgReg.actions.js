import FormActionTypes from "./orgReg.action.types";

export const submitStart = formData => ({
  type: FormActionTypes.SUBMIT_START,
  payload: formData
});

export const submitSuccess = payload => ({
  type: FormActionTypes.SUBMIT_SUCCESS,
  payload: payload
});

export const submitFail = payload => ({
  type: FormActionTypes.SUBMIT_FAIL,
  payload: payload
});

export const showCode = () => ({
  type: FormActionTypes.SHOW_REQUEST_CODE
});

export const uploadImg = () => ({
  type: FormActionTypes.UPLOAD_IMG
});

export const selectCustom = () => ({
  type: FormActionTypes.SELECT_CUSTOM
});

export const selectGet = () => ({
  type: FormActionTypes.SELECT_GET
});

export const requestAccountCode = payload => ({
  type: FormActionTypes.REQUEST_ACCOUNT_START,
  payload: payload
});

export const requestAccountFinished = payload => ({
  type: FormActionTypes.REQUEST_ACCOUNT_FINISHED,
  payload: payload
});
export const requestAccountFailed = payload => ({
  type: FormActionTypes.REQUEST_ACCOUNT_FAILED,
  payload: payload
});
export const verifyAccountStart = payload => ({
  type: FormActionTypes.VERIFY_ACCOUNT_START,
  payload: payload
});
export const verifyAccountFinished = payload => ({
  type: FormActionTypes.VERIFY_ACCOUNT_FINISHED,
  payload: payload
});
export const verifyAccountFailed = payload => ({
  type: FormActionTypes.VERIFY_ACCOUNT_FAILED,
  payload: payload
});

export const confirmCustomAccountCode = payload => ({
  type: FormActionTypes.CONFIRM_CUSTOM_ACCOUNT_CODE_START,
  payload: payload
});
export const confirmCustomFail = payload => ({
  type: FormActionTypes.CONFIRM_CUSTOM_ACCOUNT_CODE_FAILED,
  payload: payload
});
export const confirmCustomFinished = payload => ({
  type: FormActionTypes.CONFIRM_CUSTOM_ACCOUNT_CODE_FINISHED,
  payload: payload
});
