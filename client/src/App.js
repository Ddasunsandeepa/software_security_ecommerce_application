import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, json, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Components/Footer";
import Listing from "./Pages/Listing";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Navigation from "./Components/Header/Navigation";
import ProductModel from "./Components/ProductModal";
import { fetchDataFromApi, postData } from "./utils/Api";
import { NoProductsFound } from "./Components/motionProduct";
import BlogPage from "./Pages/blog/blog";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Mycontext = createContext();

function App() {
  const [countrList, setCountrList] = useState([]);
  const [selectCity, setSelectCity] = useState("");
  const [isOpenProductModel, setisOpenProductModel] = useState({
    id: "",
    open: false,
  });
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
  const [isLogin, setisLogin] = useState(false);
  const [productData, setProductData] = useState(null);
  const [categoryData, setCategoryData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [addingCart, setaddingCart] = useState(false);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries");
  }, []);

  useEffect(() => {
    const catArr = [];
    fetchDataFromApi("/api/category").then((res) => {
      setCategoryData(res.categoryList);
    });
  }, []);
  const [user, setUser] = useState({
    name: "",
    email: "",
    userId: "",
  });
  const [cartdata, setcartdata] = useState();
  useEffect(() => {
    isOpenProductModel.open === true &&
      // alert(isOpenProductModel._id);
      fetchDataFromApi(`/api/products/${isOpenProductModel._id}`)
        .then((data) => {
          console.log(data); // Log the data to ensure you're getting the response
          setProductData(data); // Set the fetched product data
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
        });
  }, [isOpenProductModel]);

  const getCountry = async (url) => {
    const response = await axios.get(url);
    // console.log(response);
    setCountrList(response.data.data[196]?.cities);
  };

  // const getCountry = () => {
  //   // Define your custom list of cities
  //   const cities = [
  //     { name: "Colombo", country: "Sri Lanka" },
  //     { name: "Kandy", country: "Sri Lanka" },
  //     { name: "Galle", country: "Sri Lanka" },
  //     { name: "Negombo", country: "Sri Lanka" },
  //     { name: "Jaffna", country: "Sri Lanka" },
  //     { name: "Matara", country: "Sri Lanka" },
  //     { name: "Trincomalee", country: "Sri Lanka" },
  //     { name: "Batticaloa", country: "Sri Lanka" },
  //     { name: "Anuradhapura", country: "Sri Lanka" },
  //     { name: "Nuwara Eliya", country: "Sri Lanka" },
  //     { name: "Dambulla", country: "Sri Lanka" },
  //     { name: "Vavuniya", country: "Sri Lanka" },
  //     { name: "Ratnapura", country: "Sri Lanka" },
  //     { name: "Kurunegala", country: "Sri Lanka" },
  //     { name: "Mullaitivu", country: "Sri Lanka" },
  //     { name: "Puttalam", country: "Sri Lanka" },
  //     // Add more cities as needed
  //   ];

  //   // Set the list to the state
  //   setCountrList(cities);
  // };

  // UseEffect to call the function when the component is mounted

  useEffect(() => {
    getCountry(); // Call the function that sets the cities
  }, []);

  const closeProductModel = () => {
    setisOpenProductModel({ id: "", open: false });
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== "" && token !== undefined && token !== null) {
      setisLogin(true);
      const userData = JSON.parse(localStorage.getItem("user"));
      setUser(userData);
    } else {
      setisLogin(false);
    }
  }, [isLogin]);

  const addtoCart = (data) => {
    setaddingCart(true);
    console.log(data);
    postData(`/api/cart/add`, data).then((res) => {
      console.log("Server Response:", res);
      if (res !== null && res !== undefined && res !== "") {
        toast.success("🛒 Item added to cart successfully!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
            backgroundColor: "#28a745",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "8px",
            padding: "10px 15px",
          },
          icon: "✅",
        });
        // setTimeout(() => {
        //   setaddingCart(false);
        // }, 1000);
      } else {
        toast.error("❌ Failed to add item to cart!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
            backgroundColor: "#dc3545",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "8px",
            padding: "10px 15px",
          },
          icon: "⚠️",
        });
      }
    });
  };
  useEffect(() => {
    fetchDataFromApi(`/api/cart`).then((res) => {
      setcartdata(res);
    });
  });
  const values = {
    countrList,
    setSelectCity,
    selectCity,
    isOpenProductModel,
    setisOpenProductModel,
    isHeaderFooterShow,
    setIsHeaderFooterShow,
    isLogin,
    setisLogin,
    categoryData,
    setCategoryData,
    user,
    setUser,
    addtoCart,
    cartData,
    addingCart,
    setaddingCart,
    cartdata,
    setcartdata,
  };

  return (
    <BrowserRouter>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <Mycontext.Provider value={values}>
        {isHeaderFooterShow && <Header />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cat/:id" element={<Listing />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>

        {isHeaderFooterShow && <Footer />}

        {/* ✅ Show modal only when it's open */}
        {isOpenProductModel.open && (
          <ProductModel
            data={productData}
            closeProductModel={closeProductModel}
          />
        )}
      </Mycontext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { Mycontext };
