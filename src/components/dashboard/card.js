import React, { useEffect, useState } from "react";
import { Card } from "antd";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import axios from "axios";
// import { totalNoMask, totalEmployee } from "../../constants/url";

const current = new Date();
const currentDay = `${current.getFullYear()}-${
  current.getMonth() + 1
}-${current.getDate()}`;
const CardList = () => {
  // console.log(currentDay);
  const [totalEmp, setTotalEmp] = useState([]);
  const [totalNoMask, setTotalNoMask] = useState([]);
  const [totalPlace, setTotalPlace] = useState([]);
  const totalMask = totalEmp - totalNoMask;
  // const rateNoMasks = totalNoMask / totalEmp;

  // console.log(rateNoMask);
  const fetchRageNoMask = (noMask, emp) => {
    // if (emp === 0) return (rateNoMasks = 0);
    const rateNoMasks = noMask / emp;
    if (isNaN(rateNoMasks)) return 0;
    else return rateNoMasks;
  };
  useEffect(() => {
    // Axios.get("http://localhost:3200/api/totalEmployee").then((response) => {
    //   setTotalEmp(response.data);
    //   // console.log(response.data);
    // });
    const fetchTotalEmp = async () => {
      const result = await axios("http://localhost:3200/api/totalEmployee");
      const { total } = result.data[0];
      setTotalEmp(total);
      // console.log(total);
    };
    const fetchTotalPlace = async () => {
      const result = await axios("http://localhost:3200/api/totalPlace");
      const { total } = result.data[0];
      setTotalPlace(total);
      // console.log(total);
    };
    const fetchTotalNoMask = async () => {
      const result = await axios("http://localhost:3200/api/totalNoMask", {
        params: { currentDay },
      });
      const { total } = result.data[0];
      setTotalNoMask(total);
      // console.log(total);
    };

    fetchTotalEmp();
    fetchTotalPlace();
    fetchTotalNoMask();
  }, []);
  return (
    <>
      <div className="card-list">
        <Card style={{ width: 300, height: 115 }}>
          <div className="card-header">
            <div className="card-icon" style={{ backgroundColor: "#ffa726" }}>
              <PeopleAltOutlinedIcon />
            </div>
            <p>Total Employee</p>
            <h3>{totalEmp}</h3>
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
            <p>Total No Mask</p>
            <h3>{totalNoMask}</h3>
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
            <p>Total Mask</p>
            <h3>{totalMask}</h3>
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
            <p>Rate Of No Mask</p>
            <h3>{fetchRageNoMask(totalNoMask, totalEmp)}</h3>
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
            <p>Total Work Place</p>
            <h3>{totalPlace}</h3>
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
            <p>Total Announcement</p>
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
