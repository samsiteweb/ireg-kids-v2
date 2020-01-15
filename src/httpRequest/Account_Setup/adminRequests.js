import axios from "axios";
import { URL } from "../rootUrl.obj";

const REG_URL = `${URL.devUrl}/ContinueRegistration`;

export const ValidateAccountCode = AccountCode => {
  console.log(AccountCode, "in axios");
  return axios.get(REG_URL, {
    params: {
      code: AccountCode
    }
  });
};

export const SubmitAdminRegistration = ({ formData: { token, values } }) => {
  const { FirstName, LastName, Email, Contact, Username, Password } = values;

  return axios.post(
    REG_URL,
    {
      FirstName: FirstName,
      LastName: LastName,
      Email: Email,
      Contact: Contact,
      Username: Username,
      Password: Password
    },
    {
      headers: {
        Authorization: `Bearer ${token.Token}`
      }
    }
  );
};

export const SubmitExistingAdminRegistration = ({ formData, id }) => {
  const {
    FirstName,
    LastName,
    Email,
    Contact,
    Username,
    Password
  } = formData.ExistingformData;

  const { Token, RefreshToken } = formData.getRes;
  console.log(
    FirstName,
    LastName,
    Email,
    Contact,
    Username,
    Password,
    "formdata"
  );
  console.log(formData.getRes);
  console.log(id);

  return axios.post(
    REG_URL,
    {
      FirstName: FirstName,
      LastName: LastName,
      Email: Email,
      Contact: Contact,
      Username: Username,
      Password: Password
    },
    {
      params: {
        id: id
      },
      headers: {
        Authorization: `Bearer ${Token}`
      }
    }
  );
};
