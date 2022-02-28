import React from "react";
import styled from "styled-components";
import HourDetails from "./HourDetails";

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
    <HoursDiv>
      {data.list.slice(0, 5).map((hour) => {
        return <HourDetails key={hour.dt} hour={hour} />;
      })}
    </HoursDiv>
  );
};

export default NextFewHours;
