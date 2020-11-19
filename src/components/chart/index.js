import React, { useEffect, useState } from "react";
import { Card, Tabs } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faHeadSideMask,
  faBacon,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/chart.scss";
import AreaChart from "./areaChart";
import MaskChart from "./maskChart";
import LineChart from "./lineChart";
import axios from "axios";
const { TabPane } = Tabs;

const Chart = () => {
  const [totalEmp, setTotalEmp] = useState();
  useEffect(() => {
    // const totall = 0;
    const fetchTotalEmp = async () => {
      const result = await axios("http://localhost:3200/api/totalEmployee");
      const { total } = result.data[0];
      setTotalEmp(total);
      // totall = total;
      // console.log(total);
    };

    fetchTotalEmp();
  }, []);
  return (
    <div>
      <h2>Chart</h2>
      <Card>
        <Tabs defaultActiveKey="1" centered>
          <TabPane
            tab={
              <span>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                Area Chart
              </span>
            }
            key="1"
          >
            <AreaChart />
          </TabPane>
          <TabPane
            tab={
              <span>
                <FontAwesomeIcon icon={faHeadSideMask} />
                Mask/No Mask Chart
              </span>
            }
            key="2"
          >
            <MaskChart />
          </TabPane>
          <TabPane
            tab={
              <span>
                <FontAwesomeIcon icon={faBacon} />
                Line Chart (Month)
              </span>
            }
            key="3"
          >
            <LineChart total={totalEmp} />
          </TabPane>
        </Tabs>
      </Card>
      ,
    </div>
  );
};

export default Chart;
