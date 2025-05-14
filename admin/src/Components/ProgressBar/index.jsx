import React from "react";

const ProgressBar = (props) => {
  return (
    <div className="w-[100px] h-auto overflow-hidden rounded-md bg-[#c7c3c3] ">
      <span
        className={`flex items-center w-[${props.value}%] h-[8px] ${
          props.type === "success" && "bg-green-500"
        } ${props.type === "error" && "bg-red-600"} ${
          props.type === "warning" && "bg-orange-300"
        }`}
      ></span>
    </div>
  );
};

export default ProgressBar;
