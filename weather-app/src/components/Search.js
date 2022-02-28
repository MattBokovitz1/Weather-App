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
const SearchInstructions = styled.h3`
  margin: auto;
  padding: 5%;
`;

export default function Search() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const API_KEY = process.env.REACT_APP_API_KEY;

  const onSearch = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial`
    )
      .then((response) => response.json())

      .then((request) => {
        if (request.cod !== "404") {
          setNotFound(false);
          setData(request);
          console.log(data);
        } else {
          setNotFound(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  const change = (event) => {
    setCity(event.target.value);
  };

  return (
    <SearchWrapper>
      <Input
        placeholder="Enter City"
        onChange={change}
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
      {notFound ? (
        <SearchInstructions>Please search a valid city</SearchInstructions>
      ) : (
        <WeatherTable data={data} />
      )}
    </SearchWrapper>
  );
}
