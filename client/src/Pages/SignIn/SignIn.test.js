import React from "react";
import { render, screen } from "@testing-library/react";
import SignIn from "../../Pages/SignIn/index"; 
import { BrowserRouter } from "react-router-dom";
import { Mycontext } from "../../App"; 


beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

const mockContext = {
  setIsHeaderFooterShow: jest.fn(),
};

describe("SignIn Component", () => {
  test("renders email, password fields and Sign In button", () => {
    render(
      <Mycontext.Provider value={mockContext}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </Mycontext.Provider>
    );

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /sign in/i })).toBeInTheDocument();
  });
});
