import React from "react";
import { Button, Menu, Dropdown, Badge } from "antd";
import { AppstoreFilled, BellFilled, MehFilled } from "@ant-design/icons";

import "../../styles/menu.scss";

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        Profile
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        Log Out
      </a>
    </Menu.Item>
  </Menu>
);
const Header = () => {
  return (
    <>
      <div className="header-btn">
        <Button type="default" icon={<AppstoreFilled />}></Button>
        <Badge count={5}>
          <Button type="default" icon={<BellFilled />}></Button>
        </Badge>
        <Dropdown overlay={menu}>
          <Button icon={<MehFilled />}></Button>
        </Dropdown>
      </div>
    </>
  );
};

export default Header;
