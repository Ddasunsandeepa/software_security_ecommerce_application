import { Button } from "@mui/material";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { TfiFullscreen } from "react-icons/tfi";
import { Rating } from "@mui/material";
import { IoMdHeartEmpty } from "react-icons/io";
import ProductModel from "../ProductModal";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);

  const viewProductDetails = (id) => {
    setIsOpenProductModal(true);
  };
  const closeProductModel = () => {
    setIsOpenProductModal(false);
  };

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Link to="/product/1" onClick={handleLinkClick}>
        <div className={`item productItem ${props.itemView}`}>
          <div
            className="imgWrapper"
            style={{ position: "relative", zIndex: 1 }}
          >
            <img
              src="https://adminsc.pizzahut.lk//images/mainmenu/c4f8dd31-4c4e-41e8-be57-3f0c4e32e13d.jpg"
              alt="Product"
              className="w-100"
              style={{ objectFit: "cover", display: "block" }}
            />
            <span
              className="badge badge-primary"
              style={{ position: "absolute", top: 10, left: 10 }}
            >
              28%
            </span>
            <div
              className="actions"
              style={{ position: "absolute", top: 10, right: 10 }}
            >
              <Button onClick={() => viewProductDetails(1)}>
                <TfiFullscreen />
              </Button>
              <Button>
                <IoMdHeartEmpty style={{ fontSize: "20px" }} />
              </Button>
            </div>
          </div>
          <div className="info">
            <h4>Delicious BBQ Chicken Pizza. Very tasty meals</h4>
            <span className="text-success d-block">In Stock</span>
            <Rating
              name="read-only"
              value={4}
              readOnly
              size="small"
              precision={0.5}
              className="rating mt-2 mb-2"
            />
            <div className="d-flex txt">
              <span className="oldPrice">$30.00</span>
              <span className="netPrice text-danger ml-2">$16.00</span>
            </div>
          </div>
        </div>
      </Link>

      {isOpenProductModal && (
        <ProductModel closeProductModel={closeProductModel} />
      )}
    </>
  );
};

export default ProductItem;
