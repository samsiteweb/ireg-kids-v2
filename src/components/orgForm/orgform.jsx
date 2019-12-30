import React, { Component, Fragment } from "react";
import { Form, Input, Button, Select, Col, Row } from "antd";
import PriceInput from "../customInput/customInput.comp";
import DragDrop from "../draganddrop/dragDrop";

const { Option } = Select;

class OrgForms extends Component {
  state = {
    confirmDirty: false,
    uploadImg: false,
    showCode: false,
    AccountCode: {
      BtnText: "Get Code"
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.props.form.validateFieldsAndScroll(
    //   ["Email", "Contact", "Address", "Name", "Country"],
    //   (err, values) => {
    //     if (!err) {
    //       console.log("Received values of form: ", values);
    this.setState({ uploadImg: true });
    //     }
    //   }
    // );
  };
  handleChange = selection => {
    // console.log(selection.target.value.length);
    // selection.preventDefault();
    const { validateFields, isFieldsTouched } = this.props.form;
    console.log(isFieldsTouched(["Email", "Contact", "Address", "Name"]));
    if (isFieldsTouched(["Email", "Contact", "Address", "Name"])) {
      validateFields(["Email"], { force: true }, (err, value) => {
        console.log(err);
        if (!err) {
          this.setState({ showCode: true });
        }
      });
    }

    // if (selection.target.value.length > 1) {
    //   if (getFieldError("Email") === undefined) {
    //     console.log("got");
    //     // this.setState({ showCode: true });
    //   }

    switch (selection) {
      case "Get_Code":
        this.setState({
          AccountCode: {
            ...this.state,
            BtnText: "Get Code"
          }
        });
        break;
      case "Custom_Code":
        this.setState({
          AccountCode: {
            ...this.state,
            BtnText: "Verify Code"
          }
        });
        break;

      default:
        break;
    }
    // this.triggerChange({ selection });
  };
  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;

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
    const { BtnText } = this.state.AccountCode;
    const { uploadImg, showCode } = this.state;
    return (
      <div style={{ textAlign: "left" }}>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          {uploadImg !== true && (
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
                    onChange={this.handleChange}
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
                })(<Input name='email' onChange={this.handleChange} />)}
              </Form.Item>
              <Form.Item label='Contact' hasFeedback>
                {getFieldDecorator("Contact", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your phone number!"
                    }
                  ]
                })(
                  <Input
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
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
                      <Select
                        defaultValue='Get Code'
                        style={{ width: "100%" }}
                        onChange={this.handleChange}
                      >
                        <Option value='Get_Code'>Get Code</Option>
                        <Option value='Custom_Code'>Custom Code</Option>
                      </Select>
                    </Col>
                    <Col sm={10} style={{ backgroundColor: "" }}>
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
                          placeholder='xxxxx'
                          type='text'
                          style={{ width: "100%" }}
                        />
                      )}
                    </Col>
                    <Col sm={6} style={{ backgroundColor: "" }}>
                      <Button type='primary'>{BtnText}</Button>
                    </Col>
                  </Row>
                </Form.Item>
              )}{" "}
              <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <Button type='primary' htmlType='submit'>
                  Register
                </Button>
              </div>
            </Fragment>
          )}
        </Form>
        {uploadImg && <DragDrop />}
      </div>
    );
  }

  checkValue = (rule, value, callback) => {
    // console.log(value, "value gotter");
    // console.log(value.selection, "selection");
    callback();
    // if (value.number === null) {
    //   return callback();
    // }
    // const { form } = this.props;

    // console.log(form.getFieldValue("Code"), "field value");
    // console.log(form.getFieldValue("Selection"), "field value");
    // console.log(value);
    // callback("Price must greater than zero!");
  };

  // triggerChange = changedValue => {
  //   const { onChange, value } = this.props;

  //   if (onChange) {
  //     onChange({
  //       ...value,
  //       ...changedValue
  //     });
  //   }
  // };
}

const OrgForm = Form.create({ name: "register" })(OrgForms);

export default OrgForm;
