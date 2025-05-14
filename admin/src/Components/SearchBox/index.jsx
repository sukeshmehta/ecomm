import React from "react";
import { IoMdSearch } from "react-icons/io";

const SearchBox = () => {
  return (
    <div className="w-full h-auto  bg-gray-300 rounded-md relative overflow-hidden">
      <IoMdSearch className="absolute top-[12px] left-[10px] z-50 pointer-events-none opacity-50 " />

      <input
        type="text"
        className="w-full h-[40px] border border-[rgba(0,0,0,0.1)] bg-gray-300 focus:outline-none focus:border-[rgba(0,0,0,0.5)] rounded-md p-2 pl-8 text-[13px] "
        placeholder="search here"
      />
    </div>
  );
};

export default SearchBox;
