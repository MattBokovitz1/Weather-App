import React from "react";
import styled from "styled-components";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import UpcomingWeather from "./DaysAheadWeather/UpcomingWeather";
import MapRadar from "./MapRadar/MapRadar";

const WeatherCard = styled.div`
  width: 100%;
  margin: 1% auto;
  padding: 1%;
`;
const SearchInstructions = styled.h3`
  margin: auto;
  padding: 5%;
  font-size: 1.3rem;
`;

const WeatherTable = (props) => {
  const { weatherData } = props;
  return (
    <div>
      {weatherData ? (
        <WeatherCard>
          <CurrentWeather weatherData={weatherData} />
          <UpcomingWeather weatherData={weatherData} />
          <MapRadar weatherData={weatherData} />
        </WeatherCard>
      ) : (
        <SearchInstructions data-testid="search-instructions">
          Search your city for weather info
        </SearchInstructions>
      )}
    </div>
  );
};

export default WeatherTable;
