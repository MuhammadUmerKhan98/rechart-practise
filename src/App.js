import "./App.css";
import Chart from "./components/forecastVsActuals/chart";
import ForecastStats from "./components/forecastStatistics/forecastStats";
import DriverStats from "./components/driverStats";

import styled from "styled-components";

function App() {
  return (
    <StyledDiv>
      <DriverStats />
    </StyledDiv>
  );
}

export default App;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e5e5e5;
`;
