import React from "react";
import styled from "styled-components";

const WeatherCard = styled.div`
  width: 40%;
  margin: 3% auto;
  padding: 1%;
  background: #a8a8ff;
`;
const DescriptionIcon = styled.img`
  width: 30%;
`;
const WeatherInfo = styled.p`
  color: #fcffdb;
  font-size: 1.2rem;
  padding: 1%;
`;
const WeatherDescription = styled.h3`
  color: #fcffdb;
  font-size: 1.2rem;
  padding: 0 0 5% 0;
`;
const CityName = styled.h2`
  color: #fcffdb;
  font-size: 1.5rem;
`;

const CurrentWeather = (props) => {
  const { data } = props;
  return (
    <div>
      <WeatherCard>
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
        <WeatherInfo>
          Wind: {Math.round(data.list[0].wind.speed)} mph
        </WeatherInfo>
      </WeatherCard>
    </div>
  );
};

export default CurrentWeather;
