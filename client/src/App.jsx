import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import { createContext, useState } from "react";

import "./App.css";
import ProductListing from "./Pages/ProductListing";
import ProductDetails from "./Pages/ProductDetails";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";

import ProductZoom from "./components/ProductZoom";
import { IoMdClose } from "react-icons/io";
import { ProductDetailsComponent } from "./components/ProductDetails";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import CartPage from "./Pages/Cart";
import Verify from "./Pages/Verify";
import ForgotPassword from "./Pages/ForgotPassword";

import toast, { Toaster } from "react-hot-toast";
import Checkout from "./Pages/Checkout";
import MyAccount from "./Pages/MyAccount";
import MyList from "./Pages/MyList";
import Orders from "./Pages/Orders";
import { fetchDataFromApi } from "./utils/api";

const MyContext = createContext();

function App() {
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [maxWidth, setMaxWidth] = React.useState("lg");
  const [fullWidth, setFullWidth] = React.useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const [userData, setUserData] = useState(null);

  const apiUrl = import.meta.env.VITE_API_URL;

  const [openCartPanel, setOpenCartPanel] = useState(false);

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const handleClickOpenProductDetailsModal = () => {
    setOpenProductDetailsModal(true);
  };

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem("accesstoken");

    if (token !== undefined && token !== null && token !== "") {
      setIsLogin(true);

      fetchDataFromApi(`/api/user/user-details?token=${token}`).then((res) => {
        setUserData(res.data);
      });
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  const alertBox = (type, msg) => {
    if (type === "success") {
      toast.success(msg);
    }
    if (type === "error") {
      toast.error(msg);
    }
  };

  const values = {
    setOpenProductDetailsModal,
    setOpenCartPanel,
    toggleCartPanel,
    openCartPanel,
    isLogin,
    setIsLogin,
    alertBox,
    userData,
    setUserData,
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={"/"} exact={true} element={<Home />} />
            <Route
              path={"/productlisting"}
              exact={true}
              element={<ProductListing />}
            />
            <Route
              path={"/product/:id"}
              exact={true}
              element={<ProductDetails />}
            />
            <Route path={"/login"} exact={true} element={<Login />} />
            <Route path={"/register"} exact={true} element={<Register />} />
            <Route path={"/cart"} exact={true} element={<CartPage />} />
            <Route path={"/verify"} exact={true} element={<Verify />} />
            <Route path={"/checkout"} exact={true} element={<Checkout />} />
            <Route path={"/my-account"} exact={true} element={<MyAccount />} />
            <Route path={"/my-list"} exact={true} element={<MyList />} />
            <Route path={"/my-order"} exact={true} element={<Orders />} />
            <Route
              path={"/forgot-password"}
              exact={true}
              element={<ForgotPassword />}
            />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

      <Dialog
        open={openProductDetailsModal}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleClickOpenProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailsModal"
      >
        <DialogActions>
          <div className="flex items-center w-full productDetailsModalContainer relative">
            <Button
              className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] !absolute top-[15px] right-[15px] !bg-[#f1f1f1] "
              onClick={handleCloseProductDetailsModal}
            >
              <IoMdClose className="text-[20px]" />
            </Button>
            <div className="col1 w-[40%]">
              <ProductZoom />
            </div>
            <div className="col2 w-[60%] py-8 px-8 pr-16 productContent">
              <ProductDetailsComponent />
            </div>
          </div>
        </DialogActions>
      </Dialog>

      <Toaster />
    </>
  );
}

export default App;
export { MyContext };
