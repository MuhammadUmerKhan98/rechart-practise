import React from "react";
import { DateRangePicker } from "dates-picker";
import styled from "styled-components";

const DatePicker = () => {
  return (
    <StyledDiv>
      <DateRangePicker />
    </StyledDiv>
  );
};

export default DatePicker;

const StyledDiv = styled.div`
  .date-range-picker-component {
    z-index: 99;
  }
  .days-amount-tab-button-template {
    display: none !important;
  }
  .calendar-icon {
    display: none !important;
  }
  .button {
    border: none !important;
    border-radius: 0px !important;
    margin-top: 5px !important;
    justify-content: left !important;
    background-color: #fff !imporant;
  }
  .calendar-component {
    width: 265px !important;
    background-color: #fff !important;
    box-shadow: -0.5px -1px 5px 5px rgba(0, 0, 0, 0.1) !important;
  }
  .calendar-header-background {
    background-color: #fff !important;
  }
  .color-circle {
    background-color: #fff !important;
  }
  .clear {
    color: #393ba3 !important;
  }
  .pick-button {
    color: #fff !important;
    background-color: #393ba3 !important;
  }
  .selected-day {
    border-color: #393ba3 !important;
    background-color: #393ba3 !important;
  }
  // .in-range {
  //   background: #e8e8f2 !important;
  // }
  .month {
    background-color: #fff !important;
  }
  .year {
    background-color: #fff !important;
  }
  .arrow {
    background-color: #fff !important;
  }
  .selected-month {
    background-color: #393ba3 !important;
    color: #fff !important;
  }
  // .in-range {
  //   background-color: #e8e8f2 !important;
  // }
  .button {
    background-color: #fff !important;
  }
  .button:hover {
    background-color: #fff !important;
  }
`;
