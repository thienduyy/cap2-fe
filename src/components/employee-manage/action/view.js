import Modal from "antd/lib/modal/Modal";
import React from "react";
import { Form, Input } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
const View = ({ view, data, closeModalView }) => {
  // console.log(data);

  return (
    <Modal
      title="Information Employee"
      visible={view}
      onOk={closeModalView}
      onCancel={closeModalView}
    >
      <Avatar size={64} icon={<UserOutlined />} />
      <Form {...layout} name="basic">
        <Form.Item label="Id" name="id">
          <Input placeholder={data && data.id} disabled />
        </Form.Item>
        <Form.Item label="Name" name="name">
          <Input disabled placeholder={data && data.user_name} />
        </Form.Item>
        <Form.Item label="Birthday" name="birth">
          <Input disabled placeholder={data && data.date} />
        </Form.Item>
        <Form.Item label="Gender" name="gender">
          <Input disabled placeholder={data && data.gender} />
        </Form.Item>
        <Form.Item label="Address" name="address">
          <Input disabled placeholder={data && data.country} />
        </Form.Item>
        <Form.Item label="Area" name="area">
          <Input disabled placeholder={data && data.area} />
        </Form.Item>
        <Form.Item label="Phone" name="phone">
          <Input disabled placeholder={data && data.phone} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default View;
