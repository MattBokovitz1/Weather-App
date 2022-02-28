import React from "react";
import styled from "styled-components";
import Landing from "./components/Landing";
import Search from "./components/Search";
import "./App.css";

const WrapperDiv = styled.div`
  margin: auto;
  font-size: 1rem;
  max-width: 100%;
  text-align: center;
  background-color: #a8ffff;
`;

export default function App() {
  return (
    <WrapperDiv>
      <Landing />
      <Search />
    </WrapperDiv>
  );
}
