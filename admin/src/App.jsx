import React from "react";
import "./App.css";
import { useEffect } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Button from "@mui/material/Button";
import Dashboard from "./Pages/Dashboard";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { createContext, useState } from "react";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Products from "./Pages/Products";

import Dialog from "@mui/material/Dialog";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { MdOutlineClose } from "react-icons/md";
import Slide from "@mui/material/Slide";
import AddProduct from "./Pages/Products/addProduct";
import HomeSliderBanner from "./Pages/HomeSliderBanners";
import AddHomeSlide from "./Pages/HomeSliderBanners/AddHomeSlide";
import CategoryList from "./Pages/Category";
import AddCategory from "./Pages/Category/addCotegory";
import SubCatList from "./Pages/Category/subCatList";
import AddSubCategory from "./Pages/Category/addSubCategory";
import Users from "./Pages/Users";
import Orders from "./Pages/Orders";
import ForgotPassword from "./Pages/ForgotPassword";
import VerifyAccount from "./Pages/VerifyAccount";
import ChangePassword from "./Pages/ChangePassword";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MyContext = createContext();

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isOpenFullScreenPanel, setIsOpenFullScreenPanel] = useState({
    open: false,
    model: "",
  });

  useEffect(() => {
    console.log("Sidebar status changed:", isSidebarOpen ? "Open" : "Closed");
  }, [isSidebarOpen]);

  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`overflow-hidden sidebarWrapper transition-all ${
                  isSidebarOpen === true ? "w-[18%]" : "w-[0px] opacity-0"
                } `}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 px-5 transition-all ${
                  isSidebarOpen === false ? "w-[100%]" : "w-[82%]"
                } `}
              >
                <Dashboard />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/login",
      exact: true,
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/forgot-password",
      exact: true,
      element: (
        <>
          <ForgotPassword />
        </>
      ),
    },
    {
      path: "/change-password",
      exact: true,
      element: (
        <>
          <ChangePassword />
        </>
      ),
    },
    {
      path: "/verify-account",
      exact: true,
      element: (
        <>
          <VerifyAccount />
        </>
      ),
    },
    {
      path: "/signup",
      exact: true,
      element: (
        <>
          <SignUp />
        </>
      ),
    },
    {
      path: "/products",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`overflow-hidden sidebarWrapper transition-all ${
                  isSidebarOpen === true ? "w-[18%]" : "w-[0px] opacity-0"
                } `}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 px-5 transition-all ${
                  isSidebarOpen === false ? "w-[100%]" : "w-[82%]"
                } `}
              >
                <Products />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/homeslider/list",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`overflow-hidden sidebarWrapper transition-all ${
                  isSidebarOpen === true ? "w-[18%]" : "w-[0px] opacity-0"
                } `}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 px-5 transition-all ${
                  isSidebarOpen === false ? "w-[100%]" : "w-[82%]"
                } `}
              >
                <HomeSliderBanner />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/category/list",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`overflow-hidden sidebarWrapper transition-all ${
                  isSidebarOpen === true ? "w-[18%]" : "w-[0px] opacity-0"
                } `}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 px-5 transition-all ${
                  isSidebarOpen === false ? "w-[100%]" : "w-[82%]"
                } `}
              >
                <CategoryList />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/users",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`overflow-hidden sidebarWrapper transition-all ${
                  isSidebarOpen === true ? "w-[18%]" : "w-[0px] opacity-0"
                } `}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 px-5 transition-all ${
                  isSidebarOpen === false ? "w-[100%]" : "w-[82%]"
                } `}
              >
                <Users />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/subcategory/list",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`overflow-hidden sidebarWrapper transition-all ${
                  isSidebarOpen === true ? "w-[18%]" : "w-[0px] opacity-0"
                } `}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 px-5 transition-all ${
                  isSidebarOpen === false ? "w-[100%]" : "w-[82%]"
                } `}
              >
                <SubCatList />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/orders",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`overflow-hidden sidebarWrapper transition-all ${
                  isSidebarOpen === true ? "w-[18%]" : "w-[0px] opacity-0"
                } `}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 px-5 transition-all ${
                  isSidebarOpen === false ? "w-[100%]" : "w-[82%]"
                } `}
              >
                <Orders />
              </div>
            </div>
          </section>
        </>
      ),
    },
  ]);

  const values = {
    isSidebarOpen,
    setIsSidebarOpen,
    isLogin,
    setIsLogin,
    isOpenFullScreenPanel,
    setIsOpenFullScreenPanel,
  };
  return (
    <>
      <MyContext.Provider value={values}>
        <RouterProvider router={router} />
        <Dialog
          fullScreen
          open={isOpenFullScreenPanel.open}
          onClose={() =>
            setIsOpenFullScreenPanel({
              open: false,
            })
          }
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() =>
                  setIsOpenFullScreenPanel({
                    open: false,
                  })
                }
                aria-label="close"
              >
                <MdOutlineClose className="text-gray-600" />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                <span className="text-gray-600">
                  {isOpenFullScreenPanel.model}
                </span>
              </Typography>
            </Toolbar>
          </AppBar>
          {isOpenFullScreenPanel?.model === "Add Product" && <AddProduct />}
          {isOpenFullScreenPanel?.model === "Add Home Slide" && (
            <AddHomeSlide />
          )}
          {isOpenFullScreenPanel?.model === "Add New Category" && (
            <AddCategory />
          )}
          {isOpenFullScreenPanel?.model === "Add New Sub Category" && (
            <AddSubCategory />
          )}
        </Dialog>
      </MyContext.Provider>
    </>
  );
}

export default App;
export { MyContext };
