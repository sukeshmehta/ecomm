import React, { useContext } from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoIosReturnLeft } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";
import { TfiGift } from "react-icons/tfi";
import { MdSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoChatbubblesOutline } from "react-icons/io5";
import Button from "@mui/material/Button";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterestP } from "react-icons/fa";

import Drawer from "@mui/material/Drawer";
import CartPanel from "../CartPanel";
import { MyContext } from "../../App";
import { IoMdClose } from "react-icons/io";

const Footer = () => {
  const context = useContext(MyContext);

  return (
    <>
      <footer className="py-6 bg-white border-1 border-[rgba(0,0,0,0.3)]">
        <div className="container">
          <div className="flex items-center justify-center gap-2 pb-5 py-8 ">
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <LiaShippingFastSolid className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-3 " />
              <h3 className="text-[16px] font-[600] mt-3 ">Free Shipping</h3>
              <p className="text-[14px] font-[500]">For all order over ₹ 299</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <IoIosReturnLeft className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-3 " />
              <h3 className="text-[16px] font-[600] mt-3 ">
                30 Days Return Policy
              </h3>
              <p className="text-[14px] font-[500]">
                For an exchange and return
              </p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <IoWalletOutline className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-3 " />
              <h3 className="text-[16px] font-[600] mt-3 ">Secured Payment</h3>
              <p className="text-[14px] font-[500]">Payments card accepted</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <TfiGift className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-3 " />
              <h3 className="text-[16px] font-[600] mt-3 ">Special Gifts</h3>
              <p className="text-[14px] font-[500]">Our first product order</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <MdSupportAgent className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-3 " />
              <h3 className="text-[16px] font-[600] mt-3 ">Support 24/7</h3>
              <p className="text-[14px] font-[500]">
                Contact us anytime anywhere
              </p>
            </div>
          </div>

          <br />

          <hr />

          <div className="footer flex items-center pb-7">
            <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.2)] ">
              <h2 className="text-[20px] font-[600] mb-4">Contact us</h2>
              <p className="text-[13px] font-[400]">
                ClassyShop Mega Suoer Store <br /> 511-union Trade center India
              </p>
              <Link
                className="link text-[13px] "
                to="mailto:someone@example.com"
              >
                shophere@gmail.com
              </Link>
              <span className="text-[20px] font-[600] block w-full !text-primary mb-4 mt-3">
                (+91) 7513200000
              </span>

              <div className="flex items-center">
                <IoChatbubblesOutline className="text-[40px] " />
                <span className="text-[16px] font-[600] ">
                  Online Chat <br />
                  Get Expert Help
                </span>
              </div>
            </div>
            <div className="part2 w-[40%] flex items-center pl-8 ">
              <div className="part2_col2 w-[50%]">
                <h2 className="text-[20px] font-[600] mb-4">Products</h2>
                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-2 ">
                    <Link className="link" to="/">
                      Price Drop
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2 ">
                    <Link className="link" to="/">
                      New Product
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2 ">
                    <Link className="link" to="/">
                      Best Sell
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2 ">
                    <Link className="link" to="/">
                      Contact us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2 ">
                    <Link className="link" to="/">
                      Sitemap
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2 ">
                    <Link className="link" to="/">
                      Stores
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="part2 w-[40%] flex items-center ">
              <div className="part2_col2 w-[50%]">
                <h2 className="text-[20px] font-[600] mb-4">Our Company</h2>
                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-2 ">
                    <Link className="link" to="/">
                      Delevery
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2 ">
                    <Link className="link" to="/">
                      Legal notice
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2 ">
                    <Link className="link" to="/">
                      TErms & Conditions
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2 ">
                    <Link className="link" to="/">
                      About us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2 ">
                    <Link className="link" to="/">
                      Secure Payments
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2 ">
                    <Link className="link" to="/">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="part2_col2 w-[50%] flex-col pr-8 ">
              <h2 className="text-[20px] font-[600] mb-4 pt-7">
                Subscribe to Newsletter
              </h2>
              <p className="text-[13px]">
                Subscribe to our latest newsletter to get news about spacial
                discount
              </p>
              <form action="" className="mt-5">
                <input
                  type="text"
                  className="w-full h-[45px] border outline-none pl-4 pr-4 rounded-sm mb-4 focus:border-[rgba(0,0,0,0.3)]"
                  placeholder="Add your Email Address"
                />
                <Button className="btn-org">Subscribe</Button>
                <FormControlLabel
                  control={<Checkbox />}
                  label="I agree to the term & conditions and the privary policy"
                />
              </form>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip border-t border-[rgba(0,0,0,0.2)] py-3 bg-white">
        <div className="container flex items-center justify-between">
          <ul className="flex gap-3">
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[25px] h-[25px] rounded-full border border-[rgba(0,0,0,0.1) flex items-center justify-center] group hover:bg-primary"
              >
                <FaFacebook className="text-[45px] group transition-all  " />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[25px] h-[25px] rounded-full border border-[rgba(0,0,0,0.1) flex items-center justify-center] group hover:bg-primary"
              >
                <FaYoutube className="text-[45px] group transition-all  " />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[25px] h-[25px] rounded-full border border-[rgba(0,0,0,0.1) flex items-center justify-center] group hover:bg-primary"
              >
                <IoLogoInstagram className="text-[45px] group transition-all  " />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[25px] h-[25px] rounded-full border border-[rgba(0,0,0,0.1) flex items-center justify-center] group hover:bg-primary"
              >
                <FaPinterestP className="text-[45px] group transition-all  " />
              </Link>
            </li>
          </ul>

          <p className="text-[13px] text-center mb-0 ">
            {" "}
            &copy; 2025, ecommerce plateform
          </p>
          <div className="flex items-center">
            <img src="" alt="" />
          </div>
        </div>
      </div>

      {/* shopping cart panel */}

      <Drawer
        open={context.openCartPanel}
        onClose={context.toggleCartPanel(true)}
        anchor={"right"}
        className="cartPanel"
      >
        <div className="flex items-center justify-between py-3 px-4 gap-3 border-b border[rgba(0,0,0,0.1)] overflow-hidden">
          <h4>Shopping Cart 1</h4>
          <IoMdClose
            className="text-[20px] cursor-pointer"
            onClick={context.toggleCartPanel(false)}
          />
        </div>

        <CartPanel />
      </Drawer>
    </>
  );
};

export default Footer;
