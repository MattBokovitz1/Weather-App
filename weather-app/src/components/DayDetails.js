import React from "react";
import styled from "styled-components";
import { Card, Typography } from "antd";

const { Title } = Typography;
const moment = require("moment");

const DescriptionIcon = styled.img`
  align-items: center;
  width: 50%;
`;

const DayInfo = styled.p`
  color: #fcffdb;
  font-size: 1.1rem;
  margin: 0.5% 0;
`;

const DayDetails = ({ day }) => {
  let newDate = new Date();
  const weekday = day.dt * 1000;
  newDate.setTime(weekday);

  moment(newDate).format("");

  return (
    <Card bordered={false} style={{ width: 200, backgroundColor: "#a8a8ff" }}>
      <Title level={4} style={{ color: "#fcffdb" }}>
        {moment(newDate).format("dddd")}
      </Title>
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
