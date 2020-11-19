import React from "react";
import { Row, Col } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import Menu from "./components/menu/index.js";
import Header from "./components/menu/header";
import Dashboard from "./components/dashboard";
import Employee from "./components/employee-manage";
import Chart from "./components/chart";

const App = () => {
  return (
    <>
      <Router>
        <Row>
          <Col span={5}>
            <Menu />
          </Col>
          <Col span={19}>
            <div className="container">
              <Header />
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/employee" component={Employee} />
                <Route path="/chart" component={Chart} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Router>
    </>
  );
};

export default App;
