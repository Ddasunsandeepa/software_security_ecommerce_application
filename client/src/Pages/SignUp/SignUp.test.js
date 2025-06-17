
import React from "react";
import { render, screen } from "@testing-library/react";
import SignUp from "./SignUp";
import { BrowserRouter } from "react-router-dom";


const mockContextValue = {
  setIsHeaderFooterShow: jest.fn(),
};

jest.mock("../../App", () => ({
  Mycontext: React.createContext({ setIsHeaderFooterShow: () => {} }),
}));

describe("SignUp Component", () => {
  test("renders SignUp form with input fields and Sign Up button", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );

    // Check form fields
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contact No./i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    // Check buttons
    expect(screen.getByRole("button", { name: /Sign Up/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Cancel/i })).toBeInTheDocument();
  });
});
