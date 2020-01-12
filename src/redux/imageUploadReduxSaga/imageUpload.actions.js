import ImageActionTypes from "./imgUpload.action.types";

export const uploadImageStart = payload => ({
  type: ImageActionTypes.UPLOAD_START,
  payload: payload
});
export const uploadImageFinished = payload => ({
  type: ImageActionTypes.UPLOAD_FINISHED,
  payload: payload
});
export const uploadImageFailed = payload => ({
  type: ImageActionTypes.UPLOAD_FAILED,
  payload: payload
});

export const deleteImage = payload => ({
  type: ImageActionTypes.DELETE_IMAGE,
  payload: payload
});

export const deleteImageFinished = payload => ({
  type: ImageActionTypes.DELETE_FINISHED,
  payload: payload
});

export const deleteImageFailed = payload => ({
  type: ImageActionTypes.DELETE_FAILED,
  payload: payload
});
