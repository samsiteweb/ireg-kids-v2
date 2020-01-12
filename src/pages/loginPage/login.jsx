import React, { Component } from "react";
import { connect } from "react-redux";

import { Card, Input, Button, Icon, Form, Divider } from "antd";
import "./login.css";
import Container from "../../components/container/container.comp";
import CardHeader from "../../components/cardheader/cardheader";

// actions--------
import { loginStart } from "../../redux/loginReduxSaga/login.actions";
// -----actions ------

const SetIcon = ({ type, color }) => (
  <Icon type={type} style={{ color: `${color}` }}></Icon>
);

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received Values:", values);
        this.props.submitData(values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Container>
        <Card className='card-style' bordered={true}>
          <CardHeader
            header='USER LOGIN'
            description='Please enter your credentials to Login'
          />

          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator("Credentials", {
                rules: [
                  {
                    required: true,
                    message: "Please input your credential"
                  }
                ]
              })(
                <div>
                  <p style={{ textAlign: "left" }}>
                    <b>Credentials</b>
                  </p>
                  <Input
                    prefix={<SetIcon type='user' />}
                    placeholder='Enter user credential'
                    allowClear
                    size='large'
                  />
                </div>
              )}
            </Form.Item>
            <Form.Item style={{ marginTop: "-20px" }}>
              {getFieldDecorator("Password", {
                rules: [
                  {
                    required: true,
                    message: "Please input your credential"
                  }
                ]
              })(
                <div>
                  <p style={{ textAlign: "left" }}>
                    <b>Password</b>
                  </p>
                  <div style={{ paddingBottom: 20 }}>
                    <Input.Password
                      prefix={<SetIcon type='key' />}
                      placeholder='Password'
                      allowClear
                      size='large'
                    />
                  </div>
                </div>
              )}
            </Form.Item>{" "}
            <Button
              htmlType='submit'
              size='large'
              type='primary'
              loading={this.props.userLogin}
              // onClick={this.handleClick}
            >
              Login
            </Button>
          </Form>

          <Divider />
          <Button
            type='ghost'
            style={{ marginRight: 10 }}
            onClick={() => this.props.history.push("/accountReg")}
          >
            Create Account
          </Button>
          <Button type='dashed'>Forgot password</Button>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  userLogin: state.loginReducer.isLoading
});

const mapDispatchToProps = dispatch => ({
  submitData: data => {
    dispatch(loginStart({ data }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create({ name: "loginForm" })(Login));
