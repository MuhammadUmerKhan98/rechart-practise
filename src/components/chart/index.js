import React from "react";
import AdminChart from "./AdminChart";
import styled from "styled-components";
import { Row, Col, Badge } from "antd";

const Chart = () => {
  return (
    <>
      <StyledCard>
        <AdminChart />
        <Row style={{ display: "flex", justifyContent: "end" }}>
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
  width: 550px;
  // border: 1px solid #000;
  box-shadow: 0 10px 20px -8px rgba(0, 0, 0, 0.7);

  padding: 0px;
  border-radius: 15px;
`;

const Actuals = styled.p`
  margin-right: 20px;
`;

const Year = styled.p`
  margin-right: 20px;
`;

const Period = styled.p``;
