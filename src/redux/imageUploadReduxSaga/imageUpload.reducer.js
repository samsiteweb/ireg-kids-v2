import ImageActionTypes from "./imgUpload.action.types";

const Initial_State = {
  imageData: null,
  isUploading: false,
  uploadRes: "",
  loadImg: false,
  isloading: false,
  imgUrl: null,
  imgUrlPreview: null
};

export const ImageUploadReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case ImageActionTypes.UPLOAD_START:
      return {
        ...state,
        imageData: action.payload,
        isUploading: true,
        loadImg: false,
        imgUrl: ""
      };

    case ImageActionTypes.UPLOAD_FAILED:
      return {
        ...state,
        uploadRes: action.payload,
        isUploading: false,
        loadImg: false
      };

    case ImageActionTypes.UPDATE_URL:
      return {
        ...state,
        imgUrlPreview: action.payload
      };

    case ImageActionTypes.UPLOAD_FINISHED:
      return {
        ...state,
        uploadRes: action.payload,
        isUploading: false,
        loadImg: true,

        imgUrl: "https://iregisterkids.com/prod_sup/api/Image/Default/Logo/"
      };
    case ImageActionTypes.DELETE_IMAGE:
      return {
        ...state,
        imageData: null,
        isUploading: false,
        uploadRes: "",
        loadImg: false,
        isloading: false,
        imgUrl: null
      };
    case ImageActionTypes.DELETE_FAILED:
    case ImageActionTypes.DELETE_FINISHED:
      return {
        ...state,
        isloading: false,
        uploadRes: action.payload
      };

    case ImageActionTypes.LOAD_IMG:
      return {
        imageData: null,
        isUploading: false,
        uploadRes: "",
        loadImg: false,
        isloading: false,
        imgUrl: null,
        imgUrlPreview: null
      };

    default:
      return state;
  }
};

export default ImageUploadReducer;
