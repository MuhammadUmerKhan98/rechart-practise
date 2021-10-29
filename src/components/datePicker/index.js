import React, { useState } from "react";
import { DatePicker } from "antd";
import moment from "moment";
import styled from "styled-components";

import "./datePicker.css";

const { RangePicker } = DatePicker;

const DatePickerComp = () => {
  function disabledDate(current) {
    return (
      current < moment().subtract(2, "months") ||
      !(current < moment().subtract(1, "months")) ||
      current > moment().add(0, "days") // after current
    );
  }

  return (
    <StyledRangePicker
      // value={hackValue || value}
      disabledDate={disabledDate}
      // onCalendarChange={(val) => setDates(val)}
      // onChange={(val) => setValue(val)}
      // onOpenChange={onOpenChange}
    />
  );
};

export default DatePickerComp;

const StyledRangePicker = styled(RangePicker)``;
