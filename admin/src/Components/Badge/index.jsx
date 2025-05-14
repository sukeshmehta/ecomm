import React from "react";

const Badge = (props) => {
  return (
    <span
      className={`inline-block  items-center rounded-full px-4 capitalize ${
        props.status === "pending" && "bg-red-800 text-white"
      } ${props.status === "confirm" && "bg-green-500 text-white"} ${
        props.status === "delivered" && "bg-blue-500 text-white"
      }`}
    >
      {props.status}
    </span>
  );
};

export default Badge;
