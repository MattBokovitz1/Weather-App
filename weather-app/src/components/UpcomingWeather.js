import React from "react";
import styled from "styled-components";
import DayDetails from "./DayDetails";

const DayDivs = styled.div`
  width: 40%;
  margin: 3% auto;
  padding: 3%;
  background: #a8a8ff;
`;

const UpcomingWeather = (props) => {
  const { data } = props;
  const dailyData = data.list.filter((info) =>
    info.dt_txt.includes("18:00:00")
  );
  return (
    <DayDivs>
      {dailyData.map((day) => {
        return <DayDetails key={day.id} day={day} />;
      })}
    </DayDivs>
  );
};

export default UpcomingWeather;
