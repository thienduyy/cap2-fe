import React from "react";
// import { Row, Col } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import SignIn from "./components/auth/signin";
import Show from "./Show";
// import Menu from "./components/menu/index.js";
// import Header from "./components/menu/header";
// import Dashboard from "./components/dashboard";
// import Employee from "./components/employee-manage";
// import Chart from "./components/chart";
// import SignIn from "./components/auth/signin";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/dashboard" component={Show} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
