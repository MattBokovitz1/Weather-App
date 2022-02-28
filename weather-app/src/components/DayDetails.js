import React from "react";
import styled from "styled-components";
const moment = require("moment");

const DayDiv = styled.div`
  width: auto;
  margin: auto 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const DescriptionIcon = styled.img`
  width: 30%;
`;

const DayInfo = styled.p`
  color: #626462;
  font-size: 1.2rem;
`;

const DayDetails = ({ day }) => {
  let newDate = new Date();
  const weekday = day.dt * 1000;
  newDate.setTime(weekday);

  moment(newDate).format("dddd");

  return (
    <DayDiv>
      <DayInfo>{moment(newDate).format("dddd")}</DayInfo>
      <DayInfo>{moment(newDate).format("MMMM Do, h:mm a")}</DayInfo>
      <DayInfo>{day.main.temp}</DayInfo>
      <DescriptionIcon
        src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
        alt="weather icon"
      />
    </DayDiv>
  );
};

export default DayDetails;
