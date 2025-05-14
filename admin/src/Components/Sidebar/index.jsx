import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { BiSolidDashboard } from "react-icons/bi";
import { FaImage } from "react-icons/fa6";
import { LuUsersRound } from "react-icons/lu";
import { TbBrandProducthunt } from "react-icons/tb";
import { MdOutlineCategory } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";
import { Collapse } from "react-collapse";
import { MyContext } from "../../App";

const Sidebar = () => {
  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const isOpenSubMenu = (index) => {
    if (subMenuIndex === index) {
      setSubMenuIndex(null);
    } else {
      setSubMenuIndex(index);
    }
  };

  const context = useContext(MyContext);
  return (
    <>
      <div
        className={`sidebar overflow-hidden fixed top-0 left-0 bg-[#fff] w-[18%] h-full border-r border-[rgba(0,0,0,0.3)] py-2 px-4 w-[${
          context.isSidebarOpen === true ? "w-[18%]" : "w-[0px]"
        }]`}
      >
        <div className="py-2 w-full">
          <Link to="/">
            <img
              src="https://isomorphic-furyroad.vercel.app/_next/static/media/logo.a795e14a.svg"
              className="w-[200px]"
            />
          </Link>
        </div>
        <ul className="mt-4">
          <li>
            <Link to="/">
              <Button className="w-full !capitalize flex !justify-start gap-3 text-[14px] !text-[rgba(0,0,0,0.9)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1] ">
                <BiSolidDashboard className="text-[20px]" />
                <span>Dashboard</span>
              </Button>
            </Link>
          </li>
          <li>
            <Button
              className="w-full !capitalize flex items-center !justify-start gap-3 text-[14px] !text-[rgba(0,0,0,0.9)] !font-[500] !py-2 hover:!bg-[#f1f1f1] "
              onClick={() => isOpenSubMenu(1)}
            >
              <FaImage className="text-[20px]" />
              <span>Home Slides</span>
              <span className="ml-auto w-[30px] h-[30px] flex items-center">
                <FaAngleDown
                  className={`transition-all ${
                    subMenuIndex === 1 ? "rotate-180" : ""
                  }`}
                />
              </span>
            </Button>

            <Collapse isOpened={subMenuIndex === 1 ? true : false}>
              <ul className="w-full">
                <li className="w-full">
                  <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[400] !pl-9">
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "></span>
                    Add Home Banner List
                  </Button>
                </li>
                <li className="w-full">
                  <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[400] !pl-9 ">
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "></span>
                    Add Home Banner Slider
                  </Button>
                </li>
              </ul>
            </Collapse>
          </li>
          <li>
            <Link to="/users">
              <Button className="w-full !capitalize flex !justify-start gap-3 text-[14px] !text-[rgba(0,0,0,0.9)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
                <LuUsersRound className="text-[20px]" />
                <span>Users</span>
              </Button>
            </Link>
          </li>
          <li>
            <Button
              className="w-full !capitalize flex items-center !justify-start gap-3 text-[14px] !text-[rgba(0,0,0,0.9)] !font-[500] !py-2 hover:!bg-[#f1f1f1] "
              onClick={() => isOpenSubMenu(3)}
            >
              <TbBrandProducthunt className="text-[20px]" />
              <span>Products</span>
              <span className="ml-auto w-[30px] h-[30px] flex items-center">
                <FaAngleDown
                  className={`transition-all ${
                    subMenuIndex === 3 ? "rotate-180" : ""
                  }`}
                />
              </span>
            </Button>

            <Collapse isOpened={subMenuIndex === 3 ? true : false}>
              <ul className="w-full">
                <li className="w-full">
                  <Link to="/products">
                    <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[400] !pl-9">
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "></span>
                      Product List
                    </Button>
                  </Link>
                </li>
                <li className="w-full">
                  <Button
                    className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[400] !pl-9 "
                    onClick={() =>
                      context.setIsOpenFullScreenPanel({
                        open: true,
                        model: "Add Product",
                      })
                    }
                  >
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "></span>
                    Product Upload
                  </Button>
                </li>
              </ul>
            </Collapse>
          </li>
          <li>
            <Button
              className="w-full !capitalize flex items-center !justify-start gap-3 text-[14px] !text-[rgba(0,0,0,0.9)] !font-[500] !py-2 hover:!bg-[#f1f1f1] "
              onClick={() => isOpenSubMenu(4)}
            >
              <MdOutlineCategory className="text-[20px]" />
              <span>Category</span>
              <span className="ml-auto w-[30px] h-[30px] flex items-center">
                <FaAngleDown
                  className={`transition-all ${
                    subMenuIndex === 4 ? "rotate-180" : ""
                  }`}
                />
              </span>
            </Button>
            <Collapse isOpened={subMenuIndex === 4 ? true : false}>
              <ul className="w-full">
                <li className="w-full">
                  <Link to="/category/list">
                    <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[400] !pl-9">
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "></span>
                      Category List
                    </Button>
                  </Link>
                </li>
                <li className="w-full">
                  <Button
                    className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[400] !pl-9 "
                    onClick={() =>
                      context.setIsOpenFullScreenPanel({
                        open: true,
                        model: "Add New Category",
                      })
                    }
                  >
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "></span>
                    Category Slider
                  </Button>
                </li>
                <li className="w-full">
                  <Link to="/category/list">
                    <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[400] !pl-9 ">
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "></span>
                      Sub Category List
                    </Button>
                  </Link>
                </li>
                <li className="w-full">
                  <Button
                    className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[400] !pl-9 "
                    onClick={() =>
                      context.setIsOpenFullScreenPanel({
                        open: true,
                        model: "Add New Sub Category",
                      })
                    }
                  >
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "></span>
                    Add a sub Category
                  </Button>
                </li>
              </ul>
            </Collapse>
          </li>
          <li>
            <Link to="/orders">
              <Button
                className="w-full !capitalize flex items-center !justify-start gap-3 text-[14px] !text-[rgba(0,0,0,0.9)] !font-[500] !py-2 hover:!bg-[#f1f1f1] "
                onClick={() => isOpenSubMenu(5)}
              >
                <FaImage className="text-[20px]" />
                <span>Orders</span>
              </Button>
            </Link>
          </li>
          <li>
            <Button className="w-full !capitalize flex !justify-start gap-3 text-[14px] !text-[rgba(0,0,0,0.9)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
              <LuLogOut className="text-[20px]" />
              <span>Logout</span>
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
