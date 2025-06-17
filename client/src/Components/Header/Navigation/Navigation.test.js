import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import Navigation from "./index";
import { Mycontext } from "../../../App";
import { BrowserRouter as Router } from "react-router-dom";
import * as api from "../../../utils/Api";

// Mock fetchDataFromApi function
jest.mock("../../../utils/Api", () => ({
  fetchDataFromApi: jest.fn(),
}));

const mockCategories = [
  { _id: "1", name: "Meal" },
  { _id: "2", name: "Dessert" },
  { _id: "3", name: "Drinks" },
  { _id: "4", name: "Combo" },
];

const mockProducts = [
  { _id: "p1", name: "Burger", catName: "Meal" },
  { _id: "p2", name: "Cake", catName: "Dessert" },
  { _id: "p3", name: "Coke", catName: "Drinks" },
  { _id: "p4", name: "Meal Combo", catName: "Combo" },
];

describe("Navigation Component", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test("renders and fetches categories and products", async () => {
    api.fetchDataFromApi
      .mockResolvedValueOnce(mockCategories)
      .mockResolvedValueOnce(mockProducts); 

    render(
      <Mycontext.Provider value={{}}>
        <Router>
          <Navigation />
        </Router>
      </Mycontext.Provider>
    );

    await waitFor(() => {
      expect(api.fetchDataFromApi).toHaveBeenCalledWith("/api/category");
      expect(api.fetchDataFromApi).toHaveBeenCalledWith("/api/products");

      // Check that main nav items render
      expect(screen.getByText(/home/i)).toBeInTheDocument();
      expect(screen.getByText(/blog/i)).toBeInTheDocument();
      expect(screen.getByText(/contact/i)).toBeInTheDocument();

      // Check that categories render
      expect(screen.getByText(/meal/i)).toBeInTheDocument();
      expect(screen.getByText(/dessert/i)).toBeInTheDocument();
      expect(screen.getByText(/drinks/i)).toBeInTheDocument();
      expect(screen.getByText(/combo/i)).toBeInTheDocument();
    });
  });

  test("toggles sidebar on button click", async () => {
    api.fetchDataFromApi
      .mockResolvedValueOnce(mockCategories)
      .mockResolvedValueOnce(mockProducts);

    render(
      <Mycontext.Provider value={{}}>
        <Router>
          <Navigation />
        </Router>
      </Mycontext.Provider>
    );

    const toggleButton = await screen.findByText(/all categories/i);
    fireEvent.click(toggleButton);

    await waitFor(() => {
      const sidebar = screen.getByRole("navigation").querySelector(".sidebarNav.open");
      expect(sidebar).toBeInTheDocument();
    });
  });

  test("displays product submenu under Meal category", async () => {
    api.fetchDataFromApi
      .mockResolvedValueOnce(mockCategories)
      .mockResolvedValueOnce(mockProducts);

    render(
      <Mycontext.Provider value={{}}>
        <Router>
          <Navigation />
        </Router>
      </Mycontext.Provider>
    );

    await waitFor(() => {
      const productButton = screen.getByText("Burger");
      expect(productButton).toBeInTheDocument();
    });
  });
});
