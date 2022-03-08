import React from "react";
import styled from "styled-components";
import DayDetails from "./DayDetails";

const DayDivs = styled.div`
  width: 100%;
  margin: 2% auto;
  padding: 1% 0;

  display: flex;
  justify-content: space-between;
`;

const UpcomingWeather = (props) => {
  const { data } = props;
  const dailyData = data.list.filter((info) =>
    info.dt_txt.includes("21:00:00")
  );
  return (
    <DayDivs data-testid="future-days-weather-display">
      {dailyData.map((day) => {
        return <DayDetails key={day.dt} day={day} />;
      })}
    </DayDivs>
  );
};

export default UpcomingWeather;
