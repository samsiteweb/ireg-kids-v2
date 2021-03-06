import React, { Component, Fragment } from "react";
import { Form, Input, Button, Select, Col, Row, Icon, Divider } from "antd";

import { connect } from "react-redux";

import {
  requestAccountCode,
  verifyAccountStart,
  confirmCustomAccountCode,
  showCode,
  uploadImg,
  selectCustom,
  selectGet,
  submitStart
} from "../../redux/orgRegReduxSaga/orgReg.actions";
import ImageUploader from "../imgUpload/imgUpload";
import {
  uploadImageStart,
  deleteImage,
  updateUrl
} from "../../redux/imageUploadReduxSaga/imageUpload.actions";
import { destroyForm } from "../../redux/accountSetupReduxSaga/setup.actions";

const { Option } = Select;

class OrgForms extends Component {
  validateContact = (rule, value, callback) => {
    // console.log(value.length, "useDebugValue(value)");

    if (isNaN(value)) {
      return callback("Please Enter Numbers Only");
    }
    if (value.length < 10) {
      return callback("Invalid Contact");
    }
    return callback();
  };

  handleSubmit = e => {
    e.preventDefault();

    const { toggleImageUpload, submitFormData } = this.props;

    this.props.form.validateFieldsAndScroll(
      ["Code", "Email", "Address", "Contact", "Name", "Country"],
      (err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          toggleImageUpload();
          submitFormData(values);
          this.props.RequestAccountCode(values);
        }
      }
    );
  };
  handleClick = e => {
    e.preventDefault();
    const { getFieldsValue } = this.props.form;
    const {
      accountCodeId,
      BtnText,
      verifyAccountCode,
      confirmCustomAccountCode
    } = this.props;

    console.log(BtnText, "BtnTets");
    console.log(accountCodeId, "account request payload");
    // console.log(this.props.form.getFieldsValue(["Code"]), "mycode");
    const { requestAccountCode } = this.props;
    this.props.form.validateFields(["Email", "Contact"], (err, values) => {
      if (!err) {
        console.log("code", values);
        switch (BtnText) {
          case "Get Code":
            console.log("get code i am ");
            let getCode = {
              email: values.Email,
              sms: values.Contact,
              expires: 3
            };
            requestAccountCode(getCode);
            break;
          case "Verify":
            console.log("i am here ");
            let confirmCode = {
              code: getFieldsValue(["Code"]),
              id: accountCodeId
            };
            console.log(confirmCode, "i am here confor,");
            verifyAccountCode(confirmCode);
            break;

          case "Confirm":
            let approveCode = {
              code: getFieldsValue(["Code"])
            };
            confirmCustomAccountCode(approveCode);
            break;
          default:
            break;
        }
      }
    });
  };

  handleFormChange = () => {
    const { validateFields, isFieldsTouched } = this.props.form;
    const { toggleAccountCode } = this.props;
    // console.log(isFieldsTouched(["Email", "Contact", "Address", "Name"]));
    if (isFieldsTouched(["Email", "Contact", "Address"])) {
      validateFields(["Email"], { force: true }, (err, value) => {
        console.log(err);
        if (!err) {
          toggleAccountCode();
        }
      });
    }
  };

  handleSelectionChange = selected => {
    switch (selected) {
      case "Get Code":
        this.props.selectGet();
        break;
      case "Custom Code":
        this.props.selectCustom();
        break;

      default:
        break;
    }
  };

  handleUpload = e => {
    const { imageUploadAction, imgUploadId, setImageUrl } = this.props;
    try {
      const selectedImage = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(selectedImage);
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      // console.log(e.target.files[0]);

      const fd = new FormData();
      fd.append("image", selectedImage, selectedImage.name);
      imageUploadAction(fd, "Logo", imgUploadId);
      e.target.value = "";
    } catch (error) {
      console.log(error);
    }

    //
  };

  acceptImg = () => {};

  deleteImg = () => {
    const { deleteImage, imgUploadId } = this.props;
    deleteImage("Logo", imgUploadId);
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
    // const { BtnText } = this.state.AccountCode;
    const {
      uploadImg,
      showCode,
      isLoading,
      accountLoading,
      disableInput,
      isUploading,
      loadImg,
      BtnText,
      imageUrlPreview,
      destroyForm,
      clearForm
    } = this.props;
    return (
      <div style={{ textAlign: "left" }}>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          {destroyForm === false && uploadImg !== true && (
            <Fragment>
              <div style={{ marginTop: "-50px", textAlign: "center" }}>
                <h5>
                  <span style={{ color: "red" }}>*</span>Please enter your
                  organization details
                </h5>
              </div>
              <Form.Item label='Name' hasFeedback>
                {getFieldDecorator("Name", {
                  rules: [
                    {
                      required: true,
                      message: "Please input organisation name"
                    }
                  ]
                })(
                  <Input
                    onChange={this.handleFormChange}
                    placeholder='Organisation name'
                  />
                )}
              </Form.Item>
              <Form.Item label='E-mail' hasFeedback>
                {getFieldDecorator("Email", {
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
                })(<Input name='email' onChange={this.handleFormChange} />)}
              </Form.Item>
              <Form.Item label='Contact' hasFeedback>
                {getFieldDecorator("Contact", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your phone number!"
                    },
                    {
                      validator: this.validateContact
                    }
                  ]
                })(
                  <Input
                    onChange={this.handleFormChange}
                    style={{ width: "100%" }}
                  />
                )}
              </Form.Item>
              <Form.Item label='Address' hasFeedback>
                {getFieldDecorator("Address", {
                  rules: [
                    {
                      required: true,
                      message: "Please enter your address"
                    }
                  ]
                })(
                  <Input
                    onChange={this.handleFormChange}
                    placeholder='Please enter organization address'
                  />
                )}
              </Form.Item>
              <Form.Item label='Country' hasFeedback>
                {getFieldDecorator("Country", {
                  rules: [
                    {
                      required: true,
                      message: "Please enter your country"
                    }
                  ]
                })(
                  <Input
                    onChange={this.handleFormChange}
                    placeholder='Please enter organization address'
                  />
                )}
              </Form.Item>
              {showCode && (
                <Form.Item
                  label='Code'
                  extra='Account Code is important for company identification'
                >
                  <Row gutter={10}>
                    <Col sm={8} style={{ backgroundColor: "" }}>
                      <Form.Item>
                        {getFieldDecorator("Selected", {
                          initialValue: "Get Code"
                        })(
                          <Select
                            style={{ width: "100%" }}
                            onChange={this.handleSelectionChange}
                          >
                            <Option value='Get Code'>Get Code</Option>
                            <Option value='Custom Code'>Custom Code</Option>
                          </Select>
                        )}
                      </Form.Item>
                    </Col>
                    <Col sm={10} style={{ backgroundColor: "" }}>
                      <Form.Item>
                        {getFieldDecorator("Code", {
                          rules: [
                            {
                              required: true,
                              message: "Input cannot be empty"
                            }
                            // { validator: this.checkValue }
                          ]
                        })(
                          <Input
                            disabled={disableInput}
                            placeholder='xxxxx'
                            type='text'
                            style={{ width: "100%" }}
                          />
                        )}
                      </Form.Item>
                    </Col>
                    <Col sm={6} style={{ backgroundColor: "" }}>
                      <Button
                        type='primary'
                        loading={accountLoading}
                        onClick={this.handleClick}
                      >
                        {BtnText}
                        {BtnText === "Verified" && <Icon type='check-circle' />}
                      </Button>
                    </Col>
                  </Row>
                </Form.Item>
              )}
              <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <Button type='primary' loading={isLoading} htmlType='submit'>
                  Register
                </Button>
              </div>
            </Fragment>
          )}
        </Form>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {uploadImg && (
            <div>
              <span style={{ fontSize: "1.0rem" }}>
                <h3>Verify Account Code</h3>
                <Divider dashed orientation='center'></Divider>
              </span>
              <ImageUploader
                imageUrlPreview={imageUrlPreview}
                loadImg={loadImg}
                loading={isUploading}
                onChange={this.handleUpload}
                acceptBtnClicked={clearForm}
                deleteBtnClicked={this.deleteImg}
              />
            </div>
          )}
        </div>
        <div style={{ textAlign: "right" }}>
          <Button type='link' onClick={clearForm}>
            Skip
            <Icon type='double-right' />
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  FormReducer: {
    isLoading,
    confirmDirty,
    showCode,
    uploadImg,
    AccountCode: {
      accountCodeId,
      isAccloading,
      disableInput,
      disableSelect,
      BtnText,
      resMsg
    },
    res
  },
  SetupReducers: { destroyForm },
  ImageUploadReducer: { isUploading, loadImg, imgUrl, imgUrlPreview }
}) => ({
  isLoading: isLoading,
  confirmDirty: confirmDirty,
  showCode: showCode,
  uploadImg: uploadImg,
  accountCodeId: accountCodeId,
  accountLoading: isAccloading,
  disableInput: disableInput,
  disableSelect: disableSelect,
  BtnText: BtnText,
  isUploading: isUploading,
  loadImg: loadImg,
  imgUploadId: res,
  imageUrlPreview: imgUrlPreview,
  destroyForm: destroyForm
});

const mapDispatchToProps = dispatch => ({
  toggleAccountCode: () => dispatch(showCode()),
  toggleImageUpload: () => dispatch(uploadImg()),
  selectCustom: () => dispatch(selectCustom()),
  selectGet: () => dispatch(selectGet()),
  requestAccountCode: data => dispatch(requestAccountCode({ data })),
  verifyAccountCode: data => dispatch(verifyAccountStart({ data })),
  confirmCustomAccountCode: data =>
    dispatch(confirmCustomAccountCode({ data })),
  submitFormData: data => dispatch(submitStart({ data })),
  imageUploadAction: (data, imgType, id) =>
    dispatch(uploadImageStart({ data, imgType, id })),
  deleteImage: (imgType, id) => dispatch(deleteImage({ imgType, id })),
  setImageUrl: data => dispatch(updateUrl(data)),
  clearForm: () => dispatch(destroyForm())
});

const OrgForm = Form.create({ name: "register" })(OrgForms);

export default connect(mapStateToProps, mapDispatchToProps)(OrgForm);
