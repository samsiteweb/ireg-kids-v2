const FormActionTypes = {
  SUBMIT_START: "SUBMIT_START",
  SUBMIT_SUCCESS: "SUBMIT_SUCCESS",
  SUBMIT_FAIL: "SUBMIT_FAIL",

  SHOW_REQUEST_CODE: "SHOW_REQUEST_CODE",

  CONFIRM_DIRTY: "CONFIRM_DIRTY",

  UPLOAD_IMG: "UPLOAD_IMG",
  SET_ACCOUNT_CODE_REQUEST: "SET_ACCOUNT_CODE_REQUEST",

  REQUEST_ACCOUNT_CODE: "REQUEST_ACCOUNT_CODE",
  REQUEST_ACCOUNT_START: "REQUEST_ACCOUNT_START",
  REQUEST_ACCOUNT_FINISHED: "REQUEST_ACCOUNT_FINISHED",
  REQUEST_ACCOUNT_FAILED: "REQUEST_ACCOUNT_FAILED",

  VERIFY_ACCOUNT_START: "VERIFY_ACCOUNT_CODE",
  VERIFY_ACCOUNT_FINISHED: "VERIFY_ACCOUNT_FINISHED",
  VERIFY_ACCOUNT_FAILED: "VERIFY_ACCOUNT_FAILED",

  SELECT_CUSTOM: "SELECT_CUSTOM",
  SELECT_GET: "SELECT_GET",

  CONFIRM_CUSTOM_ACCOUNT_CODE_START: "CONFIRM_CUSTOM_ACCOUNT_CODE_START",
  CONFIRM_CUSTOM_ACCOUNT_CODE_FINISHED: "CONFIRM_CUSTOM_ACCOUNT_CODE_FINISHED",
  CONFIRM_CUSTOM_ACCOUNT_CODE_FAILED: "CONFIRM_CUSTOM_ACCOUNT_CODE_FAILED"
};

export default FormActionTypes;
