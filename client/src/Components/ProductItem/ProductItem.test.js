import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

// MOCK the full ProductItem with only basic functionality
jest.mock("swiper/css", () => {});
jest.mock("swiper/css/navigation", () => {});
jest.mock("react-icons/tfi", () => ({
  TfiFullscreen: () => <span data-testid="fullscreen-icon">[Fullscreen]</span>,
}));
jest.mock("react-icons/io", () => ({
  IoMdHeartEmpty: () => <span data-testid="heart-icon">[Heart]</span>,
}));
jest.mock("@mui/material", () => ({
  Button: ({ children, onClick }) => <button onClick={onClick}>{children}</button>,
  Rating: () => <div data-testid="rating">Rating</div>,
}));
jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
    info: jest.fn(),
  },
  ToastContainer: () => <div data-testid="toast-container" />,
}));
jest.mock("../../utils/Api", () => ({
  fetchDataFromApi: jest.fn(() => Promise.resolve([])),
  postData: jest.fn(() => Promise.resolve(true)),
}));

// Import actual component after mocking
import ProductItem from "./ProductItem";
import { Mycontext } from "../../App";

const sampleProduct = {
  _id: "abc123",
  name: "Test Product",
  description: "Sample description",
  images: ["https://via.placeholder.com/150"],
  rating: 4.5,
  price: 99,
  oldPrice: 120,
  discount: 10,
  countInStock: 5,
};

const mockContext = {
  setisOpenProductModel: jest.fn(),
  isOpenProductModal: false,
};

describe("ProductItem (mocked test)", () => {
  test("renders product name and price", () => {
    render(
      <Mycontext.Provider value={mockContext}>
        <ProductItem item={sampleProduct} itemView="grid" />
      </Mycontext.Provider>
    );

    expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
    expect(screen.getByText("$99")).toBeInTheDocument();
  });

  test("clicking fullscreen calls context function", () => {
    render(
      <Mycontext.Provider value={mockContext}>
        <ProductItem item={sampleProduct} itemView="grid" />
      </Mycontext.Provider>
    );

    const fullscreenBtn = screen.getAllByRole("button")[0];
    fireEvent.click(fullscreenBtn);

    expect(mockContext.setisOpenProductModel).toHaveBeenCalledWith({
      _id: "abc123",
      open: true,
    });
  });
});
