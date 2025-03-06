import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityDropDown";
import { MdDelete } from "react-icons/md";
import { Mycontext } from "../../App";
import { deleteData, editData, fetchDataFromApi } from "../../utils/Api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoBagCheckOutline } from "react-icons/io5";

const Cart = () => {
  const [activeSize, setActiveSize] = useState(null);
  const [cartFields, setCartFields] = useState({});
  const [cartData, setCartData] = useState([]);
  const [loading, setLoaing] = useState(false);
  const context = useContext(Mycontext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    fetchDataFromApi(`/api/cart?userId=${user?._id}`).then((res) => {
      setCartData(res);
    });
  }, []);
  const updateQuantity = (productId, newQuantity) => {
    setCartData((prevCart) =>
      prevCart.map((item) =>
        item._id === productId
          ? {
              ...item,
              quantity: newQuantity,
              subTotal: item.price * newQuantity, // Update subtotal
            }
          : item
      )
    );

    // Find the updated item and call selectedItem
    const updatedItem = cartData.find((item) => item._id === productId);
    if (updatedItem) {
      selectedItem({ ...updatedItem, quantity: newQuantity });
    }
  };

  const removeItem = (id) => {
    setLoaing(true);

    deleteData(`/api/cart/${id}`)
      .then((res) => {
        // ✅ Show toast message once before fetching new data
        toast.success("Item removed from cart successfully!");

        // ✅ Update cart optimistically
        setCartData((prevCart) => prevCart.filter((item) => item._id !== id));

        // ✅ Fetch new data after a delay
        setTimeout(() => {
          fetchDataFromApi(`/api/cart`).then((res) => {
            setCartData(res);
            setLoaing(false);
          });
        }, 1000);
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
        toast.error("Failed to remove item. Please try again!");
        setLoaing(false);
      });
  };

  // const selectedItem = (item) => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   cartFields.productTitle = item?.name;
  //   cartFields.images = item?.images[0];
  //   cartFields.rating = item?.rating;
  //   cartFields.price = item?.price;
  //   cartFields.quantity = item?.quantity;
  //   cartFields.subTotal = item?.currentPrice;
  //   cartFields.productId = item?._id;
  //   cartFields.userId = user?.id;
  //   cartFields.size = item?.size;

  //   editData(`/api/cart/${item?._id}`, cartFields).then((res) => {});
  // };
  const selectedItem = (item) => {
    setLoaing(true);
    const user = JSON.parse(localStorage.getItem("user"));

    const updatedCartItem = {
      productTitle: item?.name,
      rating: item?.rating,
      price: item?.price,
      quantity: item?.quantity,
      subTotal: item?.price * item?.quantity, // Ensure updated subtotal
      productId: item?._id,
      userId: user?.id,
      size: item?.size,
    };

    editData(`/api/cart/${item?._id}`, updatedCartItem).then((res) => {
      console.log("Cart updated successfully!");
      setTimeout(() => {
        setLoaing(false);
        fetchDataFromApi(`/api/cart`).then((res) => {
          setCartData(res);
        });
      }, 1000);
    });
  };

  const calculateSubtotal = () => {
    if (!Array.isArray(context.cartdata) || context.cartdata.length === 0) {
      return "0.00";
    }

    return context.cartdata
      .reduce((total, item) => total + (item.subTotal || 0), 0)
      .toFixed(2);
  };

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={2000} />
      <div className="section cartPage">
        <div className="container">
          <h2 className="hd mb-0 ml-5">Your Cart</h2>
          <p className=" ml-5">
            There are <b className="text-red">{cartData?.length}</b> products in
            your cart
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
                    {cartData?.length > 0 ? (
                      cartData.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <Link to={`/product/${item?.productId}`}>
                              <div className="d-flex align-items-center cartItemImgWrapper">
                                <div className="imgWrapper">
                                  <img
                                    src={item?.images}
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
                                    {item?.productTitle?.substr(0, 26) + "..."}
                                  </h6>
                                  <h6 className="product-name">
                                    ({item.size})
                                  </h6>
                                  <Rating
                                    name="read-only"
                                    value={item.rating}
                                    readOnly
                                    precision={0.5}
                                    size="small"
                                  />
                                </div>
                              </div>
                            </Link>
                          </td>
                          <td>${(item.subTotal / item.quantity).toFixed(2)}</td>
                          <td>
                            <QuantityBox
                              inputVal={item.quantity}
                              setInputVal={(newQty) =>
                                updateQuantity(item._id, newQty)
                              }
                              productId={item._id}
                            />
                          </td>
                          <td>${item.subTotal.toFixed(2)}</td>
                          <td className="d-flex align-items-inline">
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => removeItem(item?._id)}
                            >
                              <MdDelete /> &nbsp;Remove
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-center">
                          <div className="empty-cart">
                            <img
                              src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png?f=webp"
                              alt="Empty Cart"
                              className="empty-cart-img"
                            />
                            <h4>Your Cart is Empty</h4>
                            <p>Looks like you haven't added anything yet.</p>
                            <Link to="/" className="btn btn-primary">
                              Go Shopping
                            </Link>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card shadow-lg p-4 cartDetails">
                <h4 className="cart-header mb-4">CART TOTALS</h4>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span>SubTotal</span>
                  <span className="amount text-success">
                    ${calculateSubtotal()}
                  </span>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span>Shipping</span>
                  <span className="text-muted font-weight-bold">
                    {calculateSubtotal() > 500 ? "Free" : `$${20}`}
                  </span>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span>Estimate For</span>
                  <span className="font-weight-bold">Colombo</span>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span>Total</span>
                  <span className="amount text-danger font-weight-bold">
                    $
                    {Number(calculateSubtotal()) +
                      Number(calculateSubtotal() > 500 ? 0 : 20)}
                    .00
                  </span>
                </div>

                <button className="btn btn-primary btn-block btn-lg checkout-btn mt-3">
                  <IoBagCheckOutline /> &nbsp; Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading === true && <div className="loading"></div>}
    </>
  );
};

export default Cart;
