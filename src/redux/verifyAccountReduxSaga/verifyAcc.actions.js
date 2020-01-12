import VerifyAccActionType from "./verifyAcc.actions.types";

export const VerifyAccountStart = payload => ({
  type: VerifyAccActionType.VERIFY_START,
  payload: payload
});
export const VerifyAccountFinished = payload => ({
  type: VerifyAccActionType.VERIFY_FINISHED,
  payload: payload
});
export const VerifyAccountFailed = payload => ({
  type: VerifyAccActionType.VERIFY_FAILED,
  payload: payload
});
