import { Card } from "antd";
import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

const AreaChart = () => {
  const [area, setArea] = useState([]);
  //   console.log(area);
  useEffect(() => {
    const fetchAreaData = async () => {
      const { data } = await axios("http://localhost:3200/api/getArea");
      setArea(data);
      //   console.log(data.total);
    };

    fetchAreaData();
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
          <Doughnut
            data={{
              labels: area.map((data) => data.area),
              datasets: [
                {
                  label: "Population (millions)",
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                  hoverOffset: 4,
                  data: area.map((data) => data.total),
                },
              ],
            }}
            option={{
              title: {
                display: true,
                text: "Predicted world population (millions) in 2050",
              },
            }}
          />
        </div>
        <div className="card-footer"></div>
      </Card>
    </div>
  );
};

export default AreaChart;
