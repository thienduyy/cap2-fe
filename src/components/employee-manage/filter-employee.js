import React from "react";
import { Select, DatePicker, Input } from "antd";
import { Card } from "antd";
import moment from "moment";
// import Axios from "axios";
// import { useDispatch } from "react-redux";
// import { employeeLoad } from "../../constants/action";

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
const FilterEmployee = ({
  onClickInput,
  onClickFilter,
  filter,
  onClickDate,
  onClickDateMask,
}) => {
  // console.log(data);
  return (
    <div className={"filter"}>
      <Card className="card-option">
        <div className="option-status">
          <p>Status:</p>
          <Select
            style={{ width: 150 }}
            // defaultValue={dataMasks[0]}
            placeholder="Select a option"
            onChange={onClickFilter}
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
          {filter === "No Mask" ? (
            <RangePicker
              format="YYYY-MM-DD"
              disabledDate={(current) => {
                return disabledDates.some(
                  (date) => current >= moment(date["end"], format)
                );
              }}
              onChange={onClickDate}
              disabled={true ? !filter || filter === "All" : false}
            />
          ) : (
            <DatePicker
              disabled={true ? !filter || filter === "All" : false}
              onChange={onClickDateMask}
              disabledDate={(current) => {
                return disabledDates.some(
                  (date) => current >= moment(date["end"], format)
                );
              }}
              dateRender={(current) => {
                const style = {};
                if (current.date() === 1) {
                  style.border = "1px solid #1890ff";
                  style.borderRadius = "50%";
                }
                return (
                  <div className="ant-picker-cell-inner" style={style}>
                    {current.date()}
                  </div>
                );
              }}
            />
          )}
        </div>
        <div className="option-status">
          <p>Search:</p>
          <Search
            placeholder="Input search text"
            allowClear
            onSearch={onClickInput}
            style={{ width: 200, margin: "0 10px" }}
          />
        </div>
      </Card>
    </div>
  );
};

export default FilterEmployee;
