import SetupActionTypes from "./setup.action.types";

const initialState = {
  current: 0,
  hideOrgForm: false,
  hideAdminForm: true,
  adminStepStatus: "wait",
  orgStepStatus: "process"
};

const SetupReducers = (state = initialState, action) => {
  switch (action.types) {
    case SetupActionTypes.HIDE_ORG_FORM:
      return {
        ...state,
        current: 1,
        hideOrgForm: true,
        hideAdminForm: false
      };

    case SetupActionTypes.HIDE_ADMIN_FORM:
      return {
        ...state,
        current: 0,
        hideOrgForm: false,
        hideAdminForm: true
      };
    case SetupActionTypes.SET_STATUS:
      return {
        ...state,
        adminStepStatus: action.payload,
        orgStepStatus: action.payload
      };
    default:
      return state;
  }
};

export default SetupReducers;
