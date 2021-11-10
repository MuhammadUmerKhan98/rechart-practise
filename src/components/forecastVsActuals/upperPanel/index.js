import React from "react";
import { Button, DatePicker } from "antd";
import styled from "styled-components";
import { ArrowRightOutlined } from "@ant-design/icons";

const UpperPanel = () => {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <StyledDiv>
      <DatePickerDiv>
        <DatePicker />
        <ArrowRightOutlined />
        <DatePicker />
      </DatePickerDiv>
      <ResetDiv>
        <ResetButton>Reset</ResetButton>
      </ResetDiv>
    </StyledDiv>
  );
};

export default UpperPanel;

const StyledDiv = styled.div`
  display: flex !important;
  .anticon-arrow-right {
    width: 40px !important;
  }
  padding: 20px !important;
  justify-content: space-between !important;
  .ant-picker-dropdown {
    display: none !important;
  }
  .ant-picker-panel-container {
    display: none !important;
  }
  .ant-picker-panel {
    display: none !important;
  }
  .ant-picker-date-panel {
    display: none !important;
  }
  .ant-picker-header {
    display: none !important;
  }
  .ant-picker-body {
    display: none !important;
  }
`;

const DatePickerDiv = styled.div`
  width: 385px !important;
`;

const ResetDiv = styled.div``;

const ResetButton = styled(Button)`
  background-color: #f0f0fa !important;
  color: #393ba3 !important;
  border: none !important;
`;
