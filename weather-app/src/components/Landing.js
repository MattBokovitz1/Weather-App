import React from "react";
import styled from "styled-components";
import sunny from "../media/sunnyimage.png";

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -40px;
`;

export default function Landing() {
  return (
    <PageWrapper>
      <h1>The Weather of the World </h1>
      <div>
        <img src={sunny} alt="weather icon" />
      </div>
    </PageWrapper>
  );
}
