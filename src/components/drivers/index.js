import React from "react";
import Header from "./Header";
import styled from "styled-components";
import DriversChart from "./chart/index";

const Drivers = () => {
  return (
    <StyledDiv>
      <Header />
      <StyledHr />
      <DriversChart />
    </StyledDiv>
  );
};

export default Drivers;

const StyledDiv = styled.div`
  background-color: #fff;
  display: grid;
  justify-content: center;
  width: 720px;
  padding: 0px;
  border-radius: 10px;
`;

const StyledHr = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 720px;
  margin: 10px 0 20px;
`;
