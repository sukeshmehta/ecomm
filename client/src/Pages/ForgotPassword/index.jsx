import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MyContext } from "../../App";

const ForgotPassword = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPassword2, setIsShowPassword2] = useState(false);

  const context = useContext(MyContext);
  const history = useNavigate();

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card !shadow-md w-[400px] m-auto rounded-md !bg-gray-300 p-5 px-10 ">
          <h3 className="text-[18px] text-center text-black ">
            Forgot Password
          </h3>
          <form className="w-full mt-5">
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isShowPassword === false ? "password" : "text"}
                id="password"
                label="New Password"
                variant="outlined"
                className="w-full"
                name="name"
              />
              <Button
                className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black opacity-75 "
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword === false ? (
                  <FaEye className="text-[20px]" />
                ) : (
                  <FaEyeSlash className="text-[20px]" />
                )}
              </Button>
            </div>
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isShowPassword2 === false ? "password" : "text"}
                id="confirm_password"
                label="Confirm Password"
                variant="outlined"
                className="w-full"
                name="password"
              />
              <Button
                className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black opacity-75 "
                onClick={() => setIsShowPassword2(!isShowPassword)}
              >
                {isShowPassword2 === false ? (
                  <FaEye className="text-[20px]" />
                ) : (
                  <FaEyeSlash className="text-[20px]" />
                )}
              </Button>
            </div>

            <div className="flex items-center w-full mt-3 mb-3">
              <Button className="btn-org btn-lg w-full">Change Password</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
