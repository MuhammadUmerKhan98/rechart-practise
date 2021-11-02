import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    // let abc = document.querySelector("ant-picker-dropdown-range");
    // abc.addEventListener("click", alert("clicked"), false); // Add onclick eventListener
    // var elements = document.getElementsByClassName("ant-picker-dropdown-range");
    // var myFunction = function () {
    //   var attribute = this.getAttribute("additional-panel");
    //   alert(attribute);
    // };
    // for (var i = 0; i < elements.length; i++) {
    //   elements[i].addEventListener("click", myFunction, false);
    // }
    // var element = document.getElementsByClassName(
    //   "ant-picker-dropdown-range"
    // )[0];
    // element.addEventListener(
    //   "click",
    //   function (e) {
    //     alert("something");
    //   },
    //   false
    // );
  }, []);

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
