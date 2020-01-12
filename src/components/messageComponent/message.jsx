import { message } from "antd";

export const successMsg = (msg = "default message", timeout = 10) => {
  message.success(msg, timeout);
};

export const errorMsg = (msg = "default message", timeout = 10) => {
  message.error(msg, timeout);
};

export const warningMsg = (msg = "default message", timeout = 10) => {
  message.warning(msg, timeout);
};

export const infoMsg = (msg = "default message", timeout = 10) => {
  message.info(msg, timeout);
};
