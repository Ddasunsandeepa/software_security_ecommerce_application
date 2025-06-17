// SearchBox.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import SearchBox from "./SearchBox"; // Adjust path if needed
import userEvent from "@testing-library/user-event";

describe("SearchBox component", () => {
  test("renders input and search button", () => {
    render(<SearchBox />);
    
    const inputElement = screen.getByPlaceholderText(/search for products/i);
    const buttonElement = screen.getByRole("button");

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test("allows typing in the input field", async () => {
    render(<SearchBox />);
    const inputElement = screen.getByPlaceholderText(/search for products/i);

    await userEvent.type(inputElement, "Laptop");

    expect(inputElement).toHaveValue("Laptop");
  });
});
    test("calls onSearch when search button is clicked", async () => {
        const mockOnSearch = jest.fn();
        render(<SearchBox onSearch={mockOnSearch} />);
        
        const inputElement = screen.getByPlaceholderText(/search for products/i);
        const buttonElement = screen.getByRole("button");
    
        await userEvent.type(inputElement, "Laptop");
        await userEvent.click(buttonElement);
    
        expect(mockOnSearch).toHaveBeenCalledWith("Laptop");
    });
    