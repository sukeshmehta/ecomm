import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MyContext } from "../../App";
import CircularProgress from "@mui/material/CircularProgress";
import { postData } from "../../utils/api";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const context = useContext(MyContext);
  const history = useNavigate();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };

  const forgotPassword = () => {
    if (formFields.email == "") {
      history("/verify");
      context.alertBox("success", "OTP Send");
    }
  };

  const validValue = Object.values(formFields).every((el) => el);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (formFields.email === "") {
      context.alertBox("error", "Please enter email id");
      setIsLoading(false);
      return false;
    }
    if (formFields.password === "") {
      context.alertBox("error", "Please enter password");
      return false;
    }

    postData("/api/user/login", formFields, { withCredentials: true }).then(
      (response) => {
        console.log(response);
        if (response?.error !== true) {
          setIsLoading(false);
          context.alertBox("success", response?.message);
          setFormFields({
            email: "",
            password: "",
          });

          localStorage.setItem("accesstoken", response?.data?.accesstoken);
          localStorage.setItem("refreshToken", response?.data?.refreshToken);

          context.setIsLogin(true);

          history("/");
        } else {
          context.alertBox("error", response?.message);
          setIsLoading(false);
        }
      }
    );
  };

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card !shadow-md w-[400px] m-auto rounded-md !bg-gray-300 p-5 px-10 ">
          <h3 className="text-[18px] text-center text-black ">
            Login to your account
          </h3>
          <form className="w-full mt-5" onSubmit={handleSubmit}>
            <div className="form-group w-full mb-5">
              <TextField
                type="email"
                id="email"
                name="email"
                value={formFields.email}
                disabled={isLoading === true ? true : false}
                label="Email-id"
                variant="outlined"
                className="w-full"
                onChange={onChangeInput}
              />
            </div>
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isShowPassword === false ? "password" : "text"}
                id="password"
                label="Password"
                variant="outlined"
                className="w-full"
                name="password"
                value={formFields.password}
                disabled={isLoading === true ? true : false}
                onChange={onChangeInput}
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
            <a
              className="link cursor-pointer font-[600] text-[14px]"
              onClick={forgotPassword}
            >
              Forget Password?
            </a>
            <div className="flex items-center w-full mt-3 mb-3">
              <Button
                type="submit"
                disabled={!validValue}
                className="btn-org btn-lg w-full flex gap-3"
              >
                {isLoading === true ? (
                  <CircularProgress color="inherit" />
                ) : (
                  "Login"
                )}
              </Button>
            </div>
            <p className="text-center">
              Not Registered?{" "}
              <Link
                to="/register"
                className="link text-[14px] font-[600] text-red-500"
              >
                Sign Up
              </Link>
            </p>
            <p className="text-center font-[500]">
              Or Continue with Social Account
            </p>
            <Button className="flex gap-3 w-full !bg-[#f1f1f1] !btn-lg !text-black">
              <FcGoogle className="text-[20px] " />
              Login with Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
