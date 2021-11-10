import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const Header = () => {
  return (
    <StyledDiv>
      <PeriodDiv>
        <StatusPara>[Drivers]</StatusPara>
        <StatusPara>
          {"<"} Driver name [prism driver] {">"}
        </StatusPara>
        <StatusButton>Prism Driver</StatusButton>
      </PeriodDiv>
    </StyledDiv>
  );
};

export default Header;

const StyledDiv = styled.div`
  .ant-divider {
    margin: 10px !important;
  }
  .ant-btn {
    border: none !important;
    background: #ebf4fe !important;
    color: #69b0fa !important;
    height: 40px !important;
    border-radius: 5px !important;
  }
  .ant-btn:hover {
    color: #69b0fa !important;
    border-color: #69b0fa !important;
  }
`;

const PeriodDiv = styled.div`
  display: flex !important;
  width: 665px !important;
  margin: 20px 0 0 25px !important;
  justify-content: space-between !important;
`;

const LabelDiv = styled.div`
  display: flex !important;
  width: 80% !important;
  justify-content: end;
`;

const StatusDiv = styled.div`
  display: flex !important;
  justify-content: end !important;
`;

const StyledPara = styled.p`
  margin-right: 20px;
`;

const StatusPara = styled.p`
  font-weight: bolder !important;
  font-size: 14px !important;
  font-weight: bold !important;
  margin-top: 12px !important;
`;

const StatusButton = styled(Button)`
  font-weight: bolder !important;
  font-size: 12px !important;
`;
