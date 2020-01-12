import { takeEvery, takeLatest, all, call, put } from "redux-saga/effects";
import FormActionTypes from "./orgReg.action.types";
import {
  RequestAccountCode_Api,
  ValidateAccountCode_Api,
  RequestCustomCode_Api,
  SubmitNewRegistration_Api
} from "../../httpRequest/Account_Setup/orgAccountRequest";
import {
  requestAccountFinished,
  requestAccountFailed,
  verifyAccountFailed,
  verifyAccountFinished,
  confirmCustomFinished,
  confirmCustomFail,
  submitSuccess,
  submitFail
} from "./orgReg.actions";

import {
  successMsg,
  errorMsg
} from "../../components/messageComponent/message";

const intErr = "Please Check your Internet Connection";
function* submitFormDataAsync({ payload }) {
  yield console.log(payload, "i got the form datas in my saga");
  try {
    const submitRes = yield SubmitNewRegistration_Api(payload);
    yield put(submitSuccess(submitRes.data.Result));
    yield call(successMsg, `${submitRes.data.Message}`, 10);
  } catch (e) {
    yield put(submitFail(e));
    yield call(
      errorMsg,
      `${e.response ? e.response.data.Message : intErr}`,
      10
    );
  }
}

function* verifyAccountCodeAsync({ payload: { data } }) {
  yield console.log(data.code.Code, ": i got the code to be verified");

  try {
    const verify = yield ValidateAccountCode_Api(data);

    yield put(verifyAccountFinished(verify));
    yield call(successMsg, `${verify.data.Message}`, 10);
  } catch (e) {
    yield put(verifyAccountFailed(e));
    yield call(
      errorMsg,
      `${e.response ? e.response.data.Message : intErr}`,
      10
    );
  }
}

function* confirmAccountCodeAsync({ payload: { data } }) {
  yield console.log(data.code.Code, ": i got the custom code here");

  try {
    const confirmResult = yield RequestCustomCode_Api(data.code.Code);
    yield put(confirmCustomFinished(confirmResult));
  } catch (error) {
    yield put(confirmCustomFail(error));
  }
}

export function* formSubmitSaga() {
  yield takeLatest(FormActionTypes.SUBMIT_START, submitFormDataAsync);
}

function* requestAccountCodeAsync({ payload: { data } }) {
  yield console.log(data, ":I got the parameters account");
  try {
    const getAccountCode = yield RequestAccountCode_Api(data);
    yield call(
      successMsg,
      `An account code has been sent to ${data.email} or ${data.sms} successfully`,
      10
    );
    yield put(requestAccountFinished(getAccountCode.data.Result));
  } catch (e) {
    yield put(requestAccountFailed(e));
    yield call(errorMsg, `${e.response ? e.response.data.Message : intErr}`, 5);
  }
}
export function* requestAccountCodeSaga() {
  yield takeLatest(
    FormActionTypes.REQUEST_ACCOUNT_START,
    requestAccountCodeAsync
  );
}

export function* verifyCodeSaga() {
  yield takeEvery(FormActionTypes.VERIFY_ACCOUNT_START, verifyAccountCodeAsync);
}
export function* comfirmCustomAccountCodeSaga() {
  yield takeLatest(
    FormActionTypes.CONFIRM_CUSTOM_ACCOUNT_CODE_START,
    confirmAccountCodeAsync
  );
}

export default function* myFormSagas() {
  yield all([
    call(formSubmitSaga),
    call(requestAccountCodeSaga),
    call(verifyCodeSaga),
    call(comfirmCustomAccountCodeSaga)
  ]);
}
