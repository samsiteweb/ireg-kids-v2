import axios from "axios";
import { URL } from "../rootUrl.obj";

const REG_URL = `${URL.devUrl}/ContinueRegistration`;

export const ValidateAccountCode = AccountCode => {
  return axios.get(REG_URL, {
    params: AccountCode
  });
};

export const SubmitAdminRegistration = payload => {
  return axios.post(
    REG_URL,
    {
      FirstName: payload.FirstName,
      LastName: payload.LastName,
      Email: payload.Email,
      Contact: payload.Contact,
      Username: payload.Username,
      Password: payload.Password
    },
    {
      headers: {
        Authorization: `Bearer ${payload.Token}`
      }
    }
  );
};

export const SubmitExistingAdminRegistration = payload => {
  return axios.post(
    REG_URL,
    {
      FirstName: payload.FirstName,
      LastName: payload.LastName,
      Email: payload.Email,
      Contact: payload.Contact,
      Username: payload.Username,
      Password: payload.Password
    },
    {
      params: {
        id: payload.id
      },
      headers: {
        Authorization: `Bearer ${payload.Token}`
      }
    }
  );
};
