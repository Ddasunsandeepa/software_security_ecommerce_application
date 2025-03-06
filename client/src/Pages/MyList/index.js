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
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const MyList = () => {
  const [loading, setLoaing] = useState(false);
  const [myListData, setmyListData] = useState([]);
  const context = useContext(Mycontext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    fetchDataFromApi(`/api/myList?userId=${user?._id}`).then((res) => {
      console.log(res);
      setmyListData(res);
    });
  }, []);

  const removeItem = (id) => {
    setLoaing(true);

    deleteData(`/api/myList/${id}`)
      .then((res) => {
        toast.success("Item removed from cart successfully!");

        setmyListData((prevCart) => prevCart.filter((item) => item._id !== id));
        setTimeout(() => {
          const user = JSON.parse(localStorage.getItem("user"));
          fetchDataFromApi(`/api/myList?userId=${user?._id}`).then((res) => {
            setmyListData(res);
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

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <div className="wishlist-section">
        <div className="container">
          <h2 className="wishlist-title">My Wishlist ❤️</h2>
          <p className="wishlist-subtitle">
            You have <b>{myListData?.length}</b> items in your wishlist
          </p>
          <div className="wishlist-grid">
            {myListData?.length > 0 ? (
              myListData.map((item, index) => (
                <div className="wishlist-card" key={index}>
                  <Link
                    to={`/product/${item?.productId}`}
                    className="wishlist-link"
                  >
                    <div className="wishlist-image-container">
                      <img
                        src={item?.images}
                        alt={item?.productTitle}
                        className="wishlist-image"
                      />
                    </div>
                    <div className="wishlist-info">
                      <h6 className="wishlist-product-title">
                        {item?.productTitle?.substr(0, 26) + "..."}
                      </h6>
                      <p className="wishlist-price">
                        ${item?.price.toFixed(2)}
                      </p>
                      <Rating
                        name="read-only"
                        value={item.rating}
                        readOnly
                        precision={0.5}
                        size="small"
                      />
                    </div>
                  </Link>
                  <button
                    className="wishlist-remove-btn"
                    onClick={() => removeItem(item?._id)}
                  >
                    <MdDelete size={20} /> Remove
                  </button>
                </div>
              ))
            ) : (
              <div className="empty-wishlist">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png?f=webp"
                  alt="Empty Wishlist"
                  className="empty-wishlist-img"
                />
                <h4>Your Wishlist is Empty</h4>
                <p>Save items you love and buy them later.</p>
                <Link to="/" className="wishlist-shop-btn btn btn-primary">
                  Go Shopping
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyList;
