import { takeEvery, put, call, all } from "redux-saga/effects";
import ImgActionTypes from "./imgUpload.action.types";
import {
  UploadImage,
  DeleteImage
} from "../../httpRequest/Image/imageRequests";
import {
  uploadImageFinished,
  uploadImageFailed,
  deleteImageFinished,
  deleteImageFailed
} from "./imageUpload.actions";
import {
  successMsg,
  errorMsg
} from "../../components/messageComponent/message";

const intErr = "Please Check your Internet Connection";
function* uploadImageAsync({ payload: { data, imgType, id } }) {
  yield console.log(data, imgType, id, "i got the image here");
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
  yield takeEvery(ImgActionTypes.UPLOAD_START, uploadImageAsync);
}

function* deleteImageAsync({ payload: { imgType, id } }) {
  yield console.log(imgType, id, "i got delete data here ");
  try {
    const response = yield DeleteImage(imgType, id);
    yield put(deleteImageFinished(response));
    yield call(successMsg, `${response.data.Message}`, 10);
  } catch (e) {
    yield put(deleteImageFailed(e));
    yield call(
      errorMsg,
      `${e.response ? e.response.data.Message : intErr}`,
      10
    );
  }
}
export function* deleteImage() {
  yield takeEvery(ImgActionTypes.DELETE_IMAGE, deleteImageAsync);
}

export default function* ImageUploadSagas() {
  yield all([call(uploadImageSaga)]);
}
