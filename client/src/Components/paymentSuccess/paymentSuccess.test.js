import React from "react";                          // Import React
import { render, screen } from "@testing-library/react";  // Tools to render the component and query elements
import Paymentsuccess from "../../Components/paymentsuccess/index";              // Import the component you want to test
import "@testing-library/jest-dom";                // Add helpful matchers like toBeInTheDocument()

test("renders payment success message", () => {
  // Render the component:  render() simulates what would happen if your component was actually shown in a browser.
  render(<Paymentsuccess />);

  // Step 2: Check if "Payment Successful! 🎉" text is on the screen
  const successMessage = screen.getByText("Payment Successful! 🎉");

  // Step 3: Expect that the message is actually visible
  expect(successMessage).toBeInTheDocument();
});
