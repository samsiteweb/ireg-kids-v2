import RetriveActionTypes from "./retrivePass.action.types";

export const ValidationStart = payload => ({
  type: RetriveActionTypes.VALIDATE_CRED_START,
  payload: payload
});

export const ValidationFinished = payload => ({
  type: RetriveActionTypes.VALIDATE_CRED_FINISHED,
  payload: payload
});

export const ValidationFailed = payload => ({
  type: RetriveActionTypes.VALIDATE_CRED_FAILED,
  payload: payload
});

export const UpdateStart = payload => ({
  type: RetriveActionTypes.UPDATE_CRED_START,
  payload: payload
});

export const UpdateFinished = payload => ({
  type: RetriveActionTypes.UPDATE_CRED_FINISHED,
  payload: payload
});

export const UpdateFailed = payload => ({
  type: RetriveActionTypes.UPDATE_CRED_FAILED,
  payload: payload
});
