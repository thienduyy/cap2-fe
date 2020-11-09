import React from "react";
import { Select, DatePicker, Input } from "antd";
import { Card } from "antd";
import moment from "moment";

const { Option } = Select;
const { RangePicker } = DatePicker;
const { Search } = Input;

const current = new Date();
const currentDay = `${current.getFullYear()}-${current.getMonth() + 1}-${
  current.getDate() + 1
}`;
const format = "YYYY-MM-DD";
const disabledDates = [
  {
    end: currentDay,
  },
];

const dataMasks = ["All", "Mask", "No Mask"];
const filterEmployee = () => {
  function handleChange(value) {
    console.log(value);
  }

  function onChangeDate(date, dateString) {
    console.log(date, dateString);
  }

  const onSearch = (value) => console.log(value);
  return (
    <div className={"filter"}>
      <Card className="card-option">
        <div className="option-status">
          <p>Status:</p>
          <Select
            style={{ width: 150 }}
            // defaultValue={dataMasks[0]}
            placeholder="Select a option"
            onChange={handleChange}
            className={"selected"}
          >
            {dataMasks.map((data, index) => {
              return (
                <Option value={data} key={index}>
                  {data}
                </Option>
              );
            })}
          </Select>
        </div>
        <div className="option-status">
          <p>Date:</p>
          <RangePicker
            format="YYYY-MM-DD"
            disabledDate={(current) => {
              return disabledDates.some(
                (date) => current >= moment(date["end"], format)
              );
            }}
            onChange={onChangeDate}
          />
        </div>
        <div className="option-status">
          <p>Search:</p>
          <Search
            placeholder="Input search text"
            allowClear
            onSearch={onSearch}
            style={{ width: 200, margin: "0 10px" }}
          />
        </div>
      </Card>
    </div>
  );
};

export default filterEmployee;
