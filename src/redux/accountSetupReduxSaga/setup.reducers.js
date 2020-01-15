import SetupActionTypes from "./setup.action.types";

const initialState = {
  current: 0,
  hideOrgForm: false,
  hideAdminForm: true,
  adminStepStatus: "wait",
  orgStepStatus: "process",
  destroyForm: false
};

const SetupReducers = (state = initialState, action) => {
  switch (action.type) {
    case SetupActionTypes.DESTROYFORM:
      return {
        ...state,
        destroyForm: true,
        current: 1,
        hideOrgForm: true,
        hideAdminForm: false,
        adminStepStatus: "process",
        orgStepStatus: "wait"
      };
    case SetupActionTypes.HIDE_ORG_FORM:
      return {
        ...state,
        current: 1,
        hideOrgForm: true,
        hideAdminForm: false,
        adminStepStatus: "process",
        orgStepStatus: "wait"
      };

    case SetupActionTypes.HIDE_ADMIN_FORM:
      return {
        ...state,
        current: 0,
        hideOrgForm: false,
        hideAdminForm: true,
        adminStepStatus: "wait",
        orgStepStatus: "process",
        destroyForm: false
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
