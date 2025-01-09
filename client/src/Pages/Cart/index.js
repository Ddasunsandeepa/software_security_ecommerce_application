import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityDropDown";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  return (
    <div className="section cartPage">
      <div className="container">
        <h2 className="hd mb-0 ml-5">Your Cart</h2>
        <p className=" ml-5">
          There are <b className="text-red">3</b> products in your cart
        </p>
        <div className="row">
          <div className="col-md-8 pr-5">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th width="40%">Product</th>
                    <th width="15%">Unit Price</th>
                    <th width="15%">Quantity</th>
                    <th width="15%">SubTotal</th>
                    <th width="15%">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemImgWrapper">
                          <div className="imgWrapper">
                            <img
                              src="https://adminsc.pizzahut.lk//images/mainmenu/4b3fdb42-f9f8-451a-ada9-e36a3c527cad.jpg"
                              alt=""
                              className="w-100"
                              style={{ height: "100px", width: "100px" }}
                            />
                          </div>
                          <div
                            className="info px-3"
                            style={{ color: "#722222" }}
                          >
                            <h6 className="product-name">
                              Cheesy Onion with Green Chillies
                            </h6>
                            <Rating
                              name="read-only"
                              value={4.5}
                              readOnly
                              precision={0.5}
                              size="small"
                            />
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td>$12.00</td>
                    <td>
                      <QuantityBox />
                    </td>
                    <td>$12.00</td>
                    <td d-flex align-items-inline>
                      <button className="btn btn-danger btn-sm">
                        <MdDelete /> &nbsp;Remove
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemImgWrapper">
                          <div className="imgWrapper">
                            <img
                              src="https://adminsc.pizzahut.lk//images/mainmenu/4b3fdb42-f9f8-451a-ada9-e36a3c527cad.jpg"
                              alt=""
                              className="w-100"
                              style={{ height: "100px", width: "100px" }}
                            />
                          </div>
                          <div
                            className="info px-3"
                            style={{ color: "#722222" }}
                          >
                            <h6 className="product-name">
                              Cheesy Onion with Green Chillies
                            </h6>
                            <Rating
                              name="read-only"
                              value={4.5}
                              readOnly
                              precision={0.5}
                              size="small"
                            />
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td>$12.00</td>
                    <td>
                      <QuantityBox />
                    </td>
                    <td>$12.00</td>
                    <td>
                      <button className="btn btn-danger btn-sm">
                        <MdDelete /> &nbsp;Remove
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemImgWrapper">
                          <div className="imgWrapper">
                            <img
                              src="https://adminsc.pizzahut.lk//images/mainmenu/4b3fdb42-f9f8-451a-ada9-e36a3c527cad.jpg"
                              alt=""
                              className="w-100"
                              style={{ height: "100px", width: "100px" }}
                            />
                          </div>
                          <div
                            className="info px-3"
                            style={{ color: "#722222" }}
                          >
                            <h6 className="product-name">
                              Cheesy Onion with Green Chillies
                            </h6>
                            <Rating
                              name="read-only"
                              value={4.5}
                              readOnly
                              precision={0.5}
                              size="small"
                            />
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td>$12.00</td>
                    <td>
                      <QuantityBox />
                    </td>
                    <td>$12.00</td>
                    <td>
                      <button className="btn btn-danger btn-sm">
                        <MdDelete /> &nbsp;Remove
                      </button>
                    </td>
                  </tr>
                  {/* Repeat for other products */}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="card shadow-lg p-4 cartDetails">
              <h4 className="cart-header mb-4">CART TOTALS</h4>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <span>SubTotal</span>
                <span className="amount text-success">$12.31</span>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <span>Shipping</span>
                <span className="text-muted font-weight-bold">Free</span>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <span>Estimate For</span>
                <span className="font-weight-bold">Colombo</span>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <span>Total</span>
                <span className="amount text-danger font-weight-bold">
                  $12.31
                </span>
              </div>

              <button className="btn btn-primary btn-block btn-lg checkout-btn mt-3">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
