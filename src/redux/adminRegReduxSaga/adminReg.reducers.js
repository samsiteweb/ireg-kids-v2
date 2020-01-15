import AdminFormActionTypes from "./adminReg.action.types";

const INITIAL_START = {
  isLoading: false,
  isExitingRes: null,
  confirmDirty: false,
  res: "",
  uploadImg: false,
  modalVisible: false,
  formSubmittedSuccess: false
};

const AdminFormReducer = (state = INITIAL_START, action) => {
  switch (action.type) {
    case AdminFormActionTypes.SUBMIT_ADMIN_START:
      return {
        ...state,
        isLoading: true
      };
    case AdminFormActionTypes.SUBMIT_SUCCESS:
      return {
        ...state,
        res: action.payload,
        isLoading: false,
        uploadImg: true,
        modalVisible: false
      };
    case AdminFormActionTypes.SUBMIT_FAIL:
      return {
        ...state,
        res: action.payload,
        isLoading: false,
        modalVisible: false
      };

    case AdminFormActionTypes.ISEXISTING:
      return {
        ...state,
        isLoading: false,
        modalVisible: true,
        isExitingRes: action.payload
      };
    case AdminFormActionTypes.CLOSEMODAL:
      return {
        ...state,
        modalVisible: false
      };

    default:
      return state;
  }
};

export default AdminFormReducer;
