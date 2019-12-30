import React, { Component } from "react";
import { Upload, Icon, message } from "antd";

const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};
class DragDrop extends Component {
  render() {
    return (
      <div style={{ marginLeft: "25%", marginRight: "25%" }}>
        <Dragger {...props}>
          <p className='ant-upload-drag-icon'>
            <Icon type='inbox' />
          </p>
          <p className='ant-upload-text'>Upload Organization Logo</p>
          <p className='ant-upload-hint'>
            Click or Drag organization logo to this area to upload
          </p>
        </Dragger>
      </div>
    );
  }
}

export default DragDrop;
