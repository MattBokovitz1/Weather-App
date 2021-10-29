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

const Title = styled.h1`
  font-size: 2rem;
  color: navy;
`;

function Landing() {
  return (
    <LandingWrapper>
      <Title>The Weather of the World </Title>
      <div>
        <Sunny src={sunny} alt="weather icon" />
      </div>
    </LandingWrapper>
  );
}

export default Landing;
