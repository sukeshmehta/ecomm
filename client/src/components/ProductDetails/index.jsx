import React, { useState } from "react";
import { QtyBox } from "../QtyBox";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

export const ProductDetailsComponent = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);
  return (
    <>
      <h1 className="text-[25px] font-[600] mb-2">
        rytras Women's Embroidered Regular Top
      </h1>
      <div className="flex items-center gap-3">
        <span className="text-gray-500 text-[20px]">
          Brand: <span className="font-[500] text-black">rytras</span>
        </span>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />
        <span className="text-[20px] cursor-pointer">Review (5)</span>
      </div>
      <div className="flex items-center gap-4 mt-4 text-[18px]">
        <span className="oldPrice line-through">₹ 549</span>
        <span className="newPrice text-secondary font-bold">₹ 449</span>
        <span className="text-[14px] ">
          Available in Stock :{" "}
          <span className="text-green-600 text-[14px] font-bold">
            150 Items
          </span>
        </span>
      </div>
      <p className="mt-3 pr-10 mb-5">
        this is a most beautyful dress, you can wear for party, birthday, turing
        and for daily causial dress
      </p>
      <div className="flex items-center gap-3">
        <span className="text-[16px]">Size:</span>
        <div className="flex items-center gap-1 actions">
          {/* size button section */}

          <Button
            className={`${
              productActionIndex === 0 ? "!bg-orange-400 !text-black" : ""
            }`}
            onClick={() => setProductActionIndex(0)}
          >
            S
          </Button>
          <Button
            className={`${
              productActionIndex === 1 ? "!bg-orange-400 !text-black" : ""
            }`}
            onClick={() => setProductActionIndex(1)}
          >
            M
          </Button>
          <Button
            className={`${
              productActionIndex === 2 ? "!bg-orange-400 !text-black" : ""
            }`}
            onClick={() => setProductActionIndex(2)}
          >
            L
          </Button>
          <Button
            className={`${
              productActionIndex === 3 ? "!bg-orange-400 !text-black" : ""
            }`}
            onClick={() => setProductActionIndex(3)}
          >
            XL
          </Button>
        </div>
      </div>
      <p className="text-[14px] mt-5 mb-2 text-[#000] ">
        Free and Fast Shipping
      </p>
      <div className="flex items-center mt-4 gap-4 py-4">
        <div className="qtyBoxWrapper w-[70px] ">
          <QtyBox />
        </div>
        <Button className="btn-org flex gap-2 ">
          <MdOutlineShoppingCart className="text-[22px]" />
          Add to Cart
        </Button>
      </div>
      {/* add to wishlish */}
      <div className="flex items-center gap-4 mt-4">
        <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500] ">
          <FaRegHeart className="text-[18px] " />
          Add to Wishlist
        </span>
        <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500] ">
          <IoGitCompareOutline className="text-[18px] " />
          Add to Compare
        </span>
      </div>
    </>
  );
};
