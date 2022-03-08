import React from "react";
import styled from "styled-components";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import UpcomingWeather from "./DaysAheadWeather/UpcomingWeather";

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
  const { data } = props;
  return (
    <div>
      {data ? (
        <WeatherCard>
          <CurrentWeather data={data} />
          <UpcomingWeather data={data} />
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
