import React, { useState } from "react";
import { DatePicker } from "antd";
import moment from "moment";
import styled from "styled-components";

import "./datePicker.css";

const { RangePicker } = DatePicker;

const DatePickerComp = () => {
  function disabledDate(current) {
    return (
      current < moment().subtract(1, "days") ||
      // !(current < moment().subtract(1, "months")) ||
      current > moment().add(1, "months") // after current
    );
  }

  const [value, setValue] = useState();

  console.log("value", value);
  return (
    <StyledRangePicker
      // showTime={{ format: "hh:mma" }}
      format="DD MMM YYYY"
      disabledDate={disabledDate}
      // onCalendarChange={(val) => setDates(val)}
      onChange={(val) => setValue(val)}
      // onOpenChange={onOpenChange}
    />
  );
};

export default DatePickerComp;

const StyledRangePicker = styled(RangePicker)``;
