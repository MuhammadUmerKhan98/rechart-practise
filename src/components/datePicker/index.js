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
  const dateFormat = "";

  const currentDate = (current) => {
    return current;
  };

  return (
    <StyledRangePicker
      defaultValue={[
        moment("2019-09-03", dateFormat),
        moment("2019-11-22", dateFormat),
      ]}
      disabledDate={disabledDate}
      // onCalendarChange={(val) => setDates(val)}
      // onChange={(val) => setValue(val)}
      // onOpenChange={onOpenChange}
    />
  );
};

export default DatePickerComp;

const StyledRangePicker = styled(RangePicker)``;
