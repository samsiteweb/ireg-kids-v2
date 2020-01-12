import React, { Component, Fragment } from "react";
import { Form, Input, Button, Avatar } from "antd";
import { formData } from "./adminformData";
import { passwordInputData } from "../InputComponents/passInputdata";
import PassInput from "../InputComponents/passInput";
import VerifyAccountCode from "../verifyAccountCode/accountCode";

class RegistrationForm extends Component {
  state = {
    confirmDirty: false,
    input: null,
    accountVerify: false
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
    if (value && value !== form.getFieldValue("Password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["Confirm"], { force: true });
    }
    callback();
  };
  componentDidMount() {
    passwordInputData(
      this.validateToNextPassword,
      this.compareToFirstPassword,
      this.handleConfirmBlur
    ).then(res => {
      res = this.setState({ input: res });
    });
  }

  handleAccountVerify = () => {
    this.setState({
      accountVerify: true
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { accountVerify } = this.state;
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

    return (
      <Fragment>
        {accountVerify === false ? (
          <VerifyAccountCode handleClick={this.handleAccountVerify} />
        ) : (
          <div>
            <div style={{ marginTop: "-50px" }}>
              <h5>
                <span style={{ color: "red" }}>*</span>Note that this Admin will
                create other admins in the future
              </h5>
            </div>

            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
              <Avatar shape='square' size={64} icon='user' />
              {formData.map((data, i) => {
                return (
                  <Form.Item key={i} label={data.label} hasFeedback>
                    {getFieldDecorator(data.fieldDecorator, {
                      rules: [
                        {
                          type: data.asType,
                          message: data.typeMessage
                        },
                        {
                          required: data.required,
                          message: data.message
                        },
                        {
                          validator: data.validator
                        }
                      ]
                    })(<Input />)}
                  </Form.Item>
                );
              })}
              {this.state.input !== null && (
                <PassInput
                  state={this.state.input}
                  getFieldDecorator={getFieldDecorator}
                />
              )}
              <div>
                <Button type='primary' htmlType='submit'>
                  Register
                </Button>
              </div>
            </Form>
          </div>
        )}
      </Fragment>
    );
  }
}

const AdminForm = Form.create({ name: "register" })(RegistrationForm);

export default AdminForm;
