import React, { Component } from "react";
import Container from "../../components/container/container.comp";
import { Card, Steps } from "antd";
import "./accountReg.css";
import CardHeader from "../../components/cardheader/cardheader";
import AdminForm from "../../components/adminForm/adminform";
import OrgForm from "../../components/orgForm/orgform";
import { connect } from "react-redux";

import {
  setToOrg,
  setToAdmin,
  setStepStatus
} from "../../redux/accountSetupReduxSaga/setup.actions";
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
  }

  onChange = current => {
    const { setPageToOrg, setPageToAdmin } = this.props;
    console.log("onChange:", current);

    current === 0 ? setPageToOrg() : setPageToAdmin();
  };

  render() {
    const {
      current,
      hideOrgForm,
      adminStepStatus,
      orgStepStatus,
      hideAdminForm
    } = this.props;
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
              status={orgStepStatus}
              description='Create an organisation '
            />
            <Step
              title='Create Admin Account'
              status={adminStepStatus}
              description='Create and Admin'
            />
          </Steps>
          <div hidden={hideOrgForm}>
            <OrgForm />
          </div>
          <div hidden={hideAdminForm}>
            <AdminForm />
          </div>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = ({
  SetupReducers: {
    current,
    hideOrgForm,
    hideAdminForm,
    adminStepStatus,
    orgStepStatus
  }
}) => ({
  current: current,
  hideOrgForm: hideOrgForm,
  hideAdminForm: hideAdminForm,
  adminStepStatus: adminStepStatus,
  orgStepStatus: orgStepStatus
});

const mapDispatchToProps = dispatch => ({
  setPageToOrg: () => dispatch(setToOrg()),
  setPageToAdmin: () => dispatch(setToAdmin()),
  setSteps: payload => dispatch(setStepStatus(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountReg);
