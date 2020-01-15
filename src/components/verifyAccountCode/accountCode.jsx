import React from "react";
import { Divider, Input, Icon, Tooltip, Button } from "antd";
import { connect } from "react-redux";
import { VerifyAccountStart } from "../../redux/verifyAccountReduxSaga/verifyAcc.actions";

let accountCode = "";
const handleClick = () => {};

const handleChange = e => {
  accountCode = e.target.value;
  console.log(accountCode);
};

const VerifyAccountCode = ({ verifyCode, loadingStatus }) => {
  return (
    <div style={{ marginRight: "25%", marginLeft: "25%" }}>
      <div style={{ marginBottom: "20px" }}>
        <Divider dashed orientation='center'></Divider>
        <span style={{ fontSize: "1.0rem" }}>
          <h3>Verify Account Code</h3>
        </span>
      </div>
      <Input
        onChange={handleChange}
        style={{ textAlign: "center" }}
        size='large'
        placeholder='PLEASE ENTER ACCOUNT CODE'
        prefix={
          <Icon type='usergroup-add' style={{ color: "rgba(0,0,0,.25)" }} />
        }
        suffix={
          <Tooltip
            mouseLeaveDelay={0.5}
            placement='bottom'
            title='Please input the account code sent to your email during
                Organization Registration.'
          >
            <Icon type='info-circle' style={{ color: "rgba(0,0,0,.45)" }} />
          </Tooltip>
        }
      />
      <div style={{ paddingTop: "20px" }}>
        <Button
          type='primary'
          size='large'
          loading={loadingStatus}
          onClick={() => verifyCode(accountCode)}
        >
          Verify
        </Button>
      </div>
      <Divider dashed orientation='center'></Divider>
    </div>
  );
};

const mapStateToProps = ({ VerifyAccReducer: { isLoading } }) => ({
  loadingStatus: isLoading
});

const mapDispatchToProps = dispatch => ({
  verifyCode: code => dispatch(VerifyAccountStart(code))
});

export default connect(mapStateToProps, mapDispatchToProps)(VerifyAccountCode);
