import React, { Component } from "react";
import { Form, Input, Button, Select } from "antd";
import PriceInput from "../customInput/customInput.comp";

const { Option } = Select;

class OrgForms extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <div style={{ textAlign: "left" }}>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label='Name' hasFeedback>
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  message: "Please input organisation name"
                }
              ]
            })(<Input placeholder='Organisation name' />)}
          </Form.Item>

          <Form.Item label='E-mail' hasFeedback>
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "The input is not valid E-mail!"
                },
                {
                  required: true,
                  message: "Please input your E-mail!"
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label='Contact' hasFeedback>
            {getFieldDecorator("phone", {
              rules: [
                { required: true, message: "Please input your phone number!" }
              ]
            })(<Input style={{ width: "100%" }} />)}
          </Form.Item>
          <Form.Item label='Address' hasFeedback>
            {getFieldDecorator("Address", {
              rules: [
                {
                  required: true,
                  message: "Please enter your address"
                }
              ]
            })(<Input placeholder='Please enter organization address' />)}
          </Form.Item>
          <Form.Item label='Country' hasFeedback>
            {getFieldDecorator("Country", {
              rules: [
                {
                  required: true,
                  message: "Please enter your country"
                }
              ]
            })(<Input placeholder='Please enter organization address' />)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type='primary' htmlType='submit'>
              Register
            </Button>
          </Form.Item>
          <span
          // style={{
          //   display: "block",
          //   alignItems: "center",
          //   justifyContent: "center"
          // }}
          >
            <Form.Item>
              {getFieldDecorator("Code", {
                rules: [{ validator: this.checkValue }]
              })(
                <span style={{ marginRight: 10 }}>
                  <Input
                    placeholder='xxxxx'
                    type='text'
                    style={{ width: "auto" }}
                  />
                </span>
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("Selection", {
                initialValue: "Get_Code",
                rules: [
                  {
                    validator: this.checkValue
                  }
                ]
              })(
                <Select style={{ width: "auto" }} onChange={this.handleChange}>
                  <Option value='Get_Code'>Get Code</Option>
                  <Option value='Custom_Code'>Custom Code</Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item style={{ marginLeft: 10 }}>
              <Button type='primary'>Get Code</Button>
            </Form.Item>
          </span>
        </Form>
      </div>
    );
  }

  checkValue = (rule, value, callback) => {
    // console.log(value, "value gotter");
    // console.log(value.selection, "selection");
    // if (value.number === null) {
    //   return callback();
    // }
    const { form } = this.props;

    console.log(form.getFieldValue("Code"), "field value");
    console.log(form.getFieldValue("Selection"), "field value");
    // console.log(value);
    // callback("Price must greater than zero!");
  };
  handleChange = selection => {
    console.log(selection);
    this.triggerChange({ selection });
  };

  triggerChange = changedValue => {
    const { onChange, value } = this.props;

    if (onChange) {
      onChange({
        ...value,
        ...changedValue
      });
    }
  };
}

const OrgForm = Form.create({ name: "register" })(OrgForms);

export default OrgForm;
