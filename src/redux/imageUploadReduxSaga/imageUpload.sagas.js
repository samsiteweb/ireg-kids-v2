import { takeEvery, takeLatest, put, call, all } from "redux-saga/effects";
import ImgActionTypes from "./imgUpload.action.types";
import {
  UploadImage,
  DeleteImage
} from "../../httpRequest/Image/imageRequests";
import {
  uploadImageFinished,
  uploadImageFailed,
  deleteImageFinished,
  deleteImageFailed,
  load_imageToggle
} from "./imageUpload.actions";

import {
  successMsg,
  errorMsg
} from "../../components/messageComponent/message";

const intErr = "An error occured during upload ...";
function* uploadImageAsync({ payload: { data, imgType, id } }) {
  yield console.log(data, id, imgType, "i got the image here");
  try {
    const uploadRes = yield UploadImage(data, imgType, id);
    yield put(uploadImageFinished(uploadRes));
    yield call(successMsg, `${uploadRes.data.Message}`, 10);
  } catch (e) {
    yield put(uploadImageFailed(e));
    yield call(
      errorMsg,
      `${e.response ? e.response.data.Message : intErr}`,
      10
    );
  }
}

export function* uploadImageSaga() {
  yield takeLatest(ImgActionTypes.UPLOAD_START, uploadImageAsync);
}

export function* deleteImageAsync({ payload: { imgType, id } }) {
  yield console.log(imgType, id, "i got delete data here ");
  try {
    const response = yield DeleteImage(imgType, id);

    yield put(deleteImageFinished(response));
    // yield put(load_imageToggle());
    yield call(successMsg, "deleted", 10);
  } catch (e) {
    yield put(deleteImageFailed(e));
    yield call(errorMsg, `${e ? "successful" : intErr}`, 10);
  }
}
export function* deleteImageSaga() {
  yield takeEvery(ImgActionTypes.DELETE_IMAGE, deleteImageAsync);
}

export default function* ImageUploadSagas() {
  yield all([call(uploadImageSaga), call(deleteImageSaga)]);
}
