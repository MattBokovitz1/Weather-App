import React from "react";
import styled from "styled-components";

const DescriptionIcon = styled.img`
  width: 30%;
`;
const WeatherInfo = styled.p`
  color: #fcffdb;
  font-size: 1.3rem;
  padding: 1%;
`;
const WeatherDescription = styled.h3`
  color: #fcffdb;
  font-size: 1.3rem;
  padding: 0 0 5% 0;
`;
const CityName = styled.h2`
  color: #fcffdb;
  font-size: 1.7rem;
`;
const DisplayDiv = styled.div`
  width: 40%;
`;

const CurrentDisplay = (props) => {
  const { data } = props;

  return (
    <DisplayDiv>
      <CityName>{data.city.name}</CityName>

      <DescriptionIcon
        src={`http://openweathermap.org/img/w/${data?.list[0].weather[0].icon}.png`}
        alt="weather icon"
      />
      <WeatherDescription>
        {data.list[0].weather[0].description}
      </WeatherDescription>

      <WeatherInfo>
        Temperature: {Math.round(data.list[0].main.temp)} °F
      </WeatherInfo>
      <WeatherInfo>
        Feels like: {Math.round(data.list[0].main.feels_like)} °F
      </WeatherInfo>
      <WeatherInfo>Wind: {Math.round(data.list[0].wind.speed)} mph</WeatherInfo>
    </DisplayDiv>
  );
};

export default CurrentDisplay;
