import React from "react";
import styled from "styled-components";
import HourDetails from "./HourDetails";

// This file slices through the next

const HoursDiv = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80%;
  padding: 0 3%;
  flex-direction: row;
  justify-content: space-between;
`;

const NextFewHours = (props) => {
  const { data } = props;

  return (
    <HoursDiv data-testid="future-hours-weather-display">
      {data.list.slice(0, 5).map((hour) => (
        <HourDetails key={hour.dt} hour={hour} />
      ))}
    </HoursDiv>
  );
};

export default NextFewHours;
