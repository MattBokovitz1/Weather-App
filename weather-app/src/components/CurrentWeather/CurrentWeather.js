import React from "react";
import CurrentDisplay from "./CurrentDisplay";
import NextFewHours from "./NextFewHours";
import styled from "styled-components";

const WeatherCard = styled.div`
  display: flex;
  width: 90%;
  margin: 0% auto;
  padding: 2%;
  background: #a8a8ff;
`;
const CurrentWeather = (props) => {
  const { weatherData } = props;

  return (
    <WeatherCard>
      <CurrentDisplay weatherData={weatherData} />
      <NextFewHours weatherData={weatherData} />
    </WeatherCard>
  );
};

export default CurrentWeather;
