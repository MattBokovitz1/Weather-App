import { Card } from "antd";
import React from "react";
import styled from "styled-components";
const moment = require("moment");

// const HourDiv = styled.div`
//   width: auto;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   height: 100%;
//   width: 100px;
// `;

const HourInfo = styled.p`
  color: #626462;
  font-size: 1.2rem;
  color: #fcffdb;
`;
const DescriptionIcon = styled.img`
  width: 70%;
  margin: 0 auto;
`;

const HourDetails = ({ hour }) => {
  let newDate = new Date();
  const weekday = hour.dt * 1000;
  newDate.setTime(weekday);
  moment(newDate).format("dddd");
  return (
    <Card
      title={moment(newDate).format("h:mm a")}
      bordered={false}
      style={{ width: 140, backgroundColor: "#a8a8ff", font: "#626462" }}
    >
      <DescriptionIcon
        src={`http://openweathermap.org/img/w/${hour.weather[0].icon}.png`}
        alt="weather icon"
      />
      <HourInfo>{Math.round(hour.main.temp)} °F</HourInfo>
    </Card>
  );
};

export default HourDetails;
