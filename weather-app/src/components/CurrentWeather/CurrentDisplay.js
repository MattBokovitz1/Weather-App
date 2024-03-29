import React from "react";
import styled from "styled-components";

const DescriptionIcon = styled.img`
  width: 30%;
`;
const WeatherInfo = styled.p`
  color: #fcffdb;
  font-size: 1.1rem;
  padding: 1%;
`;
const WeatherDescription = styled.h3`
  color: #fcffdb;
  font-size: 1.1rem;
  padding: 0 0 5% 0;
`;
const CityName = styled.h2`
  color: #fcffdb;
  font-size: 1.7rem;
`;
const DisplayDiv = styled.div`
  width: 60%;
`;

const CurrentDisplay = (props) => {
  const { weatherData } = props;

  return (
    <DisplayDiv data-testid="weather-display">
      <CityName>{weatherData.city.name}</CityName>

      <DescriptionIcon
        src={`http://openweathermap.org/img/w/${weatherData?.list[0].weather[0].icon}.png`}
        alt="weather icon"
      />
      <WeatherDescription>
        {weatherData.list[0].weather[0].description}
      </WeatherDescription>

      <WeatherInfo>
        Temperature: {Math.round(weatherData.list[0].main.temp)} °F
      </WeatherInfo>
      <WeatherInfo>
        Feels like: {Math.round(weatherData.list[0].main.feels_like)} °F
      </WeatherInfo>
      <WeatherInfo>
        Wind: {Math.round(weatherData.list[0].wind.speed)} mph
      </WeatherInfo>
    </DisplayDiv>
  );
};

export default CurrentDisplay;
