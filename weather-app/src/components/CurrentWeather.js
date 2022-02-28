import React from "react";
import CurrentDisplay from "./CurrentDisplay";
import NextFewHours from "./NextFewHours";
import styled from "styled-components";

const WeatherCard = styled.div`
  display: flex;
  width: 80%;
  margin: 0% auto;
  padding: 2%;
  background: #a8a8ff;
`;
const CurrentWeather = (props) => {
  const { data } = props;

  return (
    <WeatherCard>
      <CurrentDisplay data={data} />
      <NextFewHours data={data} />
    </WeatherCard>
  );
};

export default CurrentWeather;
