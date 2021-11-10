import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

const Period = () => {
  return (
    <StyledDiv>
      <p>
        <strong>Year to date</strong>
      </p>
      <Row>
        <Col span={8}>
          <StyledPara>Forecast</StyledPara>
          <StyledPara>113</StyledPara>
        </Col>
        <Col span={8}>
          <StyledPara>Actuals</StyledPara>
          <StyledPara>73</StyledPara>
        </Col>
        <Col span={8}>
          <StyledPara>Accuracy</StyledPara>
          <StyledPara>94%</StyledPara>
        </Col>
      </Row>
    </StyledDiv>
  );
};

export default Period;

const StyledDiv = styled.div``;

const StyledPara = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
`;
