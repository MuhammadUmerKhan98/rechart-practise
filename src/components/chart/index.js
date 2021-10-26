import React from "react";
import AdminChart from "./AdminChart";
import styled from "styled-components";

const Chart = () => {
  return (
    <>
      <StyledCard>
        <AdminChart />
      </StyledCard>
    </>
  );
};

export default Chart;

const StyledCard = styled.div`
  background-color: #fff;
  display: grid;
  justify-content: center;
  width: 45%;
  border: 1px solid #000;
  padding: 0px;
  border-radius: 15px;
`;
