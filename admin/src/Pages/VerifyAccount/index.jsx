import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { CgLogIn } from "react-icons/cg";
import { FaUser } from "react-icons/fa";

import OtpBox from "../../Components/OtpBox";

const VerifyAccount = () => {
  const [otp, setOtp] = useState("");
  const handleOtpChange = (value) => {
    setOtp(value);
  };

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
          <img src="/security.png" className="w-[100px] m-auto" />
        </div>
        <h1 className="text-center text-[35px] font-[800] ">
          Welcome Back! <br />
          Please verify your Email...
        </h1>
        <br />
        <p className="text-center text-[15px]">
          OTP sent to{" "}
          <span className="text-blue-700 font-bold"> raju@gmail.com</span>
        </p>
        <br />
        <div className="flex items-center text-center justify-center flex-col">
          <OtpBox length={6} onChange={handleOtpChange} />
        </div>
        <br />
        <div className="w-[300px] m-auto">
          <Button className="btn-blue w-full">Verify OTP</Button>
        </div>
      </div>
    </section>
  );
};

export default VerifyAccount;
