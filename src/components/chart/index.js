import React from "react";
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

const { TabPane } = Tabs;

const Chart = () => {
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
            <LineChart />
          </TabPane>
        </Tabs>
      </Card>
      ,
    </div>
  );
};

export default Chart;
