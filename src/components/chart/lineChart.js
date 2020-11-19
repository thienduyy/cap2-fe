import { Card } from "antd";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const LineChart = ({ total }) => {
  const [noMask, setNoMask] = useState();
  const [mask, setMask] = useState([]);

  useEffect(() => {
    const fetchNoMaskByMonth = async () => {
      const noMask = [];
      const mask = [];
      const { data } = await axios("http://localhost:3200/api/noMaskByMonth");
      // setNoMask(data);
      data.forEach((element) => {
        //react-hooks/exhaustive-deps
        const maskEmp = total - element.totalNoMask; //react-hooks/exhaustive-deps
        // console.log(totalEmp);
        noMask.push(element.totalNoMask);
        mask.push(maskEmp);
      });
      setNoMask(noMask);
      setMask(mask);
      // console.log(mask);
    };

    // fetchTotalEmp();
    fetchNoMaskByMonth();
  }, []);
  return (
    <div className="card-list">
      <Card style={{ width: "100%", height: "100%" }}>
        <div className="card-header">
          <div className="table-title" style={{ backgroundColor: "#ffa726" }}>
            <h2 className="table-h2">Area Chart</h2>
            <h4 className="table-h4">
              Employee statistics chart between regions
            </h4>
          </div>
        </div>
        <div>
          <Line
            data={{
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
              datasets: [
                {
                  data: noMask,
                  label: "No Mask",
                  borderColor: "#3e95cd",
                  fill: false,
                },
                {
                  data: mask,
                  label: "Mask",
                  borderColor: "#8e5ea2",
                  fill: false,
                },
              ],
            }}
            options={{
              legend: {
                display: true,
                position: "bottom",
              },
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
                    scaleLabel: {
                      display: true,
                      labelString: "Person",
                    },
                  },
                ],
                xAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: "Month",
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
  );
};

export default LineChart;
