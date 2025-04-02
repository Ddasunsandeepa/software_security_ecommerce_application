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
       <ToastContainer position="bottom-right" autoClose={3000} />
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
                               src="/assets/empty-cart.png"
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
 
 export default MyList;
