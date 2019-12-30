import React from "react";
import { Input, Form } from "antd";

const PassInput = ({ state, getFieldDecorator }) => {
  return state.map((input, i) => {
    return (
      <Form.Item
        key={i}
        style={{ marginBottom: "-10px" }}
        label={input.label}
        hasFeedback
      >
        {getFieldDecorator(input.fieldDecorator, {
          rules: [
            {
              required: true,
              message: input.message
            },
            {
              validator: input.validator
            }
          ]
        })(<Input.Password onBlur={input.blur} />)}
      </Form.Item>
    );
  });
};

export default PassInput;
