import React, { Fragment } from "react";
import { Input, Icon } from "antd";

const SetIcon = ({ type, color }) => (
  <Icon type={type} style={{ color: `${color}` }}></Icon>
);

export const FormInput = ({
  label = "Label",
  placeholder,
  size = "large",
  icon = "user",
  type = "normal",
  iconColor
}) => {
  return (
    <Fragment>
      <p style={{ textAlign: "left" }}>
        <b>{label}</b>
      </p>
      <Input
        prefix={<SetIcon type={icon} color={iconColor} />}
        placeholder={placeholder}
        allowClear
        size={size}
      />
    </Fragment>
  );
};

export const PasswordFormInput = ({
  label = "Label",
  placeholder,
  size = "large",
  icon = "user",
  type = "normal",
  iconColor
}) => {
  return (
    <Fragment>
      <p style={{ textAlign: "left" }}>
        <b>{label}</b>
      </p>
      <Input.Password
        prefix={<SetIcon type={icon} color={iconColor} />}
        placeholder={placeholder}
        allowClear
        size={size}
      />
    </Fragment>
  );
};
