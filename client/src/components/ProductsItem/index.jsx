import React, { useContext } from "react";
import "../ProductsItem/style.css";
import { Link } from "@mui/material";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import { MyContext } from "../../App";

const ProductsItem = () => {
  const context = useContext(MyContext);

  return (
    <div className="productItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.9)] relative items-center ">
      <div className="group imgWrapper w-[100%]  overflow-hidden rounded-md relative ">
        <Link>
          <div className="img h-[250px] overflow-hidden">
            <img
              src="https://m.media-amazon.com/images/I/816+BniqhkL._AC_UL320_.jpg"
              alt=""
              className="w-full"
            />
            <img
              src="https://m.media-amazon.com/images/I/81IfzcXkrcL._SY741_.jpg"
              alt=""
              className="w-full transition-all duration-500 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-120 "
            />
          </div>
        </Link>
        <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-black p-2 text-[12px]  ">
          10%
        </span>
        <div className="actions absolute top-[-200px] right-[10px] z-50 flex items-center gap-4 flex-col w-[50px] transition-all duration-700 group-hover:top-[15px] ">
          <Button
            className="!w-[35px] !h-[35px] !min-w-[35px] !ronded-full bg-primary text-black hover:!bg-primary hover:text-white group "
            onClick={() => context.setOpenProductDetailsModal(true)}
          >
            <MdZoomOutMap />
          </Button>

          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !ronded-full bg-primary text-black hover:!bg-primary hover:text-white group ">
            <FaRegHeart />
          </Button>

          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !ronded-full bg-primary text-black hover:!bg-primary hover:text-white group ">
            <IoGitCompareOutline />
          </Button>
        </div>
      </div>
      <div className="info p-3 py-5 bg-[#f1f1f1] shadow-md h-[190px] mb-1">
        <h3 className="test-[16px] !font-[500]">
          <Link to="/" className="link">
            Leriya Fashion
          </Link>
        </h3>
        <h6 className="test-[14px] mt-1 text-[rgba(0,0,0,0.9)] ">
          <Link to="/" className="link transition-all">
            Women Shirt | Long Shirt for Women | Shirt Tops for Women |
            Oversized Shirt for Women
          </Link>
        </h6>
        <Rating name="size-medium" defaultValue={2} readOnly />
        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
            ₹ 549
          </span>
          <span className="newPrice text-red-400 font-bold">₹ 449</span>
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;
