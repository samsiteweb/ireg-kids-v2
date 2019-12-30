import React, { Component } from "react";
import { Card, Input, Button, Icon } from "antd";
import "./login.css";
import Container from "../../components/container/container.comp";
import CardHeader from "../../components/cardheader/cardheader";

const SetIcon = ({ type, color }) => (
  <Icon type={type} style={{ color: `${color}` }}></Icon>
);
class Login extends Component {
  state = {};

  handleClick = () => {
    this.props.history.push("/accountReg");
  };
  render() {
    return (
      <Container>
        <Card className='card-style' bordered={true}>
          <CardHeader
            header='USER LOGIN'
            description='Please enter your credentials to Login'
          />
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
          <Button
            type='ghost'
            onClick={this.handleClick}
            style={{ marginRight: 10 }}
          >
            Create Account
          </Button>
          {/* <Button type='ghost' >Continue Registration</Button> */}
          <Button
            type='dashed'
            onClick={() => {
              this.props.history.push("/resetPassword");
            }}
          >
            Forgot password
          </Button>
        </Card>
      </Container>
    );
  }
}

export default Login;
