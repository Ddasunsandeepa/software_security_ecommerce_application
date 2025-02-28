import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import { fetchDataFromApi } from "./utils/Api";
import { NoProductsFound } from "./Components/motionProduct";

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

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries");
  }, []);

  useEffect(() => {
    const catArr = [];
    fetchDataFromApi("/api/category").then((res) => {
      setCategoryData(res.categoryList);
    });
  }, []);

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
    setCountrList(response.data.data[196].cities);
  };

  const closeProductModel = () => {
    setisOpenProductModel({ id: "", open: false });
  };

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
  };

  return (
    <BrowserRouter>
      <Mycontext.Provider value={values}>
        {isHeaderFooterShow && <Header />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cat/:id" element={<Listing />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
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
