import "./App.css";
import Chart from "./components/chart";
import styled from "styled-components";

function App() {
  return (
    <StyledDiv>
      <Chart />
    </StyledDiv>
  );
}

export default App;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;
