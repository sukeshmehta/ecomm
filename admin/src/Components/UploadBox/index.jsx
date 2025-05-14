import React from "react";
import { IoImagesOutline } from "react-icons/io5";

const UploadBox = (props) => {
  return (
    <div className="uploadBox p-3 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-200 cursor-pointer hover:bg-gray-300 flex items-center justify-center flex-col relative ">
      <IoImagesOutline className="text-[40px] opacity-35 pointer-events-none " />
      <h4 className="text-[14px] pointer-events-none">Upload Image</h4>
      <input
        type="file"
        multiple={props.multiple !== undefined ? props.multiple : false}
        className="absolute opacity-0 top-0 right-0 w-full h-full z-50"
      />
    </div>
  );
};

export default UploadBox;
