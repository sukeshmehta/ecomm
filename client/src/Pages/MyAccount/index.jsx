import React from "react";

import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import AccountSidebar from "../../components/AccountSidebar";

const MyAccount = () => {
  return (
    <section className="py-10 w-full ">
      <div className="container flex w-[80%] max-w-[80%] gap-1">
        <div className="col1 w-[20%] flex items-start justify-start relative">
          <AccountSidebar />
        </div>
        <div className="col2 w-[80%] relative">
          <div className="card bg-white p-5 shadow-md rounded-md">
            <h2 className="pb-3">My Profile</h2>
            <hr />

            <form action="" className="mt-5">
              <div className="flex items-cetner gap-5">
                <div className="w-[50%]">
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="w-[50%]">
                  <TextField
                    label="Email"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex items-cetner mt-4 gap-5">
                <div className="w-[50%]">
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>
              <br />

              <div className="flex items-cetner gap-4 ">
                <Button className="btn-org btn-lg w-[100px] !capitalize">
                  Save
                </Button>
                <Button className="btn-org btn-lg btn-border w-[100px] !capitalize">
                  Cancle
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MyAccount;
