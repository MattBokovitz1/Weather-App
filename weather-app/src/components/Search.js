import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import WeatherTable from "./WeatherTable";

const SearchWrapper = styled.div`
  padding: 3%;
  font-family: "Roboto", sans-serif;
  color: navy;
  justify-content: center;
  align-items: center;
  height: 10%;
`;

export default function Search() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const API_KEY = process.env.REACT_APP_API_KEY;

  const onSearch = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial`
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.log(error);
      });
  };
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };
  return (
    <SearchWrapper>
      <Input
        placeholder="Enter City"
        onChange={(event) => setCity(event.target.value)}
        value={city}
        onKeyDown={onKeyDown}
        style={{ width: 200 }}
      />
      <Button
        type="primary"
        icon={<SearchOutlined />}
        size="normal"
        onClick={onSearch}
      >
        Search Weather
      </Button>
      <WeatherTable data={data} />
    </SearchWrapper>
  );
}
