import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/906343.png";
import { Mycontext } from "../../App";
import { MdEmail } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import goo from "../../assets/images/google-icon-2048x2048-pks9lbdv.png";
import { FaUserCircle } from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import AnimatedText from "./AnimatedText";
import { IoHome } from "react-icons/io5";

const SignUp = () => {
  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setisShowPassword] = useState(false);
  const [isShowConfirmPassword, setisShowConfirmPassword] = useState(false);
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    isAdmin: true,
  });
  const context = useContext(Mycontext);
  useEffect(() => {
    context.setisHideSidebarAndHeader(true);
    window.scrollTo(0, 0);
  }, []);

  const focusInput = (index) => {
    setInputIndex(index);
  };
  const onchangeInput = (e) => {
    setFormFields(() => ({
      ...formFields,
      [e.target.name]: e.target.value,
    }));
  };
  const signUp = (e) => {
    e.preventDefault();
    console.log(formFields);
  };
  return (
    <>
      <img
        src="https://dashboard-ecommerce-react.netlify.app/static/media/pattern.df9a7a28fc13484d1013.webp"
        alt=""
        className="pattern"
      />
      <section className="loginSection signUpSection">
        <div className="row">
          <div className="col-md-8 d-flex align-items-center flex-column part1 justify-content-center">
            <AnimatedText text="The DashBoard & Admin Panel for Admins." />
            <p className="ml-2 mt-3">
              This admin panel offers a streamlined and powerful interface for
              managing key operations, tracking sales data, and overseeing user
              activity. With real-time analytics and intuitive controls, admins
              can effectively monitor performance, update content, and ensure
              efficient workflows. The dashboard provides insights and tools to
              help make data-driven decisions and enhance operational
              efficiency.
            </p>
            <div className="w-100 mt-3">
              <Link to={"/"}>
                <Button
                  className="btn-blue btn-lg btn-big"
                  style={{ marginLeft: "60px", marginTop: "0" }}
                >
                  <IoHome /> &nbsp; Go To Home
                </Button>
              </Link>
            </div>
          </div>
          <div className="col-md-4 pr-0 mt-2">
            <div className="loginBox">
              <div className="logo text-center">
                <img src={logo} alt="" width="180px" className="logo-img" />
                <h3 className="font-weight-bold" style={{ fontWeight: "700" }}>
                  Register a New Account
                </h3>
              </div>
              <div className="wrapper mt-3 card border">
                <form onSubmit={signUp}>
                  <div
                    className={`form-group mb-3 position-relative ${
                      inputIndex === 0 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <FaUserCircle />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Name"
                      onFocus={() => focusInput(0)}
                      onBlur={() => setInputIndex(null)}
                      autoFocus
                      name="name"
                      onChange={onchangeInput}
                    />
                  </div>
                  <div
                    className={`form-group mb-3 position-relative ${
                      inputIndex === 1 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <MdEmail />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Email"
                      onFocus={() => focusInput(1)}
                      onBlur={() => setInputIndex(null)}
                      name="email"
                      onChange={onchangeInput}
                    />
                  </div>
                  <div
                    className={`form-group mb-3 position-relative ${
                      inputIndex === 2 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <MdEmail />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Phone"
                      onFocus={() => focusInput(2)}
                      onBlur={() => setInputIndex(null)}
                      name="phone"
                      onChange={onchangeInput}
                    />
                  </div>
                  <div
                    className={`form-group mb-3 position-relative ${
                      inputIndex === 3 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <TbPasswordFingerprint />
                    </span>
                    <input
                      type={`${isShowPassword === true ? "text" : "password"}`}
                      className="form-control"
                      placeholder="Enter your Password"
                      onFocus={() => focusInput(3)}
                      onBlur={() => setInputIndex(null)}
                      name="password"
                      onChange={onchangeInput}
                    />
                    <span
                      className="toglleShowPassword"
                      onClick={() => setisShowPassword(!isShowPassword)}
                    >
                      {isShowPassword === true ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  <div
                    className={`form-group mb-4 position-relative ${
                      inputIndex === 4 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <FaShieldHalved />
                    </span>
                    <input
                      type={`${
                        isShowConfirmPassword === true ? "text" : "password"
                      }`}
                      className="form-control"
                      placeholder="Confirm your Password"
                      // onFocus={() => focusInput(4)}
                      onBlur={() => setInputIndex(null)}
                      name="confirmPassword"
                      onChange={onchangeInput}
                    />
                    <span
                      className="toglleShowPassword"
                      onClick={() =>
                        setisShowConfirmPassword(!isShowConfirmPassword)
                      }
                    >
                      {isShowConfirmPassword === true ? (
                        <FaEyeSlash />
                      ) : (
                        <FaEye />
                      )}
                    </span>
                  </div>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="I agree to the all Terms & Conditions."
                    className=""
                  />
                  <div className="form-group">
                    <Button
                      type="submit"
                      className="btn-blue btn-lg btn-big w-100"
                    >
                      Sign Up
                    </Button>
                  </div>
                  <div className="form-group mt-3 text-center mb-0">
                    <div className="d-flex align-items-center justify-content-center or mt-3 mb-3">
                      <span className="line"></span>
                      <span className="txt">or</span>
                      <span className="line"></span>
                    </div>
                    <Button
                      variant="outlined"
                      className="w-100 btn-lg btn-big loginWithGoogle mb-0"
                    >
                      <img
                        src={goo}
                        alt=""
                        style={{ height: "30px", width: "30px" }}
                      />{" "}
                      &nbsp; Sign In With Google
                    </Button>
                  </div>
                </form>
                <span className="text-center mt-2 pt-3 d-block">
                  Don't have an account?
                  <Link to={"/login"} className="link color ml-2">
                    Login
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
