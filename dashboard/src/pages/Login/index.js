import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/906343.png";
import { Mycontext } from "../../App";
import { MdEmail } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import goo from "../../assets/images/google-icon-2048x2048-pks9lbdv.png";
import { postData } from "../../utils/Api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setisShowPassword] = useState(false);
  const context = useContext(Mycontext);
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    isAdmin: true,
  });
  const history = useNavigate();
  const onchangeInput = (e) => {
    setFormFields(() => ({
      ...formFields,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    context.setisHideSidebarAndHeader(true);
  }, []);

  const focusInput = (index) => {
    setInputIndex(index);
  };
  const signIn = (e) => {
    e.preventDefault();

    if (formFields.email === "") {
      toast.error("📧 Oops! Email cannot be blank. Please enter your email.", {
        theme: "colored",
      });
      return false;
    }

    if (formFields.password === "") {
      toast.error("🔒 Hey! Password is required to log in. Try again.", {
        theme: "colored",
      });
      return false;
    }

    postData("/api/user/signin", formFields)
      .then((res) => {
        localStorage.setItem("token", res.token);

        const user = {
          name: res.user?.name,
          email: res.user?.email,
          userId: res.user?.id,
        };
        localStorage.setItem("user", JSON.stringify(user));

        if (res) {
          toast.success("🎉 Welcome back! Logged in successfully. 🚀", {
            theme: "colored",
          });
          setTimeout(() => {
            // history("/dashboard");
            window.location.href = "/dashboard";
          }, 2000);
        } else {
          toast.error("⚠️ Incorrect email or password! Please try again.", {
            theme: "colored",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("❌ Something went wrong! Please check your connection.", {
          theme: "colored",
        });
      });
  };

  return (
    <>
      <ToastContainer position="bottom-left" autoClose={3000} />
      <img
        src="https://dashboard-ecommerce-react.netlify.app/static/media/pattern.df9a7a28fc13484d1013.webp"
        alt=""
        className="pattern"
      />
      <section className="loginSection">
        <div className="loginBox">
          <div className="logo text-center">
            <img src={logo} alt="" width="180px" className="logo-img" />
            <h3 className="font-weight-bold" style={{ fontWeight: "700" }}>
              Login to Dashboard
            </h3>
          </div>
          <div className="wrapper mt-4 card border">
            <form onSubmit={signIn}>
              <div
                className={`form-group mb-3 position-relative ${
                  inputIndex === 0 && "focus"
                }`}
              >
                <span className="icon">
                  <MdEmail />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Email"
                  onFocus={() => focusInput(0)}
                  onBlur={() => setInputIndex(null)}
                  autoFocus
                  name="email"
                  onChange={onchangeInput}
                />
              </div>
              <div
                className={`form-group mb-4 position-relative ${
                  inputIndex === 1 && "focus"
                }`}
              >
                <span className="icon">
                  <TbPasswordFingerprint />
                </span>
                <input
                  type={`${isShowPassword === true ? "text" : "password"}`}
                  className="form-control"
                  placeholder="Enter your Password"
                  onFocus={() => focusInput(1)}
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
              <div className="form-group">
                <Button type="submit" className="btn-blue btn-lg btn-big w-100">
                  Sign In
                </Button>
              </div>
              <div className="form-group mt-3 text-center mb-0">
                <Link to={"/forgot-passowrd"} className="link">
                  FORGOT PASSOWRD
                </Link>
                <div className="d-flex align-items-center justify-content-center or mt-3 mb-3">
                  <span className="line"></span>
                  <span className="txt">or</span>
                  <span className="line"></span>
                </div>
                <Button
                  variant="outlined"
                  className="w-100 btn-lg btn-big loginWithGoogle mb-3"
                >
                  <img
                    src={goo}
                    alt=""
                    style={{ height: "30px", width: "30px" }}
                  />{" "}
                  &nbsp; Sign In With Google
                </Button>
                {/* <Button
                  variant="outlined"
                  className="w-100 btn-lg btn-big loginWithGoogle mb-3"
                >
                  <img
                    src={goo}
                    alt=""
                    style={{ height: "30px", width: "30px" }}
                  />{" "}
                  &nbsp; Sign In With Google
                </Button> */}
              </div>
            </form>
          </div>
          <div className="wrapper mt-3 card border p-2">
            <span className="text-center">
              Don't have an account?
              <Link to={"/signUp"} className="link color ml-2">
                Register
              </Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
