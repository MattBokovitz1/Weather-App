import React from "react";
import styled from "styled-components";
import sunny from "../media/sunnyimage.png";

const LandingWrapper = styled.div`
  display: flex;
  font-family: "Roboto", sans-serif;
  color: navy;
  justify-content: center;
  align-items: center;
  height: 5%;
`;

const Sunny = styled.img`
  width: 60%;
`;

function Landing() {
  return (
    <LandingWrapper>
      <h1>The Weather of the World </h1>
      <div>
        <Sunny src={sunny} alt="weather icon" />
      </div>
    </LandingWrapper>
  );
}

export default Landing;
