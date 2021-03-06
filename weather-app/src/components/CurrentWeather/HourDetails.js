import React from "react";
import styled from "styled-components";
import { Typography } from "antd";
import { Card } from "antd";

const { Title } = Typography;
const moment = require("moment");

const HourInfo = styled.p`
  font-size: 1.3rem;
  color: #fcffdb;
`;
const DescriptionIcon = styled.img`
  width: 80%;
  margin: 0 auto;
`;

const HourDetails = ({ hour }) => {
  let newDate = new Date();
  const weekday = hour.dt * 1000;
  newDate.setTime(weekday);
  moment(newDate).format("dddd");
  return (
    <Card bordered={false} style={{ width: 140, backgroundColor: "#a8a8ff" }}>
      <Title level={4} style={{ color: "#fcffdb" }}>
        {moment(newDate).format("h:mm a")}
      </Title>

      <DescriptionIcon
        src={`http://openweathermap.org/img/w/${hour.weather[0].icon}.png`}
        alt="weather icon"
      />
      <HourInfo>{Math.round(hour.main.temp)} °F</HourInfo>
    </Card>
  );
};

export default HourDetails;
