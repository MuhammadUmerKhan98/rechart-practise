import React from "react";
import styled from "styled-components";
import { Button, Divider, Dropdown, Menu } from "antd";

const Header = () => {
  return (
    <StyledDiv>
      <PeriodDiv>
        <StatusDiv>
          <StatusPara>[Driver Stats]</StatusPara>
        </StatusDiv>
      </PeriodDiv>
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <Divider style={{ width: "134px" }} />
      </div> */}
    </StyledDiv>
  );
};

export default Header;

const StyledDiv = styled.div`
  .ant-divider {
    margin: 10px !important;
  }
  .ant-btn {
    color: #393ba3 !important;
    border-color: #393ba3 !important;
    height: 40px !important;
    border-radius: 5px !important;
  }
  .ant-btn:hover {
    color: #393ba3 !important;
    border-color: #393ba3 !important;
  }
`;

const PeriodDiv = styled.div`
  display: flex !important;
  width: 665px !important;
  margin: 20px 0 0 30px !important;
`;

const LabelDiv = styled.div`
  display: flex !important;
  width: 80% !important;
  justify-content: end;
`;

const StatusDiv = styled.div``;

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
