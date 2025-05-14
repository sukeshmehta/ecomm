import React from "react";
import { IoMdTime } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const BlogItem = () => {
  return (
    <div className="blogItem group">
      <div className="imgWrapper w-full relative  overflow-hidden rounded-md cursor-pointer ">
        <img
          src="https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/4f/d2/dc/1e/37/v1_E10/E1076N4V.jpg?w=800&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=ae8d712bee3f62fd3dc9aad46bb4cc5e5797cc37b49c9e83b4acdd099d590edb"
          alt="blog img"
          className="w-full transition-all group-hover:scale-105 group-hover:rotate-2 "
        />
        <span className="flex items-center justify-center absolute bottom-[15px] right-[15px] z-50 !bg-gray-500 rounded-md p-1 text-[12px]  text-white gap-1.5 position-starts">
          <IoMdTime className="text-[18px] " /> 8 April
        </span>
      </div>
      <div className="info py-4">
        <h2 className="text-[18px] font-[600]">Beautifull headphone</h2>
        <p className="text-[15px] font-[400]  ">
          Preview: Contemporary headphones in neon night lighting at a party and
          modern stereo music technology.
        </p>
        <Link className="link font-[500] flex items-center">
          Read more <MdKeyboardArrowRight />
        </Link>
      </div>
      <br /> <br /> <br /> <br /> <br /> <br />
    </div>
  );
};

export default BlogItem;
