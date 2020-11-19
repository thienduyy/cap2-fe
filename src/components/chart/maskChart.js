import { Card } from "antd";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import FilterChart from "./filterChart";
import axios from "axios";

const MaskChart = () => {
  const [noMask, setNoMask] = useState([]);
  const [mask, setMask] = useState([]);
  const [totalEmp, setTotalEmp] = useState();
  console.log(noMask);
  // noMask.forEach((item, index, array) => {
  //   setMask(item);
  // });
  useEffect(() => {
    // const fetchNoMaskByMonth = async () => {
    //   const mask = [];
    //   const { data } = await axios("http://localhost:3200/api/noMaskByDate");
    //   setNoMask(data);
    //   data.forEach((element) => {
    //     // console.log(element);
    //     mask.push(element.totalNoMask);
    //   });
    //   console.log(mask);
    // };
    const fetchTotalEmp = async () => {
      const result = await axios("http://localhost:3200/api/totalEmployee");
      const { total } = result.data[0];
      setTotalEmp(total);
      // console.log(total);
    };

    // fetchNoMaskByMonth();
    fetchTotalEmp();
  }, []);

  const onClickDateMask = async (date, dateString) => {
    const mask = [];
    const startDate = dateString[0];
    const endDate = dateString[1];
    // console.log(startDate, endDate);
    const { data } = await axios("http://localhost:3200/api/noMaskByDate", {
      params: { startDate, endDate },
    });
    setNoMask(data);
    data.forEach((element) => {
      // console.log(element);
      const maskEmp = totalEmp - element.totalNoMask;
      mask.push(maskEmp);
    });
    setMask(mask);
    console.log(mask);
  };

  return (
    <>
      <FilterChart onClickDateMask={onClickDateMask} />
      <div className="card-list">
        <Card style={{ width: "100%", height: "100%" }}>
          <div className="card-header">
            <div className="table-title" style={{ backgroundColor: "#ffa726" }}>
              <h2 className="table-h2">Employee Chart</h2>
              <h4 className="table-h4">
                Employee statistics chart between regions
              </h4>
            </div>
          </div>
          <div>
            <Bar
              data={{
                labels: noMask.map((data) => data.date),
                datasets: [
                  {
                    label: "No Mask",
                    backgroundColor: "rgba(255, 206, 86, 0.2)",
                    borderColor: "rgba(255, 206, 86, 1)",
                    borderWidth: 1,
                    data: noMask.map((data) => data.totalNoMask),
                  },
                  {
                    label: "Mask",
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                    data: mask,
                  },
                ],
              }}
              options={{
                // legend: { display: false },
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
          <div className="card-footer"></div>
        </Card>
      </div>
    </>
  );
};

export default MaskChart;
