import React from "react";
import AdminChart from "./AdminChart";
import styled from "styled-components";
import { Row, Col, Badge } from "antd";

const Chart = () => {
  return (
    <>
      <StyledCard>
        <AdminChart />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <DividerDiv />
        </div>
        <Row
          style={{
            display: "flex",
            justifyContent: "end",
            padding: "10px 20px",
          }}
        >
          <Actuals>
            <Badge color={"#6ecbde"} />
            Actuals
          </Actuals>
          <Year>
            <Badge color={"#66b9fa"} />
            Year to date
          </Year>
          <Period>
            <Badge color={"#ff8cae"} />
            Selected Period
          </Period>
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
