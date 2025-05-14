import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { CgLogIn } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import Checkbox from "@mui/material/Checkbox";
import { FormControl, FormControlLabel } from "@mui/material";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";

const ForgotPassword = () => {
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  function handleClickGoogle() {
    setLoadingGoogle(true);
  }
  const [loadingFb, setLoadingFb] = useState(false);
  function handleClickFb() {
    setLoadingFb(true);
  }
  return (
    <section className="w-full h-[100vh] !bg-[rgba(83,58,58,0.3)] ">
      <header className="w-full fixed top-0 left-0 px-4 py-2 flex items-center justify-between z-50">
        <Link to="/">
          <img
            src="https://isomorphic-furyroad.vercel.app/_next/static/media/logo.a795e14a.svg"
            className="w-[200px] "
          />
        </Link>
        <div className="flex items-center gap-2">
          <NavLink to="/login" exact={true} activeClassName="isActive">
            <Button className="!rounded-full !text-[#fff] !capitalize px-5 !bg-[rgba(0,0,0,0.4)] flex gap-2">
              <CgLogIn className="text-[18px]" />
              Login
            </Button>
          </NavLink>
          <NavLink to="/signup" exact={true} activeClassName="isActive">
            <Button className="!rounded-full !text-[#fff] !capitalize px-5 !bg-[rgba(0,0,0,0.4)] flex gap-2">
              <FaUser className="text-[15px]" />
              Sign Up
            </Button>
          </NavLink>
        </div>
      </header>
      <img
        src="/login6.jpg"
        className="w-full fixed top-0 left-0 opacity-10 pointer-events-none bg-cover bg-center"
      />
      <div className="loginBox card w-[600px] h-[auto] pb-25 mx-auto mt-15 relative z-50">
        <div className="text-center">
          <img src="logo1.svg" className="m-auto" />
        </div>
        <h1 className="text-center text-[35px] font-[800] ">
          Having trouble to Sign In? <br />
          Reset your password ...
        </h1>

        <br />

        <br />

        <form className="w-full px-8 mt-3">
          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">Email</h4>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.7)] rounded-md font-[600] focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
            />
          </div>
          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">Password</h4>
            <div className="relative w-full ">
              <input
                type={isPasswordShow === false ? "password" : "text"}
                placeholder="Enter Your Old Password"
                className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.7)] rounded-md font-[600] focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
              />
              <Button
                className="!absolute top-[5px] right-[10px] z-50 !rounded-full !w-[40px] !h-[40px] !min-w-[40px] !text-gray-600 "
                onClick={() => setIsPasswordShow(!isPasswordShow)}
              >
                {isPasswordShow === false ? (
                  <FaEye className="text-[18px]" />
                ) : (
                  <FaEyeSlash className="text-[18px]" />
                )}
              </Button>
            </div>
          </div>
          <div className="form-group mb-4 w-full flex items-center justify-between">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember Me"
            />
            <Link
              to="/forgot-password"
              className="!text-[#1976D2] font-[600] text-[15px] hover:!text-black"
            >
              Forgot-Password
            </Link>
          </div>
          <Button className="btn-blue btn-lg w-full !capitalize">
            Reset Password
          </Button>
          <br />
          <br />
          <div className="flex items-center justify-center gap-4">
            <span>Don't want to reset?</span>
            <Link
              to="/forgot-password"
              className="!text-[#1976D2] font-[600] text-[15px] hover:!text-black"
            >
              Sign In?
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
