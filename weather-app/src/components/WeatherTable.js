import React from "react";
import styled from "styled-components";
import CurrentWeather from "./CurrentWeather";
import UpcomingWeather from "./UpcomingWeather";

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
