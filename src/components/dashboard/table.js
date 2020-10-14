import React from "react";
import { Card, Table } from "antd";

const currentDay = new Date().toLocaleDateString();
const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];
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
const TableComponent = () => {
  return (
    <>
      <div className="card-list">
        <Card style={{ width: "49%", height: "100%" }}>
          <div className="card-header">
            <div className="table-title" style={{ backgroundColor: "#ffa726" }}>
              <h2 className="table-h2">Employee Stats</h2>
              <h4 className="table-h4">New employees on {currentDay}</h4>
            </div>
          </div>
          <div className="card-footer">
            <Table
              columns={columns}
              dataSource={data}
              size="middle"
              className="card-table"
            />
          </div>
        </Card>
        <Card style={{ width: "49%", height: "100%" }}>
          <div className="card-header">
            <div className="table-title" style={{ backgroundColor: "#ff7675" }}>
              <h2 className="table-h2">Employee Stats</h2>
              <h4 className="table-h4">New employees on {currentDay}</h4>
            </div>
          </div>
          <div className="card-footer">
            <Table
              columns={columns}
              dataSource={data}
              size="middle"
              className="card-table table2"
            />
          </div>
        </Card>
      </div>
    </>
  );
};

export default TableComponent;
