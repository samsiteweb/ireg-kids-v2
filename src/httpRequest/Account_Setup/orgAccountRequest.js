import axios from "axios";
import { URL } from "../rootUrl.obj";

const NEW_REG_URL = `${URL.devUrl}/NewRegistration`;

export const RequestAccountCode_Api = payload =>
  axios.get(NEW_REG_URL, {
    params: {
      email: payload.email,
      sms: payload.sms,
      expires: payload.expires
    }
  });

export const ValidateAccountCode_Api = payload =>
  axios.put(`${NEW_REG_URL}?code=${payload.code.Code}&id=${payload.id}`);

export const RequestCustomCode_Api = payload =>
  axios.get(NEW_REG_URL, {
    params: {
      code: payload
    }
  });

export const SubmitNewRegistration_Api = payload =>
  axios.post(NEW_REG_URL, {
    AccountCode: payload.data.Code,
    Name: payload.data.Name,
    Email: payload.data.Email,
    Contact: payload.data.Contact,
    Address: payload.data.Address,
    Country: payload.data.Country
  });
