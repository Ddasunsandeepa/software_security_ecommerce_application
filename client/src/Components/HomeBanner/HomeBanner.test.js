// src/Components/HomeBanner/HomeBanner.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import HomeBanner from "./index";

// Mock matchMedia before all tests
beforeAll(() => {
  window.matchMedia = window.matchMedia || function () {
    return {
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    };
  };
});

describe("HomeBanner", () => {
  test("renders banner images and content", () => {
    render(<HomeBanner />);

    // Check heading texts
    expect(screen.getByText(/Delicious Meals/i)).toBeInTheDocument();
    expect(screen.getByText(/Spicy Pizza/i)).toBeInTheDocument();
    expect(screen.getByText(/Fresh Sushi/i)).toBeInTheDocument();
    expect(screen.getByText(/Delicious Food/i)).toBeInTheDocument();

    // Check buttons
    expect(screen.getAllByRole("button", { name: /shop now|order now/i }).length).toBeGreaterThan(0);

    // Optional: check at least one image is present
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);
  });
});
