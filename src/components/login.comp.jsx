import React, { Component, Fragment } from "react";
import { Card, Input, Button, Icon } from "antd";
import "./login.css";
import logo from "../assets/imgs/logo.png";

const SetIcon = ({ type, color }) => (
  <Icon type={type} style={{ color: `${color}` }}></Icon>
);
class LoginComponent extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <div
          style={{
            margin: 20,
            display: "flex",
            justifyContent: "center",
            height: "10vh"
          }}
        >
          <img src={logo} alt='iRegisterKids' height='40' width='200' />
        </div>

        <div className='container'>
          <Card
            bordered={true}
            style={{
              width: 420,
              maxWidth: 450
            }}
          >
            <div>
              <h2 style={{ color: "blue" }}>USER LOGIN</h2>
            </div>
            <div style={{ paddingBottom: 20 }}>
              <h3>Please enter your credentials to Login </h3>
            </div>
            <p style={{ textAlign: "left" }}>
              <b>Credentials</b>
            </p>
            <div style={{ paddingBottom: 20 }}>
              <Input
                prefix={<SetIcon type='user' />}
                placeholder='Enter user credential'
                allowClear
                size='large'
              />
            </div>
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

            <Button size='large' type='primary' loading={this.state.loading}>
              Login
            </Button>
            <hr
              style={{
                border: "none",
                margin: "20px",
                height: "1px",
                backgroundColor: "#ccc"
              }}
            ></hr>
            <Button type='ghost' style={{ marginRight: 10 }}>
              Create Account
            </Button>
            <Button type='ghost'>Continue Registration</Button>
            <Button type='link'>Forgot password</Button>
          </Card>
        </div>
      </Fragment>
    );
  }
}

export default LoginComponent;
