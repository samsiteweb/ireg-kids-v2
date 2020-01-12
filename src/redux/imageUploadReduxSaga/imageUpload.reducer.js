import ImageActionTypes from "./imgUpload.action.types";

const Initial_State = {
  imageData: null,
  isUploading: false,
  uploadRes: "",
  loadImg: false,
  isloading: false
};

export const ImageUploadReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case ImageActionTypes.UPLOAD_START:
      return {
        ...state,
        imageData: action.payload,
        isUploading: true
      };
    case ImageActionTypes.UPLOAD_FAILED:
      return {
        ...state,
        uploadRes: action.payload,
        isUploading: false,
        loadImg: false
      };

    case ImageActionTypes.UPLOAD_FINISHED:
      return {
        ...state,
        uploadRes: action.payload,
        isUploading: false,
        loadImg: true
      };
    case ImageActionTypes.DELETE_IMAGE:
      return {
        ...state,
        isloading: true
      };
    case ImageActionTypes.DELETE_FAILED:
    case ImageActionTypes.DELETE_FINISHED:
      return {
        ...state,
        isloading: false,
        uploadRes: action.payload
      };

    default:
      return state;
  }
};

export default ImageUploadReducer;
