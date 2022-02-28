import React from "react";
import styled from "styled-components";

const LandingWrapper = styled.div`
  display: flex;
  font-family: "Roboto", sans-serif;
  color: navy;
  justify-content: center;
  align-items: center;
  padding: 2% 0;
  background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
`;

const Title = styled.h1`
  font-size: 2rem;
  color: navy;
`;

function Landing() {
  return (
    <LandingWrapper>
      <Title>The Weather of the World </Title>
    </LandingWrapper>
  );
}

export default Landing;
