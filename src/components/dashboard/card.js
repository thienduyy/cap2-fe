import React from "react";
import { Card } from "antd";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
const CardList = () => {
  return (
    <>
      <div className="card-list">
        <Card style={{ width: 300, height: 115 }}>
          <div className="card-header">
            <div className="card-icon" style={{ backgroundColor: "#ffa726" }}>
              <PeopleAltOutlinedIcon />
            </div>
            <p>Total Employee</p>
            <h3>43</h3>
          </div>
          <div className="card-footer">
            <p>The total employees in the company</p>
          </div>
        </Card>
        <Card style={{ width: 300, height: 115 }}>
          <div className="card-header">
            <div className="card-icon" style={{ backgroundColor: "#00b894" }}>
              <PeopleAltOutlinedIcon />
            </div>
            <p>Total Employee</p>
            <h3>43</h3>
          </div>
          <div className="card-footer">
            <p>The total employees in the company</p>
          </div>
        </Card>
        <Card style={{ width: 300, height: 115 }}>
          <div className="card-header">
            <div className="card-icon" style={{ backgroundColor: "#ff7675" }}>
              <PeopleAltOutlinedIcon />
            </div>
            <p>Total Employee</p>
            <h3>43</h3>
          </div>
          <div className="card-footer">
            <p>The total employees in the company</p>
          </div>
        </Card>
        <Card style={{ width: 300, height: 115 }}>
          <div className="card-header">
            <div className="card-icon" style={{ backgroundColor: "#74b9ff" }}>
              <PeopleAltOutlinedIcon />
            </div>
            <p>Total Employee</p>
            <h3>43</h3>
          </div>
          <div className="card-footer">
            <p>The total employees in the company</p>
          </div>
        </Card>
        <Card style={{ width: 300, height: 115 }}>
          <div className="card-header">
            <div className="card-icon" style={{ backgroundColor: "#6c5ce7" }}>
              <PeopleAltOutlinedIcon />
            </div>
            <p>Total Employee</p>
            <h3>43</h3>
          </div>
          <div className="card-footer">
            <p>The total employees in the company</p>
          </div>
        </Card>
        <Card style={{ width: 300, height: 115 }}>
          <div className="card-header">
            <div className="card-icon" style={{ backgroundColor: "#636e72" }}>
              <PeopleAltOutlinedIcon />
            </div>
            <p>Total Employee</p>
            <h3>43</h3>
          </div>
          <div className="card-footer">
            <p>The total employees in the company</p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default CardList;
