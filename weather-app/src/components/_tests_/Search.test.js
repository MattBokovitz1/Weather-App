import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../Search";

describe("Search Component Tests", () => {
  test("Search renders without errors", () => {
    render(<Search />);
  });

  test("When Search component is rendered, instructions are displayed to user", () => {
    render(<Search />);

    expect(screen.getByTestId(/search-instructions/i)).toBeInTheDocument();
  });

  test("Checks to make sure button is disabled, and that will not search an empty city", async () => {
    render(<Search />);

    //Arrange
    const submitButton = await screen.findByTestId(/weather-button/i);

    //Act

    fireEvent.click(submitButton);

    //Assert

    expect(screen.getByTestId(/search-instructions/i)).toBeInTheDocument();
  });

  test("When valid input is submitted, future hours weather info is shown.", async () => {
    render(<Search />);

    //Arrange
    const cityNameInput = screen.getByTestId(/search-input/i);
    const submitButton = screen.getByTestId(/weather-button/i);

    //Act
    fireEvent.change(cityNameInput, {
      target: { name: "cityName", value: "Downingtown" },
    });
    fireEvent.click(submitButton);

    //Assert
    expect(
      await screen.findByTestId(/future-hours-weather-display/i)
    ).toBeInTheDocument();
  });
  test("When valid input is submitted, future days weather info is shown.", async () => {
    render(<Search />);

    //Arrange
    const cityNameInput = screen.getByTestId(/search-input/i);
    const submitButton = screen.getByTestId(/weather-button/i);

    //Act
    fireEvent.change(cityNameInput, {
      target: { name: "cityName", value: "Downingtown" },
    });
    fireEvent.click(submitButton);

    //Assert
    expect(
      await screen.findByTestId(/future-days-weather-display/i)
    ).toBeInTheDocument();
  });
  test("When user inputs city that is not found, error message is shown to user", async () => {
    render(<Search />);

    //Arrange
    const cityNameInput = screen.getByTestId(/search-input/i);
    const submitButton = screen.getByTestId(/weather-button/i);

    //Act
    fireEvent.change(cityNameInput, {
      target: { name: "cityName", value: "Downingtowdfadn" },
    });
    fireEvent.click(submitButton);

    //Assert
    expect(await screen.findByTestId(/error-search/i)).toBeInTheDocument();
  });
});
