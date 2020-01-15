import axios from "axios";
import { URL } from "../rootUrl.obj";
const IMAGE_URL = `${URL.devUrl}/Image`;

export const UploadImage = (data, imgType, id) => {
  return axios.post(IMAGE_URL, data, {
    params: {
      type: imgType,
      id: id
    }
  });
};

export const UploadImageUrl = () => IMAGE_URL;

export const GetImage = (IMAGE_TYPE, id) => {
  axios.get(`${IMAGE_URL}/${IMAGE_TYPE}/${id}`);
};

export const RetriveDefaultImage = id => {
  return `${IMAGE_URL}/Default/Logo/${id}`;
};

export const DeleteImage = (imgType, id) => {
  axios.delete(IMAGE_URL, {
    params: {
      type: imgType,
      id: id
    }
  });
};
