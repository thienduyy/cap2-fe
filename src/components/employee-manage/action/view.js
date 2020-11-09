import Modal from "antd/lib/modal/Modal";
import React from "react";
import { Form, Input } from "antd";

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 18,
  },
};
// const tailLayout = {
//   wrapperCol: {
//     offset: 8,
//     span: 16,
//   },
// };
const View = (view) => {
  //   state = { visible: false };

  //   showModal = () => {
  //     this.setState({
  //       visible: true,
  //     });
  //   };

  return (
    <Modal
      title="Information Employee"
      visible={view.view}
      onOk={view.closeModalView}
      onCancel={view.closeModalView}
    >
      <Form {...layout} name="basic">
        <Form.Item label="Name" name="name">
          <Input disabled="true"></Input>
        </Form.Item>
        <Form.Item label="Age" name="age">
          <Input disabled="true"></Input>
        </Form.Item>
        <Form.Item label="Address" name="address">
          <Input disabled="true"></Input>
        </Form.Item>
        <Form.Item label="Birthday" name="Birthday">
          <Input disabled="true"></Input>
        </Form.Item>
        <Form.Item label="Gender" name="gender">
          <Input disabled="true"></Input>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default View;
