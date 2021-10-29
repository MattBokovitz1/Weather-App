import React from "react";
import styled from "styled-components";

const WeatherCard = styled.div`
  width: 40%;
  margin: 3% auto;
  padding: 3%;
  background: #a8a8ff;
`;
const SearchInstructions = styled.h3`
  margin: auto;
  padding: 5%;
`;
const DescriptionIcon = styled.img`
  width: 30%;
`;
const WeatherInfo = styled.p`
  color: #fcffdb;
  font-size: 1.2rem;
`;
const CityName = styled.h2`
  color: #fcffdb;
  font-size: 1.5rem;
`;

const WeatherTable = (props) => {
  const { data } = props;
  return (
    <div>
      {data ? (
        <WeatherCard>
          <CityName>{data.city.name}</CityName>

          <DescriptionIcon
            src={`http://openweathermap.org/img/w/${data?.list[0].weather[0].icon}.png`}
            alt="weather icon"
          />
          <WeatherInfo>{data.list[0].weather[0].description}</WeatherInfo>

          <WeatherInfo>
            Temperature: {data.list[0].main.temp} degrees Fahrenheit
          </WeatherInfo>
          <WeatherInfo>
            Feels like: {data.list[0].main.feels_like} degrees Fahrenheit
          </WeatherInfo>
          <WeatherInfo>Wind: {data.list[0].wind.speed} mph</WeatherInfo>
        </WeatherCard>
      ) : (
        <SearchInstructions>
          Search your city for weather info
        </SearchInstructions>
      )}
    </div>
  );
};

export default WeatherTable;
