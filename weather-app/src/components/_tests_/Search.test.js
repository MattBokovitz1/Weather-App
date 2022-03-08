import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../Search";

describe("Search Component Tests", () => {
  test("Search renders without errors", () => {
    render(<Search />);
  });

  test("Checks to make sure button is disabled, and that will not search an empty city", async () => {
    render(<Search />);

    //Arrange
    const cityNameInput = await screen.findByPlaceholderText(/Enter City/i);
    const submitButton = await screen.findByText(/Search Weather/i);

    //Act
    fireEvent.change(cityNameInput, {
      target: { name: "cityName", value: "" },
    });
    fireEvent.click(submitButton);

    //Assert
    await screen.findByText(/Search your city for weather info/i);
  });

  test("When city has not been searched, instructions are displayed to user", async () => {
    render(<Search />);

    await screen.findByText(/Search your city for weather info/i);
  });

  test("User can fill out and submit search input", async () => {
    render(<Search />);

    //Arrange
    const cityNameInput = await screen.findByPlaceholderText(/Enter City/i);
    const submitButton = await screen.findByText(/Search Weather/i);

    //Act
    fireEvent.change(cityNameInput, {
      target: { name: "cityName", value: "Downingtown" },
    });
    fireEvent.click(submitButton);

    //Assert
    await screen.findByText(/Feels like:/i);
  });

  test("When user inputs city that is not found, error message is shown to user", async () => {
    render(<Search />);

    //Arrange
    const cityNameInput = await screen.findByPlaceholderText(/Enter City/i);
    const submitButton = await screen.findByText(/Search Weather/i);

    //Act
    fireEvent.change(cityNameInput, {
      target: { name: "cityName", value: "Downingtowdfadn" },
    });
    fireEvent.click(submitButton);

    //Assert
    await screen.findByText(/Please search a valid city/i);
  });
});
