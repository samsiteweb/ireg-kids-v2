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
export const updateUrl = payload => ({
  type: ImageActionTypes.UPDATE_URL,
  payload: payload
});

export const load_imageToggle = () => ({
  type: ImageActionTypes.LOAD_IMG
});

export const deleteImageFinished = payload => ({
  type: ImageActionTypes.DELETE_FINISHED,
  payload: payload
});

export const deleteImageFailed = payload => ({
  type: ImageActionTypes.DELETE_FAILED,
  payload: payload
});
