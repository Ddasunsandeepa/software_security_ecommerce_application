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

const Mycontext = createContext();

function App() {
  const [countrList, setCountrList] = useState([]);
  const [selectCity, setSelectCity] = useState("");
  const [isOpenProductModel, setisOpenProductModel] = useState(false);
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
  const [isLogin, setisLogin] = useState(false);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries");
  }, []);

  const getCountry = async (url) => {
    const resposive = await axios.get(url).then((res) => {
      setCountrList(res.data.data[196].cities);
      console.log(res.data.data[196].cities);
    });
  };

  const values = {
    countrList,
    setSelectCity,
    selectCity,
    setisOpenProductModel,
    isHeaderFooterShow,
    setIsHeaderFooterShow,
    isLogin,
    setisLogin,
  };

  return (
    <BrowserRouter>
      <Mycontext.Provider value={values}>
        {isHeaderFooterShow === true && <Header />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cat/:id" element={<Listing />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
        {isHeaderFooterShow === true && <Footer />}
      </Mycontext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { Mycontext };
