import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
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
  useEffect(() => {
    console.log(props.item);
  });

  return (
    <>
      <div className={`item productItem ${props.itemView}`}>
        <div className="imgWrapper" style={{ position: "relative", zIndex: 1 }}>
          <img
            src={props.item?.images[0]}
            alt="Product"
            className="w-100"
            style={{ objectFit: "cover", display: "block" }}
          />
          <span
            className="badge badge-primary"
            style={{ position: "absolute", top: 10, left: 10 }}
          >
            {props.item?.discount}%
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
        <Link to="/product/1" onClick={handleLinkClick}>
          <div className="info">
            <h3 style={{ fontSize: 20, textAlign: "left" }}>
              {props.item?.name?.substr(0, 25) + "..."}
            </h3>
            <h4>{props.item?.description?.substr(0, 80) + "..."}</h4>
            <span className="text-success d-block">
              {props.item?.countInStock}
            </span>
            <Rating
              name="read-only"
              value={props.item?.rating}
              readOnly
              size="small"
              precision={0.5}
              className="rating mt-2 mb-2"
            />
            <div className="d-flex txt">
              <span className="oldPrice">${props.item?.price}</span>
              <span className="netPrice text-danger ml-2">
                ${props.item?.oldPrice}
              </span>
            </div>
          </div>
        </Link>
      </div>

      {isOpenProductModal && (
        <ProductModel closeProductModel={closeProductModel} />
      )}
    </>
  );
};

export default ProductItem;
