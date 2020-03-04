import React, { Component, Fragment } from "react";
import { Form, Input, Button, Icon, message } from "antd";
import { formData } from "./adminformData";
import { passwordInputData } from "../InputComponents/passInputdata";
import PassInput from "../InputComponents/passInput";
import VerifyAccountCode from "../verifyAccountCode/accountCode";
import { connect } from "react-redux";
import {
  submitStart,
  closeModal,
  submitExistingStart
} from "../../redux/adminRegReduxSaga/adminReg.actions";
import "./adminform.css";
import ImageUploader from "../imgUpload/imgUpload";
import {
  uploadImageStart,
  deleteImage,
  updateUrl
} from "../../redux/imageUploadReduxSaga/imageUpload.actions";
import { setToOrg } from "../../redux/accountSetupReduxSaga/setup.actions";
import ConfirmModal from "../modalComponent/confirm.modal";
class RegistrationForm extends Component {
  state = {
    ExistingformData: null
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
  handleUpload = e => {
    const { imageUploadAction, imgUploadId, setImageUrl } = this.props;
    console.log(imgUploadId, "upload id");
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
      imageUploadAction(fd, "Profile", imgUploadId);
      e.target.value = "";
    } catch (error) {
      console.log(error);
    }

    //
  };

  deleteImg = () => {
    const { deleteImage, imgUploadId } = this.props;
    deleteImage("Profile", imgUploadId);
  };

  handleSubmit = e => {
    const { getRes, submitForm } = this.props;
    e.preventDefault();
    console.log(getRes, "response");

    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        let payload = {
          token: getRes,
          values: values
        };
        console.log("Received values of form: ", values);
        this.setState({
          ExistingformData: values
        });
        submitForm(payload);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    // this.setState({ confirmDirty: this.state.confirmDirty || !!value });
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

  handleOkBtn = () => {
    const { ExistingformData } = this.state;
    const { submitExistingStart, isExitingRes, getRes } = this.props;
    submitExistingStart(
      { ExistingformData, getRes },
      isExitingRes && isExitingRes.ExistingUserId
    );
  };
  render() {
    const { getFieldDecorator } = this.props.form;

    const {
      isUploading,
      accountVerified,
      orgInfo,
      isSubmited,
      uploadImg,
      imageUrlPreview,
      loadImg,
      switchForm,
      modalVisible,
      isExitingRes,
      switchModal
    } = this.props;

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
      <div>
        <div>
          {accountVerified === false ? (
            <VerifyAccountCode handleClick={this.handleAccountVerify} />
          ) : (
            uploadImg === false && (
              <div>
                <div style={{ marginTop: "-50px" }}></div>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                  <div>
                    <h5>
                      <span style={{ color: "red" }}>*</span>Note that this
                      Admin will create other admins in the future
                    </h5>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "Wrap",
                        flexDirection: "row",
                        justifyContent: "center"
                      }}
                    >
                      <img
                        style={{
                          border: "dotted 1px",
                          marginRight: "10px",
                          marginBottom: "10px"
                        }}
                        src={`https://iregisterkids.com/prod_sup/api/Image/Default/Logo/${orgInfo.Id}`}
                        alt='Organisation Logo'
                        height='100'
                        width='130'
                      />
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",

                          textAlign: "left"
                        }}
                      >
                        <span>
                          <b>Name: </b>
                          {orgInfo.Name} <br></br>
                          <b>Address: </b> {orgInfo.Address} <br></br>
                          <b>Email: </b>
                          {orgInfo.Email} <br></br>
                          <b>Country: </b> {orgInfo.Country}
                        </span>
                      </div>
                    </div>
                  </div>

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
                  <div style={{ marginTop: "20px" }}>
                    <Button
                      loading={isSubmited}
                      type='primary'
                      htmlType='submit'
                    >
                      Register
                    </Button>
                  </div>
                </Form>
              </div>
            )
          )}
          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {uploadImg === true && (
              <ImageUploader
                imageUrlPreview={imageUrlPreview}
                loadImg={loadImg}
                loading={isUploading}
                onChange={this.handleUpload}
                acceptBtnClicked={() => this.props.histroy.push("/")}
                deleteBtnClicked={this.deleteImg}
              />
            )}
          </div> */}
          {/* <div style={{ textAlign: "left" }}>
            <Button type='link' onClick={switchForm}>
              <Icon type='double-left' />
              Back
            </Button>
          </div> */}
        </div>
        {modalVisible && (
          <ConfirmModal
            title={"Is this you"}
            visible={modalVisible}
            message={isExitingRes && isExitingRes.Message}
            okBtn={this.handleOkBtn}
            cancelBtn={switchModal}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({
  VerifyAccReducer: { isValid, response, resDataInfo },
  AdminFormReducer: {
    isLoading,
    uploadImg,
    res: { UserId },
    modalVisible,
    isExitingRes,
    formSubmittedSuccess
  },
  ImageUploadReducer: { isUploading, loadImg, imgUrl, imgUrlPreview }
}) => ({
  accountVerified: isValid,
  getRes: response,
  orgInfo: resDataInfo,
  isSubmited: isLoading,
  uploadImg: uploadImg,
  isUploading: isUploading,
  loadImg: loadImg,
  imgUploadId: UserId,
  imageUrlPreview: imgUrlPreview,
  modalVisible: modalVisible,
  isExitingRes: isExitingRes
});

const mapDispatchToProps = dispatch => ({
  submitForm: formData => dispatch(submitStart({ formData })),
  imageUploadAction: (data, imgType, id) =>
    dispatch(uploadImageStart({ data, imgType, id })),
  deleteImage: (imgType, id) => dispatch(deleteImage({ imgType, id })),
  setImageUrl: data => dispatch(updateUrl(data)),
  switchForm: () => dispatch(setToOrg()),
  switchModal: () => dispatch(closeModal()),
  submitExistingStart: (formData, id) =>
    dispatch(submitExistingStart({ formData, id }))
});

const AdminForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create({ name: "register" })(RegistrationForm));

export default AdminForm;
