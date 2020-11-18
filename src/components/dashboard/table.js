import React, { useEffect, useState } from "react";
import { Card, Table } from "antd";
import axios from "axios";
// const currentDay = new Date().toLocaleDateString();
const current = new Date();
const currentDay = `${current.getFullYear()}-${
  current.getMonth() + 1
}-${current.getDate()}`;
const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "user_name",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Area",
    dataIndex: "area",
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
  const [totalNoMask, setTotalNoMask] = useState();
  console.log(totalNoMask);
  // console.log(data);
  const key = () => {
    return (
      Math.floor(Math.random() * 10000) * Math.floor(Math.random() * 10000)
    );
  };
  useEffect(() => {
    const fetchTotalNoMask = async () => {
      const data = await axios("http://localhost:3200/api/listNoMask", {
        params: { currentDay },
      });
      // const { total } = result.data[0];
      setTotalNoMask(data.data);
      // console.log(total);
    };
    fetchTotalNoMask();
  }, []);
  return (
    <>
      <div className="card-list">
        <Card style={{ width: "49%", height: "100%" }}>
          <div className="card-header">
            <div className="table-title" style={{ backgroundColor: "#ffa726" }}>
              <h2 className="table-h2">Employee No Mask</h2>
              <h4 className="table-h4">Employees no mask on {currentDay}</h4>
            </div>
          </div>
          <div className="card-footer">
            <Table
              columns={columns}
              dataSource={totalNoMask}
              rowKey={key}
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
