import React, { useEffect } from "react";
import { Modal, Form, Input, DatePicker } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import moment from "moment";

// const dateFormat = "YYYY-MM-DD";

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 18,
  },
};
const Edit = ({ edit, closeModalEdit, okModalEdit, data }) => {
  // console.log("edit", data);
  // const [values, setValues] = useState(null);
  const [form] = Form.useForm();
  // const resetForm = form.setFieldsValue();
  useEffect(() => {
    if (data !== null) {
      form.setFieldsValue({
        ...data,
      });
    }
  }, [data, form]);
  // console.log(data);

  return (
    <Modal
      title="Edit Employee"
      visible={edit}
      onCancel={closeModalEdit}
      forceRender
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
      {/* <Input value={values && values.user_name} /> */}
      <Avatar size={90} icon={<UserOutlined />} />
      <Form
        form={form}
        {...layout}
        name="edit"
        // initialValues={{
        //   // eslint-disable-next-line
        //   id: values && values.id,
        //   // eslint-disable-next-line
        //   name: values && values.user_name,
        //   // eslint-disable-next-line
        //   date: values && values.date,
        //   // eslint-disable-next-line
        //   ["gender"]: values && values.gender,
        //   // eslint-disable-next-line
        //   ["address"]: values && values.country,
        //   // eslint-disable-next-line
        //   ["area"]: values && values.area,
        //   // eslint-disable-next-line
        //   ["phone"]: values && values.phone,
        // }}
      >
        <Form.Item name="id" label="Id">
          <Input name="id" disabled />
        </Form.Item>
        <Form.Item
          name="user_name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input name employee!",
            },
          ]}
        >
          <Input name="user_name" />
          {/* <Input value={values && values.user_name} /> */}
        </Form.Item>
        <Form.Item
          name="date"
          label="Birthday"
          rules={[
            {
              required: true,
              message: "Please input age employee!",
            },
          ]}
        >
          {/* <DatePicker
            name="date"
            defaultValue={moment(data && data.date, "DD-MM-YYYY")}
          /> */}
          <Input name="date" />
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
          <Input name="gender" />
        </Form.Item>
        <Form.Item
          name="country"
          label="Address"
          rules={[
            {
              required: true,
              message: "Please input address employee!",
            },
          ]}
        >
          <Input name="country" />
        </Form.Item>
        <Form.Item
          name="area"
          label="Area"
          rules={[
            {
              required: true,
              message: "Please input address employee!",
            },
          ]}
        >
          <Input name="area" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
          rules={[
            {
              required: true,
              message: "Please input address employee!",
            },
          ]}
        >
          <Input name="phone" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Edit;
