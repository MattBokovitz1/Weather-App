import React from "react";
import styled from "styled-components";
const moment = require("moment");

const HourDiv = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`;

const HourInfo = styled.p`
  color: #626462;
  font-size: 1.2rem;
  color: #fcffdb;
`;
const DescriptionIcon = styled.img`
  width: 100%;
`;

const HourDetails = ({ hour }) => {
  let newDate = new Date();
  const weekday = hour.dt * 1000;
  newDate.setTime(weekday);
  moment(newDate).format("dddd");
  return (
    <HourDiv>
      <DescriptionIcon
        src={`http://openweathermap.org/img/w/${hour.weather[0].icon}.png`}
        alt="weather icon"
      />
      <HourInfo>{Math.round(hour.main.temp)} °F</HourInfo>
      <HourInfo>{moment(newDate).format("h:mm a")}</HourInfo>
    </HourDiv>
  );
};

export default HourDetails;
