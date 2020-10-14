import React from "react";
import CardList from "./card";

import "../../styles/dashboard.scss";
import Table from "./table";
const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <CardList />
      <Table />
    </div>
  );
};

export default Dashboard;
