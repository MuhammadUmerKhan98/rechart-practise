import React from "react";
import DriversChart from "./DriversChart";
import styled from "styled-components";
import { Row, Col, Badge, Button } from "antd";

const Chart = () => {
  return (
    <>
      <StyledCard>
        <DriversChart />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <DividerDiv />
        </div>
        <Row
          style={{
            display: "flex",
            justifyContent: "end",
            padding: "10px 5px",
          }}
        >
          <Actuals>
            <div style={{ display: "flex" }}>
              Prism Divers
              <ContentDiv>4</ContentDiv>
            </div>
          </Actuals>
          <Year>
            <div style={{ display: "flex" }}>
              Custom Divers
              <ContentDiv1>4</ContentDiv1>
            </div>
            {/* <Badge color={"#ff8cae"} /> */}
          </Year>
        </Row>
      </StyledCard>
    </>
  );
};

export default Chart;

const StyledCard = styled.div`
  background-color: #fff;
  display: grid;
  justify-content: center;
  width: 720px;
  padding: 0px;
  border-radius: 10px;
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

const Actuals = styled.p`
  margin-right: 20px;
`;

const Year = styled.p`
  margin-right: 20px;
`;

const Period = styled.p``;

const DividerDiv = styled.div`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
  width: 650px;
`;

const StatusButton = styled(Button)`
  font-weight: bolder !important;
  font-size: 12px !important;
`;

const StatusButton1 = styled(Button)`
  font-weight: bolder !important;
  font-size: 12px !important;
`;

const ContentDiv = styled.div`
  border: none;
  width: 25px;
  display: flex;
  justify-content: center;
  background: #ebf4fe;
  color: #69b0fa;
  margin-left: 10px;
  border-radius: 5px;
`;

const ContentDiv1 = styled.div`
  border: none;
  width: 25px;
  display: flex;
  justify-content: center;
  background: #ffeff4;
  color: #f7578c;
  margin-left: 10px;
  border-radius: 5px;
`;
