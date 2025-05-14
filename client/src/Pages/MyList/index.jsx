import React from "react";

import MyListItems from "./myListItems";
import AccountSidebar from "../../components/AccountSidebar";

const MyList = () => {
  return (
    <section className=" section py-10 w-full">
      <div className="container flex w-[80%] max-w-[80%]  gap-1">
        <div className="col1 w-[20%] flex items-start justify-start relative">
          <AccountSidebar />
        </div>
        <div className="col2 w-[70%]">
          <div className="shadow-md rounded-md  bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>My List</h2>
              <p className="mt-0">
                There are <span className="font-bold text-red-400">2</span>{" "}
                product in your My List
              </p>
            </div>

            <MyListItems />
            <MyListItems />
            <MyListItems />
            <MyListItems />
            <MyListItems />
            <MyListItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyList;
