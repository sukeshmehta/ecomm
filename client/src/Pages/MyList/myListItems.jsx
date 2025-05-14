import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import Button from "@mui/material/Button";

import Rating from "@mui/material/Rating";

const MyListItems = (props) => {
  return (
    <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
      <div className="img w-[15%]  rounded-md overflow-hidden">
        <Link to="/product/123" className="group ">
          <img
            src="https://m.media-amazon.com/images/I/61C0NOPu1tL._SY741_.jpg"
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>
      <div className="info w-[85%] relative">
        <IoMdClose className="cursor-pointer absolute top-[0px] right-[10px] text-[22px] link transition-all" />
        <span className="text-[13px]">Brand: rytras</span>
        <h3 className="text-[16px]">
          <Link className="link">rytras Women's Embroidered Regular Top</Link>
        </h3>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-4 mt-2 mb-2">
          <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
            ₹ 549
          </span>
          <span className="newPrice text-red-400 text-[14px] font-bold">
            ₹ 449
          </span>
        </div>

        <Button className="btn-org btn-sm">Add to Cart</Button>
      </div>
    </div>
  );
};

export default MyListItems;
