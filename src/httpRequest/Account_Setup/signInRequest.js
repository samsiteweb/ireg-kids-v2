import axios from "axios";
import { URL } from "../rootUrl.obj";

export const Auth = payload => {
  return axios.post(`${URL.devUrl}/Authenticate`, payload);
};

export const RefreshToken = payload => {
  return axios.get(`${URL.devUrl}/Authenticate/RefreshToken`, {
    params: {
      id: payload.refreshToken
    }
  });
};

export const UserAccountInfo = payload => {
  return axios.get(`${URL.devUrl}/Authenticate`, {
    headers: {
      Authorization: `Bearer ${payload.Token}`
    }
  });
};
