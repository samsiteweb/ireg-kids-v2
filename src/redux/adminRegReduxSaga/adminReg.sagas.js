import { takeEvery, takeLatest, all, call, put } from "redux-saga/effects";
import AdminFormActionTypes from "./adminReg.action.types";
import { SubmitNewRegistration_Api } from "../../httpRequest/Account_Setup/orgAccountRequest";
import { submitSuccess, submitFail } from "./adminReg.actions";

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

export function* formSubmitSaga() {
  yield takeLatest(AdminFormActionTypes.SUBMIT_START, submitFormDataAsync);
}

export function* myFormSagas() {
  yield all([call(formSubmitSaga)]);
}
