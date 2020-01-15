import React from "react";
import { Modal } from "antd";

const ConfirmModal = ({ title, visible, message, okBtn, cancelBtn }) => {
  return (
    <Modal
      title={title}
      centered
      visible={visible}
      onOk={okBtn}
      onCancel={cancelBtn}
    >
      {message}
    </Modal>
  );
};

export default ConfirmModal;
