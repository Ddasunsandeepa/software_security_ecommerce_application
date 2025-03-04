import { Button } from "@mui/material";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useCart } from "../../context";

const QuantityBox = ({ inputVal, setInputVal, productId }) => {
  // const { updateQuantity } = useCart();
  const minus = () => {
    if (inputVal > 1) {
      setInputVal(inputVal - 1);
    }
  };

  const plus = () => {
    setInputVal(inputVal + 1);
  };
  return (
    <div>
      <div className="quantityDrop d-flex align-items-center">
        <Button onClick={minus}>
          <FaMinus />
        </Button>
        <input type="text" value={inputVal} />
        <Button onClick={plus}>
          <FaPlus />
        </Button>
      </div>
    </div>
  );
};

export default QuantityBox;
