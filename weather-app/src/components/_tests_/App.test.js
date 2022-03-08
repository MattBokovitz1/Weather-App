import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../App";

describe("App Component Tests", () => {
  test("App renders without errors", () => {
    render(<App />);
  });

  test("Landing page renders when the app renders", async () => {
    render(<App />);
    await screen.findByText(/The Weather of the World/i);
  });
});
