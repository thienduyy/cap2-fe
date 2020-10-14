import React from "react";
import { Menu, Divider } from "antd";
import {
  UserOutlined,
  PieChartOutlined,
  SettingOutlined,
  BellOutlined,
  AppstoreOutlined,
  HistoryOutlined,
  PrinterOutlined,
} from "@ant-design/icons";

import "../../styles/menu.scss";
import Text from "antd/lib/typography/Text";

const MenuComponent = () => {
  return (
    <>
      <div className="menu">
        <div className="title">
          <Text>Prevention Mask</Text>
          <Divider />
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="light"
        >
          <Menu.Item key="1">
            <div className="menu-item">
              <AppstoreOutlined />
              Dashboard
            </div>
          </Menu.Item>
          <Menu.Item key="2">
            <div className="menu-item">
              <UserOutlined />
              Employee Manager
            </div>
          </Menu.Item>
          <Menu.Item key="3">
            <div className="menu-item">
              <PieChartOutlined />
              Chart
            </div>
          </Menu.Item>
          <Menu.Item key="4">
            <div className="menu-item">
              <BellOutlined />
              Notifications
            </div>
          </Menu.Item>
          <Menu.Item key="5">
            <div className="menu-item">
              <HistoryOutlined />
              History In/Out
            </div>
          </Menu.Item>
          <Menu.Item key="6">
            <div className="menu-item">
              <PrinterOutlined />
              Export CSV
            </div>
          </Menu.Item>
          <Menu.Item key="7">
            <div className="menu-item">
              <SettingOutlined />
              Setting
            </div>
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
};

export default MenuComponent;
