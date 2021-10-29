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
            <Badge color={"#ff8cae"} />
            Period
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
  width: 550px;
  border: 1px solid #000;
  padding: 0px;
  border-radius: 15px;
`;

const Actuals = styled.p`
  margin-right: 20px;
`;

const Year = styled.p``;
