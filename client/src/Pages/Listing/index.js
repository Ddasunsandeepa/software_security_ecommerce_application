import React, { useState, MouseEvent, useEffect } from "react";
import SideBar from "../../Components/SideBar";
import banner from "../../../src/assets/img1 (3).png";
import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { HiViewGrid } from "react-icons/hi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa6";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ProductItem from "../../Components/ProductItem/ProductItem";
import Pagination from "@mui/material/Pagination";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Listing = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [productView, setProductView] = useState("four");
  const openDropdown = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // const location = useLocation();

  // // Extract category ID from the pathname
  // const categoryId = location.pathname.split("/")[2]; // Assuming your path is /cat/:id

  // useEffect(() => {
  //   console.log("Category ID:", categoryId);
  //   // Log the ID to check if it's being captured
  // }, [categoryId]);

  const { id } = useParams(); // Extract 'id' from URL

  useEffect(() => {
    // Make sure to show the alert after the component is rendered
    if (id) {
      alert(id); // This will show the category id in an alert
    }
  }, [id]); // Trigger effect whenever 'id' changes
  return (
    <>
      <section className="product-Listing-page">
        <div className="container">
          <div className="productListing d-flex">
            <SideBar />
            <div className="content_right">
              <div
                style={{
                  position: "relative",
                  height: "450px", // Matches the image height
                  width: "100%",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={banner}
                  alt=""
                  className="w-100"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                {/* Dark overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0, 0, 0, 0.3)", // Dark transparent overlay
                  }}
                />
              </div>
              <div className="showBy mt-3 mb-3 d-flex align-items-center">
                <div className="d-flex align-items-center btnWrapper">
                  <Button
                    className={productView === "one" && "act"}
                    onClick={() => setProductView("one")}
                  >
                    <IoIosMenu />
                  </Button>

                  {/* <Button onClick={() => setProductView("two")}>
                    <HiViewGrid />
                  </Button> */}
                  <Button
                    className={productView === "three" && "act"}
                    onClick={() => setProductView("three")}
                  >
                    <CgMenuGridR />
                  </Button>
                  <Button
                    className={productView === "four" && "act"}
                    onClick={() => setProductView("four")}
                  >
                    <TfiLayoutGrid4Alt />
                  </Button>
                </div>
                <div className="ml-auto showByFilter">
                  <Button
                    className={productView === "three" && "act"}
                    onClick={handleClick}
                  >
                    Show 9
                    <FaAngleDown />
                  </Button>
                  <Menu
                    className="w-100 showperPageDropDown"
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openDropdown}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>10</MenuItem>
                    <MenuItem onClick={handleClose}>20</MenuItem>
                    <MenuItem onClick={handleClose}>30</MenuItem>
                    <MenuItem onClick={handleClose}>40</MenuItem>
                    <MenuItem onClick={handleClose}>50</MenuItem>
                  </Menu>
                </div>
              </div>
              <div className="productListing1">
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
              </div>

              <div className="d-flex align-items-center justify-content-center mt-5">
                <Pagination count={10} color="primary" size="large" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
