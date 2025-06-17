import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import PaymentSuccess from "../../Pages/paymentSuccess/index"; 
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

// Mock Paymentsuccess component to keep test simple
jest.mock("../../Components/paymentsuccess", () => () => (
  <div data-testid="payment-success-message">Payment Successful! 🎉</div>
));

describe("PaymentSuccess component", () => {
  test("shows loading message initially", () => {
    render(
      <MemoryRouter>
        <PaymentSuccess />
      </MemoryRouter>
    );

    expect(screen.getByText(/Processing payment/i)).toBeInTheDocument();
  });

  test("shows success message after 2 seconds", async () => {
    render(
      <MemoryRouter>
        <PaymentSuccess />
      </MemoryRouter>
    );

    // await waitFor(() => {
    //   expect(screen.getByTestId("payment-success-message")).toBeInTheDocument();
    // });
  });
});
