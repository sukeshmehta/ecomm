import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { BsFillHandbagFill } from "react-icons/bs";
import { LuLogOut } from "react-icons/lu";
import { NavLink } from "react-router";
import { MdCloudUpload } from "react-icons/md";
import Button from "@mui/material/Button";

const AccountSidebar = () => {
  return (
    <div className="card bg-white shadow-md rounded-md sticky top-[10px] ">
      <div className="w-full p-5 flex items-center justify-center flex-col">
        <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group">
          <img src="/user.jpg" className="w-full h-full object-cover" />
          <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.6)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
            <MdCloudUpload className="text-[#fff] text-[25px]" />
            <input
              type="file"
              className="absolute top-0 left-0 w-full h-full opacity-0"
            />
          </div>
        </div>
        <h3>AI generated Image</h3>
        <h6 className="text-[13px] font-[500]">sukesh@gmail.com</h6>
      </div>

      <ul className="list-none pb-5 bg-[#f1f1f1] myAccountTabs">
        <li className="w-full">
          <NavLink to="/my-account" exact={true} activeClassName="isActive">
            <Button className="w-full !text-left !py-2 !px-5 !justify-start !rounded-none flex items-center gap-2 !capitalize !text-[rgba(0,0,0,0.8)] ">
              <FaRegUser className="text-[17px]" />
              User Profile
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink to="/my-list" exact={true} activeClassName="isActive">
            <Button className="w-full !text-left !py-2 !px-5 !justify-start !rounded-none flex items-center gap-2 !capitalize !text-[rgba(0,0,0,0.8)] ">
              <FaRegHeart className="text-[17px]" />
              My List
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink to="/my-order" exact={true} activeClassName="isActive">
            <Button className="w-full !text-left !py-2 !px-5 !justify-start !rounded-none flex items-center gap-2 !capitalize !text-[rgba(0,0,0,0.8)] ">
              <BsFillHandbagFill className="text-[17px]" />
              My Orders
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <Button className="w-full !text-left !py-2 !px-5 !justify-start !rounded-none flex items-center gap-2 !capitalize !text-[rgba(0,0,0,0.8)] ">
            <LuLogOut className="text-[18px]" />
            Logout
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default AccountSidebar;
