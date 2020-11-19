import { Card } from "antd";
import React from "react";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;
const dateFormat = "DD/MM";
const FilterChart = ({ onClickDateMask }) => {
  return (
    <div className={"filter"}>
      <Card className="card-option">
        <div className="option-status">
          <p>Status:</p>
          <RangePicker onChange={onClickDateMask} format={dateFormat} />
        </div>
      </Card>
    </div>
  );
};

export default FilterChart;
