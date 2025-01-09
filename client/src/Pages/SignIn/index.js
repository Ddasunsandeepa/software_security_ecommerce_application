import React, { useContext, useEffect } from "react";
import { Mycontext } from "../../App";
import logo from "../../assets/images/images.png";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import logo1 from "../../assets/google-icon-2048x2048-pks9lbdv.png";

const SignIn = () => {
  const context = useContext(Mycontext);
  useEffect(() => {
    context.setIsHeaderFooterShow(false);
  }, []);

  return (
    <section className="section signInPage">
      {/* Background shape */}
      <div className="shape-bottom">
        <svg
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ width: "100%", height: "auto", display: "block" }}
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,160L48,165.3C96,171,192,181,288,186.7C384,192,480,192,576,170.7C672,149,768,107,864,85.3C960,64,1056,64,1152,101.3C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Page content */}
      <div className="container">
        <div className="box card p-3 shadow border-0">
          <div className="text-center">
            <img
              src={logo}
              alt=""
              style={{ height: "100px", width: "300px" }}
            />
          </div>

          <form className="mt-0">
            <h2 style={{ color: "black" }} className="ml-3 mb-3">
              Sign In
            </h2>
            <div className="form-group">
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                type="email"
                required
                className="w-100"
              />
            </div>
            <div className="form-group">
              <TextField
                id="standard-basic"
                label="Password"
                variant="standard"
                type="password"
                required
                className="w-100"
              />
            </div>
            <a className="border-effect txt">Forget Password?</a>
            <div className="d-flex align-items-center mt-2 mb-2 ">
              <Button className="btn-blue col btn-lg btn-big">Sign In</Button>
              <Link to="/">
                <Button
                  className="btn-lg btn-big col ml-2"
                  variant="outlined"
                  onClick={() => context.setIsHeaderFooterShow(true)}
                >
                  Cancel
                </Button>
              </Link>
            </div>
            <p className="txt">
              Not Registered?{" "}
              <Link to="/SignUp" className="border-effect">
                Sign Up
              </Link>
            </p>
            <h6 className="mt-4 text-center font-weight-bold">
              Or continue wih social account
            </h6>
            <Button className="logiGoogle mt-2" variant="outlined">
              <img
                style={{ height: "50px", width: "50px" }}
                src={logo1}
                alt=""
              />
              Sign In With Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
