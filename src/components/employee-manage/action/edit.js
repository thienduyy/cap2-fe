import React from "react";
import { Modal, Form, Input } from "antd";

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 18,
  },
};
const Edit = ({ edit, closeModalEdit, okModalEdit }) => {
  //   console.log("edit", edit);
  const [form] = Form.useForm();
  return (
    <Modal
      title="Edit Employee"
      visible={edit}
      onCancel={closeModalEdit}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            okModalEdit(values);
          })
          .catch((info) => {
            console.log("Validate Failed", info);
          });
      }}
    >
      <Form form={form} {...layout} name="edit">
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input name employee!",
            },
          ]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item
          name="age"
          label="Age"
          rules={[
            {
              required: true,
              message: "Please input age employee!",
            },
          ]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[
            {
              required: true,
              message: "Please input address employee!",
            },
          ]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: "Please input gender employee!",
            },
          ]}
        >
          <Input></Input>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Edit;
