import { Card } from "antd";
import React from "react";
import { DatePicker } from "antd";
import moment from "moment";
const { RangePicker } = DatePicker;
const dateFormat = "MM-DD";

const current = new Date();
const currentDay = `${current.getMonth() + 1}-${current.getDate() + 1}`;
const disabledDates = [
  {
    end: currentDay,
  },
];
const FilterChart = ({ onClickDateMask }) => {
  return (
    <div className={"filter"}>
      <Card className="card-option">
        <div className="option-status">
          <p>Status:</p>
          <RangePicker
            onChange={onClickDateMask}
            format={dateFormat}
            disabledDate={(current) => {
              return disabledDates.some(
                (date) => current >= moment(date["end"], dateFormat)
              );
            }}
          />
        </div>
      </Card>
    </div>
  );
};

export default FilterChart;
