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
import { Link } from "react-router-dom";

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
              <Link to="/dashboard">
                <AppstoreOutlined />
                Dashboard
              </Link>
            </div>
          </Menu.Item>
          <Menu.Item key="2">
            <div className="menu-item">
              <Link to="/employee">
                <UserOutlined />
                Employee Manager
              </Link>
            </div>
          </Menu.Item>
          <Menu.Item key="3">
            <div className="menu-item">
              <Link to="/chart">
                <PieChartOutlined />
                Chart
              </Link>
            </div>
          </Menu.Item>
          <Menu.Item key="4">
            <div className="menu-item">
              <Link to="/">
                <BellOutlined />
                Notifications
              </Link>
            </div>
          </Menu.Item>
          <Menu.Item key="5">
            <div className="menu-item">
              <Link to="/">
                <HistoryOutlined />
                History In/Out
              </Link>
            </div>
          </Menu.Item>
          <Menu.Item key="6">
            <div className="menu-item">
              <Link to="/">
                <PrinterOutlined />
                Export CSV
              </Link>
            </div>
          </Menu.Item>
          <Menu.Item key="7">
            <div className="menu-item">
              <Link to="/">
                <SettingOutlined />
                Setting
              </Link>
            </div>
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
};

export default MenuComponent;
