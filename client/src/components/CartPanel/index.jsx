import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const CartPanel = () => {
  return (
    <>
      <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden py-3 px-4">
        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
            <Link to="/product/123" className="block group">
              <img
                src="https://m.media-amazon.com/images/I/61C0NOPu1tL._SY741_.jpg"
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="info w-[75%] relative">
            <h4 className="text-[14px] font-[500] ">
              <Link to="/product/123" className="link transition-all">
                {" "}
                rytras Women's Embroidered Regular Top
              </Link>
            </h4>
            <p className="flex items-center gap-5">
              <span className="">
                Qty : <span>2</span>
              </span>
              <span className="text-red-400 font-bold">
                Price : &#8377; 499
              </span>
            </p>
            <MdOutlineDeleteOutline className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
            <Link to="/product/123" className="block group">
              <img
                src="https://m.media-amazon.com/images/I/61C0NOPu1tL._SY741_.jpg"
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="info w-[75%] relative">
            <h4 className="text-[14px] font-[500] ">
              <Link to="/product/123" className="link transition-all">
                {" "}
                rytras Women's Embroidered Regular Top
              </Link>
            </h4>
            <p className="flex items-center gap-5">
              <span className="">
                Qty : <span>2</span>
              </span>
              <span className="text-red-400 font-bold">
                Price : &#8377; 499
              </span>
            </p>
            <MdOutlineDeleteOutline className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
            <Link to="/product/123" className="block group">
              <img
                src="https://m.media-amazon.com/images/I/61C0NOPu1tL._SY741_.jpg"
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="info w-[75%] relative">
            <h4 className="text-[14px] font-[500] ">
              <Link to="/product/123" className="link transition-all">
                {" "}
                rytras Women's Embroidered Regular Top
              </Link>
            </h4>
            <p className="flex items-center gap-5">
              <span className="">
                Qty : <span>2</span>
              </span>
              <span className="text-red-400 font-bold">
                Price : &#8377; 499
              </span>
            </p>
            <MdOutlineDeleteOutline className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
            <Link to="/product/123" className="block group">
              <img
                src="https://m.media-amazon.com/images/I/61C0NOPu1tL._SY741_.jpg"
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="info w-[75%] relative">
            <h4 className="text-[14px] font-[500] ">
              <Link to="/product/123" className="link transition-all">
                {" "}
                rytras Women's Embroidered Regular Top
              </Link>
            </h4>
            <p className="flex items-center gap-5">
              <span className="">
                Qty : <span>2</span>
              </span>
              <span className="text-red-400 font-bold">
                Price : &#8377; 499
              </span>
            </p>
            <MdOutlineDeleteOutline className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
            <Link to="/product/123" className="block group">
              <img
                src="https://m.media-amazon.com/images/I/61C0NOPu1tL._SY741_.jpg"
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="info w-[75%] relative">
            <h4 className="text-[14px] font-[500] ">
              <Link to="/product/123" className="link transition-all">
                {" "}
                rytras Women's Embroidered Regular Top
              </Link>
            </h4>
            <p className="flex items-center gap-5">
              <span className="">
                Qty : <span>2</span>
              </span>
              <span className="text-red-400 font-bold">
                Price : &#8377; 499
              </span>
            </p>
            <MdOutlineDeleteOutline className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
            <Link to="/product/123" className="block group">
              <img
                src="https://m.media-amazon.com/images/I/61C0NOPu1tL._SY741_.jpg"
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="info w-[75%] relative">
            <h4 className="text-[14px] font-[500] ">
              <Link to="/product/123" className="link transition-all">
                {" "}
                rytras Women's Embroidered Regular Top
              </Link>
            </h4>
            <p className="flex items-center gap-5">
              <span className="">
                Qty : <span>2</span>
              </span>
              <span className="text-red-400 font-bold">
                Price : &#8377; 499
              </span>
            </p>
            <MdOutlineDeleteOutline className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
      </div>

      <br />
      <div className="bottomSec absolute bottom-[10px] left-[10px] w-full overflow-hidden pr-5">
        <div className="bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full ">
            <span className="text-[14px] font-[600]"> item</span>
            <span className="text-red-400 font-bold">&#8377; 449</span>
          </div>
          <div className="flex items-center justify-between w-full ">
            <span className="text-[14px] font-[600]"> Shipping</span>
            <span className="text-red-400 font-bold">&#8377; 49</span>
          </div>
        </div>

        <div className="bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full ">
            <span className="text-[14px] font-[600]"> Total Price</span>
            <span className="text-red-400 font-bold">&#8377; 498</span>
          </div>
          <div className="flex items-center justify-between w-full gap-5">
            <Link to="/cart" className="w-[50%] d-block">
              <Button className="btn-org btn-lg w-full ">View Cart</Button>
            </Link>
            <Link to="/checkout" className="w-[50%] d-block">
              <Button className="btn-org btn-border btn-lg w-full">
                CheckOut
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPanel;
