import { all, call } from "redux-saga/effects";

import loginRequestSaga from "./loginReduxSaga/login.sagas";
import myFormSagas from "./orgRegReduxSaga/orgReg.sagas";
import ImageUploadSagas from "./imageUploadReduxSaga/imageUpload.sagas";
import verifyAccountSagas from "./verifyAccountReduxSaga/verifyAcc.sagas";
import RetrivePassSagas from "./retrievePassReduxSaga/retrivePass.sagas";

export default function* rootSaga() {
  yield all([
    call(loginRequestSaga),
    call(myFormSagas),
    call(ImageUploadSagas),
    call(verifyAccountSagas),
    call(RetrivePassSagas)
  ]);
}
