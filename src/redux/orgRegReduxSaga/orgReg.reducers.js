import FormActionTypes from "./orgReg.action.types";

const INITIAL_START = {
  isLoading: false,
  confirmDirty: false,
  uploadImg: false,
  showCode: false,
  AccountCode: {
    isAccloading: false,
    disableInput: true,
    disableSelect: false,
    accountCodeId: "",
    BtnText: "Get Code",
    resMsg: null
  },
  res: ""
};

const FormReducer = (state = INITIAL_START, action) => {
  switch (action.type) {
    case FormActionTypes.SUBMIT_START:
      return {
        ...state,
        isLoading: true
      };
    case FormActionTypes.SUBMIT_SUCCESS:
      return {
        ...state,
        res: action.payload,
        isLoading: false,
        uploadImg: true
      };
    case FormActionTypes.SUBMIT_FAIL:
      return {
        ...state,
        res: action.payload,
        isLoading: false,
        uploadImg: false
      };
    case FormActionTypes.SHOW_REQUEST_CODE:
      return {
        ...state,
        showCode: true
      };
    case FormActionTypes.UPLOAD_IMG:
      return {
        ...state,
        uploadImg: !state.uploadImg
      };
    case FormActionTypes.SET_ACCOUNT_CODE_REQUEST:
      return {
        ...state,
        AccountCode: {
          ...state.AccountCode,
          BtnText: "Custom Code"
        }
      };
    case FormActionTypes.CONFIRM_CUSTOM_ACCOUNT_CODE_START:
    case FormActionTypes.VERIFY_ACCOUNT_START:
    case FormActionTypes.REQUEST_ACCOUNT_START:
      return {
        ...state,
        AccountCode: {
          ...state.AccountCode,
          isAccloading: true
        }
      };
    case FormActionTypes.CONFIRM_CUSTOM_ACCOUNT_CODE_FINISHED:
    case FormActionTypes.VERIFY_ACCOUNT_FINISHED:
      return {
        ...state,
        AccountCode: {
          ...state.AccountCode,
          successMsg: action.payload,
          isAccloading: false,
          disableInput: true,
          BtnText: "Verified"
        }
      };
    case FormActionTypes.VERIFY_ACCOUNT_FAILED:
    case FormActionTypes.CONFIRM_CUSTOM_ACCOUNT_CODE_FAILED:
    case FormActionTypes.REQUEST_ACCOUNT_FAILED:
      return {
        ...state,
        AccountCode: {
          ...state.AccountCode,
          isAccloading: false,
          resMsg: action.payload
        }
      };
    case FormActionTypes.REQUEST_ACCOUNT_FINISHED:
      return {
        ...state,
        AccountCode: {
          ...state.AccountCode,
          accountCodeId: action.payload,
          isAccloading: false,
          disableInput: false,
          BtnText: "Verify",
          resMsg: action.payload
        }
      };
    case FormActionTypes.SELECT_CUSTOM:
      return {
        ...state,
        AccountCode: {
          ...state.AccountCode,
          disableInput: !state.AccountCode.disableInput,
          BtnText: "Confirm"
        }
      };
    case FormActionTypes.SELECT_GET:
      return {
        ...state,
        AccountCode: {
          ...state.AccountCode,
          disableInput: true,
          BtnText: "Get Code"
        }
      };

    default:
      return state;
  }
};

export default FormReducer;
