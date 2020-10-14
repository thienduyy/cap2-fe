import React from "react";
import { Row, Col } from "antd";

import "./App.scss";
import Menu from "./components/menu/index.js";
import Header from "./components/menu/header";
import Dashboard from "./components/dashboard";

const App = () => {
  return (
    <>
      <Row>
        <Col span={5}>
          <Menu />
        </Col>
        <Col span={19}>
          <div className="container">
            <Header />
            <Dashboard />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default App;
