import React from "react";
import styled from "styled-components";
const moment = require("moment");

const DayDiv = styled.div`
  margin: auto 0;
  padding: 2% 1%;
  margin: 1%;
  border: 1px solid black;
  background: #a8a8ff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DescriptionIcon = styled.img`
  align-items: center;
  width: 50%;
`;

const DayInfo = styled.p`
  color: white;
  font-size: 1.2rem;
  margin: 1% 0;
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
      <DayInfo>{Math.round(day.main.temp)} °F</DayInfo>
      <DayInfo>{day.weather[0].main}</DayInfo>
      <DescriptionIcon
        src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
        alt="weather icon"
      />
    </DayDiv>
  );
};

export default DayDetails;
