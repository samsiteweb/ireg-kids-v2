import AdminFormActionTypes from "./adminReg.action.types";

const INITIAL_START = {
  isLoading: false,
  confirmDirty: false,
  res: ""
};

const AdminFormReducer = (state = INITIAL_START, action) => {
  switch (action.type) {
    case AdminFormActionTypes.SUBMIT_START:
      return {
        ...state,
        isLoading: true
      };
    case AdminFormActionTypes.SUBMIT_SUCCESS:
      return {
        ...state,
        res: action.payload,
        isLoading: false,
        uploadImg: true
      };
    case AdminFormActionTypes.SUBMIT_FAIL:
      return {
        ...state,
        res: action.payload,
        isLoading: false
      };

    default:
      return state;
  }
};

export default AdminFormReducer;
