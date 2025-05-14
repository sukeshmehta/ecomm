import React, { useContext } from "react";
import "../ProductsItem/style.css";
import { Link } from "@mui/material";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MyContext } from "../../App";

const ProductsItem = () => {
  const context = useContext(MyContext);
  return (
    <div className="productItem shadow-lg rounded-md overflow-hidden border-1 !border-[rgba(0,0,0,0.1)] flex items-center ">
      <div className="group imgWrapper w-[25%]  overflow-hidden rounded-md relative ">
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
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !ronded-full bg-primary text-black hover:!bg-primary hover:text-white group ">
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
      <div className="info p-3 py-5 px-8 bg-[#f1f1f1] w-[75%]">
        <h3 className="test-[15px]  !font-[500]">
          <Link to="/" className="link transition-all">
            Leriya Fashion
          </Link>
        </h3>
        <h6 className="test-[18px] title mt-3 text-[rgba(0,0,0,0.9)] ">
          <Link to="/" className="link transition-all">
            Women Shirt | Long Shirt for Women | Shirt Tops for Women |
            Oversized Shirt for Women
          </Link>
        </h6>
        <p className="text-[14px] mb-3 ">
          Product Detail: This tops for women western wear includes trendy
          stylish floral print tunic tops for women.
        </p>
        <Rating name="size-medium" defaultValue={2} readOnly />
        <div className="flex items-center gap-4">
          <span className="oldPrice line-through">₹ 549</span>
          <span className="newPrice text-secondary font-bold">₹ 449</span>
        </div>

        <div className="mt-3">
          <Button className="btn-org flex gap-2">
            <MdOutlineShoppingCart className="text-[20px]" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;
