import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CountryDropdown from "./index";
import { Mycontext } from "../../App"; 
import "@testing-library/jest-dom/extend-expect";

// Mock values for context
const mockContext = {
  countrList: ["Colombo", "Kandy", "Galle"],
  selectCity: "",
  setSelectCity: jest.fn(),
};

describe("CountryDropdown Component", () => {
  test("renders dropdown with default label", () => {
    render(
      <Mycontext.Provider value={mockContext}>
        <CountryDropdown />
      </Mycontext.Provider>
    );

    expect(screen.getByText("Your Location")).toBeInTheDocument();
    expect(screen.getByText("Select City")).toBeInTheDocument();
  });

  test("opens dialog when button is clicked", async () => {
    render(
      <Mycontext.Provider value={mockContext}>
        <CountryDropdown />
      </Mycontext.Provider>
    );

    // Click to open modal
    fireEvent.click(screen.getByRole("button", { name: /your location/i }));

    await waitFor(() => {
      expect(
        screen.getByText("Choose Your Delivery Location")
      ).toBeInTheDocument();
    });
  });

  test("displays list of cities in dialog", async () => {
    render(
      <Mycontext.Provider value={mockContext}>
        <CountryDropdown />
      </Mycontext.Provider>
    );

    fireEvent.click(screen.getByRole("button", { name: /your location/i }));

    await waitFor(() => {
      expect(screen.getByText("Colombo")).toBeInTheDocument();
      expect(screen.getByText("Kandy")).toBeInTheDocument();
      expect(screen.getByText("Galle")).toBeInTheDocument();
    });
  });

  test("calls setSelectCity when a city is selected", async () => {
    render(
      <Mycontext.Provider value={mockContext}>
        <CountryDropdown />
      </Mycontext.Provider>
    );

    fireEvent.click(screen.getByRole("button", { name: /your location/i }));

    await waitFor(() => {
      fireEvent.click(screen.getByText("Kandy"));
    });

    expect(mockContext.setSelectCity).toHaveBeenCalledWith("Kandy");
  });
});
