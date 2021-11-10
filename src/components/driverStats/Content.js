import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

const Content = () => {
  return (
    <StyledDiv>
      <StyledRow>
        <Col span={12}>
          <StyledPara>First date</StyledPara>
          <StyledParaDate>01 September 2021</StyledParaDate>
        </Col>
        <Col span={2}>
          <StyledHr />
        </Col>
        <Col span={10}>
          <StyledPara>Newest date</StyledPara>
          <StyledParaDate>24 October 2021</StyledParaDate>
        </Col>
      </StyledRow>
    </StyledDiv>
  );
};

export default Content;

const StyledDiv = styled.div``;

const StyledHr = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 1px;
  height: 60px;
  margin: 10px 0 20px;
`;

const StyledPara = styled.p`
  color: rgba(0, 0, 0, 0.5);
  margin-top: 10px;
`;

const StyledParaDate = styled.p`
  color: rgba(0, 0, 0, 0.5);
  margin-top: 10px;
  font-size: 18px;
`;

// StyledParaDate

const StyledRow = styled(Row)`
  padding-inline: 30px;
`;
