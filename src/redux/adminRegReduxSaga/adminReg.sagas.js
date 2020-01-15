import { takeEvery, takeLatest, all, call, put } from "redux-saga/effects";
import AdminFormActionTypes from "./adminReg.action.types";
import {
  SubmitAdminRegistration,
  SubmitExistingAdminRegistration
} from "../../httpRequest/Account_Setup/adminRequests";
import { submitSuccess, submitFail, isExisting } from "./adminReg.actions";

import {
  successMsg,
  errorMsg
} from "../../components/messageComponent/message";
import ConfirmModal from "../../components/modalComponent/confirm.modal";

const intErr = "Please Check your Internet Connection";
function* submitAdminFormDataAsync({ payload }) {
  yield console.log(payload, "form data");
  try {
    const submitRes = yield SubmitAdminRegistration(payload);
    yield console.log(submitRes.data, "USER data ");
    if (submitRes.data.ExistingUserId) {
      yield put(isExisting(submitRes.data));
      // yield call(successMsg, `${"is this you "}`, 10);
    } else {
      yield put(submitSuccess(submitRes.data));
      yield call(successMsg, `${"Form Submitted Successfully"}`, 10);
    }
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
  yield takeLatest(
    AdminFormActionTypes.SUBMIT_ADMIN_START,
    submitAdminFormDataAsync
  );
}

export function* submitExisitingUserAsync({ payload }) {
  yield console.log(payload, "existing user data ");
  try {
    const submitRes = yield SubmitExistingAdminRegistration(payload);
    yield put(submitSuccess(submitRes.data));
    yield call(successMsg, `${"Form Submitted Successfully"}`, 10);
  } catch (e) {
    yield put(submitFail(e));
    yield call(
      errorMsg,
      `${e.response ? e.response.data.Message : intErr}`,
      10
    );
  }
}

export function* submitExistingUser() {
  yield takeLatest(
    AdminFormActionTypes.SUBMIT_EXISTING_START,
    submitExisitingUserAsync
  );
}

export function* myAdminFormSagas() {
  yield all([call(formSubmitSaga), call(submitExistingUser)]);
}
