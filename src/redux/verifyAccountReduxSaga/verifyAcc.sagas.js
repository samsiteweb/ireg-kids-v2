import { takeEvery, call, put, all } from "redux-saga";
import VerifyAccActionType from "./verifyAcc.actions.types";
import { ValidateAccountCode } from "../../httpRequest/Account_Setup/adminRequests";
import {
  VerifyAccountFinished,
  VerifyAccountFailed
} from "./verifyAcc.actions";
import {
  successMsg,
  errorMsg
} from "../../components/messageComponent/message";

const intErr = "Please Check your Internet Connection";

function* verifyAccountAsync({ payload: data }) {
  yield console.log(data, " i got the account code here");
  try {
    const res = yield ValidateAccountCode(data);
    yield put(VerifyAccountFinished(res.data.Message));
    yield call(successMsg, `${res.data.Message}`, 10);
  } catch (e) {
    yield put(VerifyAccountFinished(e));
    yield call(
      errorMsg,
      `${e.response ? e.response.data.Message : intErr}`,
      10
    );
  }
}

function* verifyAccountCode() {
  yield takeEvery(VerifyAccActionType.VERIFY_START, verifyAccountAsync);
}
function* verifyAccountSagas() {
  yield all([call(verifyAccountCode)]);
}

export default verifyAccountSagas;
