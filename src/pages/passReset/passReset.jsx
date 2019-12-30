import React, { Component, Fragment } from "react";
import Container from "../../components/container/container.comp";
import { Card, Form, Input, Button } from "antd";
import CardHeader from "../../components/cardheader/cardheader";
import PassInput from "../../components/passwordInput/passInput";
import { passwordInput } from "../../components/adminForm/adminformData";

class ResetPasswordForm extends Component {
  state = {
    resolvedEmail: false,
    input: null,
    buttonState: null,
    buttonText: "Send",
    formDescription: "Please input your credentials to reset your password."
  };
  componentDidMount() {
    passwordInput(
      this.validateToNextPassword,
      this.compareToFirstPassword,
      this.handleConfirmBlur
    ).then(res => {
      res = this.setState({ input: res });
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(
      ["credentials"],
      { force: true },
      (err, values) => {
        if (!err) {
          console.log("Received", values);
          this.setState({
            resolvedEmail: true,
            buttonState: true,
            buttonText: "Reset Password",
            formDescription:
              "We have sent reset code to samthedonz@gmail.com. Kindly enter the code into the field below to reset your password."
          });
        }
      }
    );
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
  render() {
    const { getFieldDecorator } = this.props.form;
    const { buttonText, formDescription } = this.state;
    return (
      <Container>
        <Card className='card-style' bordered={true}>
          <CardHeader header='Reset Password' description={formDescription} />
          <Form style={{ textAlign: "left" }} onSubmit={this.handleSubmit}>
            {this.state.resolvedEmail !== true && (
              <Form.Item label='Credentials'>
                {getFieldDecorator("credentials", {
                  rules: [
                    {
                      required: true,
                      message: "Please input credentials"
                    }
                  ]
                })(<Input placeholder='Enter your credential' />)}
              </Form.Item>
            )}
            {this.state.resolvedEmail === true && this.state.input && (
              <Fragment>
                <Form.Item label='Reset Code'>
                  {getFieldDecorator("ResetCode", {
                    rules: [
                      {
                        required: true,
                        message: "Please input Reset Code"
                      }
                    ]
                  })(<Input placeholder='Enter Reset Code' />)}
                </Form.Item>
                <PassInput
                  state={this.state.input}
                  getFieldDecorator={getFieldDecorator}
                />
              </Fragment>
            )}
            <div style={{ marginTop: "15px", textAlign: "center" }}>
              <Button type='primary' htmlType='submit'>
                {buttonText}
              </Button>
            </div>
          </Form>
        </Card>
      </Container>
    );
  }
}
const PassReset = Form.create({ name: "ResetPasswordForm" })(ResetPasswordForm);
export default PassReset;
