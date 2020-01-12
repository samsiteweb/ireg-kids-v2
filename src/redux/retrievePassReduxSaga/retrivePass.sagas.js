import { takeEvery, call, put, all } from "redux-saga/effects";
import RetriveActionTypes from "./retrivePass.action.types";
import {
  ValidateCredential,
  UpdateCredential
} from "../../httpRequest/Account_Setup/forgotPasswordRequests";
import {
  ValidationStart,
  ValidationFailed,
  UpdateFailed,
  UpdateFinished
} from "./retievePass.actions";
import {
  successMsg,
  errorMsg
} from "../../components/messageComponent/message";
const intErr = "Please Check your Internet Connection";
function* validateCredAsync(payload) {
  yield console.log(payload, "i got the payload");

  try {
    const res = yield ValidateCredential(payload);
    yield put(ValidationStart(res));
    yield call(successMsg, `${res.data.Message}`, 10);
  } catch (e) {
    yield put(ValidationFailed(e));
    yield call(
      errorMsg,
      `${e.response ? e.response.data.Message : intErr}`,
      10
    );
  }
}

export function* ValidateCred() {
  yield takeEvery(RetriveActionTypes.VALIDATE_CRED_START, validateCredAsync);
}

function* updateCredAsync(payload) {
  yield console.log(payload, "i got the payload update");
  try {
    const res = yield UpdateCredential(payload);
    yield put(UpdateFinished(res));
    yield call(successMsg, `${res.data.Message}`, 10);
  } catch (e) {
    yield put(UpdateFailed(e));
    yield call(
      errorMsg,
      `${e.response ? e.response.data.Message : intErr}`,
      10
    );
  }
}

export function* UpdateCred() {
  yield takeEvery(RetriveActionTypes.UPDATE_CRED_START, updateCredAsync);
}

export default function* RetrivePassSagas() {
  yield all([call(ValidateCred)]);
}
