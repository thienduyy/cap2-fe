import React, { useEffect, useState } from "react";
import { Card, Table } from "antd";
import { Bar } from "react-chartjs-2";
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
const TableComponent = () => {
  const [totalNoMask, setTotalNoMask] = useState();
  const [totalEmp, setTotalEmp] = useState([]);
  const [totalEmpNoMask, setTotalEmpNoMask] = useState([]);
  const totalMask = totalEmp - totalEmpNoMask;
  // console.log(totalEmpNoMask);
  // console.log(data);
  const key = () => {
    return (
      Math.floor(Math.random() * 10000) * Math.floor(Math.random() * 10000)
    );
  };
  useEffect(() => {
    const fetchTotalEmp = async () => {
      const result = await axios("http://localhost:3200/api/totalEmployee");
      const { total } = result.data[0];
      setTotalEmp(total);
      // console.log(total);
    };
    const fetchTotalNoMask = async () => {
      const data = await axios("http://localhost:3200/api/listNoMask", {
        params: { currentDay },
      });
      // const { total } = result.data[0];
      setTotalNoMask(data.data);
      // console.log(total);
    };
    const fetchTotalEmpNoMask = async () => {
      const result = await axios("http://localhost:3200/api/totalNoMask", {
        params: { currentDay },
      });
      const { total } = result.data[0];
      setTotalEmpNoMask(total);
      // console.log(total);
    };
    fetchTotalNoMask();
    fetchTotalEmp();
    fetchTotalEmpNoMask();
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
              <h2 className="table-h2">Employee Char</h2>
              <h4 className="table-h4">
                Employees mask and no mask on {currentDay}
              </h4>
            </div>
          </div>
          <div className="card-footer">
            <Bar
              data={{
                labels: ["No Mask", "Mask"],
                datasets: [
                  {
                    label: "Employee (person)",
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                    ],
                    data: [totalEmpNoMask, totalMask],
                    borderWidth: 1,
                  },
                ],
              }}
              options={{
                // legend: { display: false },
                // title: {
                //   display: true,
                //   text: "Predicted world population (millions) in 2050",
                // },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                        userCallback: function (label, index, labels) {
                          // when the floored value is the same as the value we have a whole number
                          if (Math.floor(label) === label) {
                            return label;
                          }
                        },
                      },
                    },
                  ],
                },
              }}
            />
          </div>
        </Card>
      </div>
    </>
  );
};

export default TableComponent;
