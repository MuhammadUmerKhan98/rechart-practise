import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Period from "./Period";
import Year from "./Year";
import { Row, Col } from "antd";

const ForecastStatistics = () => {
  return (
    <StyledDiv>
      <Header />
      <StyledHr />
      <StyledRow>
        <StyledCol span={18}>
          <Period />
          <StyledHr1 />
          <Year />
        </StyledCol>
        <Col span={1}>
          <StyledHr2 />
        </Col>
        <Col span={5}>
          <strong>Deviations</strong>
          <StyledPara>Duplicates</StyledPara>
          <StyledParaNumber>4</StyledParaNumber>
          <StyledPara>Missing Values</StyledPara>
          <StyledParaNumber>6</StyledParaNumber>
          <StyledPara>Outliers</StyledPara>
          <StyledParaNumber>12</StyledParaNumber>
        </Col>
      </StyledRow>
    </StyledDiv>
  );
};

export default ForecastStatistics;

const StyledDiv = styled.div`
  background-color: #fff;
  display: grid;
  justify-content: center;
  width: 720px;
  padding: 0px;
  border-radius: 10px;
`;

const StyledRow = styled(Row)`
  margin: 0 30px 10px !important;
`;

const StyledHr = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 720px;
  margin: 10px 0 20px;
`;

const StyledHr1 = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 465px;
  margin: 20px 0 30px;
`;

const StyledHr2 = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 1px;
  height: 300px;
  margin: 10px 0 20px;
`;

const StyledPara = styled.p`
  color: rgba(0, 0, 0, 0.5);
  margin-top: 10px;
`;

const StyledParaNumber = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 20px;
`;

const StyledCol = styled(Col)`
  margin: 10px 0 0;
`;
