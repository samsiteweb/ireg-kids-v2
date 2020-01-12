import { takeLatest, put } from "redux-saga/effects";

import LOGIN_ACTION_TYPES from "./login.action.types";
import { Auth } from "../../httpRequest/Account_Setup/signInRequest";
import { loginSuccess, loginFail } from "./login.actions";

function* submitLoginDataAsync({ payload: { data } }) {
  yield console.log(data, "I GOT THE DATA");
  try {
    const getAuthRes = yield Auth(data);
    yield put(loginSuccess(getAuthRes));
  } catch (error) {
    yield put(loginFail(error.response.data));
  }
}
export default function* loginRequestSaga() {
  yield takeLatest(LOGIN_ACTION_TYPES.LOGIN_START, submitLoginDataAsync);
}
