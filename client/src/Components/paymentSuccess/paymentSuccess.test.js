import React from "react";                          
import { render, screen } from "@testing-library/react";  
import Paymentsuccess from "../../Components/paymentsuccess/index";            
import "@testing-library/jest-dom";                

test("renders payment success message", () => {
  // Render the component:  render() simulates what would happen if your component was actually shown in a browser.
  render(<Paymentsuccess />);

  // Step 2: Check if "Payment Successful! 🎉" text is on the screen
  const successMessage = screen.getByText("Payment Successful! 🎉");

  // Step 3: Expect that the message is actually visible
  expect(successMessage).toBeInTheDocument();
});
