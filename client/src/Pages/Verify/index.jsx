import React, { useContext, useEffect, useState } from "react";
import OtpBox from "../../components/OtpBox";
import Button from "@mui/material/Button";
import { postData } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const context = useContext(MyContext);
  const history = useNavigate();

  const verifyOTP = (e) => {
    e.preventDefault();
    postData("/api/user/verifyEmail", {
      email: localStorage.getItem("userEmail"),
      otp: otp,
    }).then((res) => {
      if (res?.error === false) {
        context.alertBox("success", res?.message);
        localStorage.removeItem("userEmail");
        history("/login");
      } else {
        context.alertBox("error", res?.message);
      }
    });
  };

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card !shadow-md w-[400px] m-auto rounded-md !bg-gray-300 p-5 px-10 ">
          <div className="text-center flex items-center justify-center">
            <img src="/security.png" alt="" width={80} />
          </div>
          <h3 className="text-[18px] text-center text-black mt-4 mb-1">
            Verify OTP
          </h3>

          <p className="text-center mt-0 mb-4">
            OTP sent to{" "}
            <span className="text-red-400 font-bold">
              {localStorage.getItem("userEmail")}
            </span>
          </p>

          <form action="" onSubmit={verifyOTP}>
            <OtpBox length={6} onChange={handleOtpChange} />

            <div className="flex items-center justify-center mt-5 px-3">
              <Button type="submit" className="w-full btn-org btn-lg ">
                Verify OTP
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Verify;
