import React from "react";
import { render, screen } from "@testing-library/react";
import SignIn from "../../Pages/SignIn/index"; // ✅ adjust if needed
import { BrowserRouter } from "react-router-dom";
import { Mycontext } from "../../App"; // ✅ adjust if needed

// ✅ Prevent matchMedia error (e.g., from react-slick)
// Mock matchMedia globally before running tests
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

    // ✅ Check if Email input is rendered
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();

    // ✅ Check if Password input is rendered
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

    // ✅ Check if "Sign In" button is present
    expect(screen.getByRole("button", { name: /sign in/i })).toBeInTheDocument();
  });
});
