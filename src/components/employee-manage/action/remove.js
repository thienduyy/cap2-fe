import Modal from "antd/lib/modal/Modal";
import React from "react";

const Remove = ({ remove, closeModalRemove, okModalRemove, key }) => {
  return (
    <Modal
      title="Remove Modal"
      visible={remove}
      onOk={okModalRemove}
      onCancel={closeModalRemove}
    >
      <p>{key}</p>
    </Modal>
  );
};

export default Remove;
