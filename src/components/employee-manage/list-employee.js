import { Table, Card, Space, Tooltip } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import React, { useState } from "react";
// import { Select } from "antd";
import FilterEmployee from "./filter-employee";
import View from "./action/view";
import Edit from "./action/edit";
import Remove from "./action/remove";

// const { Option } = Select;
const { Column } = Table;
// const dataMasks = ["All", "Mask", "No Mask"];
// const columns = [
//   {
//     title: "ID",
//     dataIndex: "id",
//   },
//   {
//     title: "Name",
//     dataIndex: "name",
//   },
//   {
//     title: "Age",
//     dataIndex: "age",
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//   },
//   {
//     title: "Action",
//     key: "action",
//     render: (text, record) => (
//       <Space size="middle">
//         <Tooltip title="View">
//           <EyeOutlined onClick={() => setView(true)} />
//         </Tooltip>
//         <Tooltip title="Edit">
//           <EditOutlined />
//         </Tooltip>
//         <Tooltip title="Delete">
//           <DeleteOutlined />
//         </Tooltip>
//       </Space>
//     ),
//   },
// ];
const data = [
  {
    key: "1",
    id: 1,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    id: 2,
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    id: 3,
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
];

const ListEmployee = () => {
  const [view, setView] = useState(false);
  const closeModalView = () => setView(false);
  const [edit, setEdit] = useState(false);
  const closeModalEdit = () => setEdit(false);
  const [remove, setRemove] = useState(false);
  const closeModalRemove = () => setRemove(false);
  const okModalEdit = (values) => {
    console.log("values", values);
    setEdit(false);
  };
  const okModalRemove = (values) => {
    console.log("values", values);
    setEdit(false);
  };

  return (
    <div className="card-list">
      <FilterEmployee />
      <Card style={{ width: "100%", height: "100%" }}>
        <div className="card-header">
          <div className="table-title" style={{ backgroundColor: "#ffa726" }}>
            <h2 className="table-h2">Employee Stats</h2>
            <h4 className="table-h4">List Employees</h4>
          </div>
        </div>
        <div className="card-footer">
          <Table dataSource={data} size="middle" className="card-table">
            <Column title="ID" dataIndex="id" key="id" />
            <Column title="Name" dataIndex="name" key="name" />
            <Column title="Age" dataIndex="age" key="age" />
            <Column title="Address" dataIndex="address" key="address" />
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <Space size="middle">
                  <Tooltip title="View">
                    <EyeOutlined onClick={() => setView(true)} />
                  </Tooltip>
                  <Tooltip title="Edit">
                    <EditOutlined onClick={() => setEdit(true)} />
                  </Tooltip>
                  <Tooltip title="Delete">
                    <DeleteOutlined
                      onClick={() => {
                        setRemove(true);
                        console.log(data);
                      }}
                    />
                  </Tooltip>
                </Space>
              )}
            />
          </Table>
          <Remove
            remove={remove}
            closeModalRemove={closeModalRemove}
            okModalRemove={okModalRemove}
            key={data.key}
          />
        </div>
      </Card>
      <View view={view} closeModalView={closeModalView} />
      <Edit
        edit={edit}
        closeModalEdit={closeModalEdit}
        okModalEdit={okModalEdit}
      />
      {/* <Remove
        remove={remove}
        closeModalRemove={closeModalRemove}
        okModalRemove={okModalRemove}
        key={data.key}
      /> */}
    </div>
  );
};

export default ListEmployee;
