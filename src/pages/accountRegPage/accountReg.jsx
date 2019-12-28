import React, { Component } from "react";
import Container from "../../components/container/container.comp";
import { Card, Steps } from "antd";
import "./accountReg.css";
import CardHeader from "../../components/cardheader/cardheader";
import AdminForm from "../../components/adminForm/adminform";
import OrgForm from "../../components/orgForm/orgform";

// const SetIcon = ({ type, color }) => (
//   <Icon type={type} style={{ color: `${color}` }}></Icon>
// );

const { Step } = Steps;

const stepStyle = {
  marginBottom: 60,
  boxShadow: "0px -1px 0 0 #e8e8e8 inset"
};

class AccountReg extends Component {
  constructor(props) {
    super(props);

    console.log(this.props.location);
    console.log(this.props.history);
    this.state = { current: 0 };
  }

  onChange = current => {
    console.log("onChange:", current);
    this.setState({ current });
  };

  render() {
    const { current } = this.state;
    return (
      <Container>
        <Card className='reg-card-style'>
          <CardHeader header='CREATE ACCOUNT' />

          <Steps
            type='navigation'
            size='small'
            current={current}
            onChange={this.onChange}
            style={stepStyle}
            labelPlacement='horizontal'
          >
            <Step
              title='Organisation Account'
              status='process'
              description='Create an organisation '
            />
            <Step
              title='Create Admin Account'
              status='wait'
              description='Create and Admin'
            />
          </Steps>
          {current === 0 ? <OrgForm /> : <AdminForm />}
        </Card>
      </Container>
    );
  }
}

export default AccountReg;
