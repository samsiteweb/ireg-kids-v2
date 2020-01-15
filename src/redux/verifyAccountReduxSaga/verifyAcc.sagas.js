import { takeEvery, call, put, all } from "redux-saga/effects";
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

function* verifyAccountAsync({ payload }) {
  yield console.log(payload, " i got the account code here");
  try {
    const res = yield ValidateAccountCode(payload);
    yield put(VerifyAccountFinished(res.data.Token, res.data.Info));
    yield call(successMsg, `${"Verification successfull"}`, 10);
  } catch (e) {
    yield put(VerifyAccountFailed(e));
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
