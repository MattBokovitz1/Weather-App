import styled from "styled-components";
import Landing from "./components/Landing";

const WrapperDiv = styled.div`
  margin: auto;
  padding: 10%;
  max-width: 100%;
  text-align: center;
  background-color: #fbfbfb;
`;

function App() {
  return (
    <WrapperDiv>
      <Landing />
    </WrapperDiv>
  );
}

export default App;
