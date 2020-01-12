import axios from "axios";
import { URL } from "../rootUrl.obj";

export const PASS_URL = `${URL}/ForgotPassword`;

export const ValidateCredential = payload =>
  axios.get(PASS_URL, {
    params: {
      cred: payload
    }
  });

export const UpdateCredential = payload => {
  axios.get(PASS_URL, {
    params: {
      id: payload.id,
      cred: payload.cred,
      code: payload.code
    }
  });
};
