import React from "react";
import styled from "styled-components";
import { Card } from "antd";

const moment = require("moment");

// const DayDiv = styled.div`
//   margin: auto 0;
//   padding: 2% 3%;
//   width: 300px;
//   margin: 1%;
//   background: #a8a8ff;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

const DescriptionIcon = styled.img`
  align-items: center;
  width: 50%;
`;

const DayInfo = styled.p`
  color: #fcffdb;
  font-size: 1.2rem;
  margin: 1% 0;
`;

const DayTitle = styled.h2`
  color: #fcffdb;
  margin: 0 0 2% 0;
  font-size: 1.5rem;
`;

const DayDetails = ({ day }) => {
  let newDate = new Date();
  const weekday = day.dt * 1000;
  newDate.setTime(weekday);

  moment(newDate).format("");

  return (
    <Card
      title={moment(newDate).format("dddd")}
      bordered={false}
      style={{ width: 200, backgroundColor: "#a8a8ff" }}
    >
      <DayInfo>{moment(newDate).format("MMMM Do")}</DayInfo>
      <DayInfo>{Math.round(day.main.temp)} °F</DayInfo>
      <DayInfo>{day.weather[0].description}</DayInfo>
      <DescriptionIcon
        src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
        alt="weather icon"
      />
    </Card>
  );
};

export default DayDetails;
