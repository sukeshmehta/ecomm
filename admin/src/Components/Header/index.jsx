import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { FaRegUser } from "react-icons/fa";
import { LuBell } from "react-icons/lu";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 3,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const [anchorAcc, setAnchorAcc] = React.useState(null);
  const openMyAcc = Boolean(anchorAcc);
  const handleClickMyAcc = (event) => {
    setAnchorAcc(event.currentTarget);
  };
  const handleCloseMyAcc = () => {
    setAnchorAcc(null);
  };

  const context = useContext(MyContext);

  return (
    <header
      className={`w-full h-[auto] py-2   ${
        context.setIsSidebarOpen === true ? "pl-64" : "pl-5"
      } pr-7 shadow-md bg-[#fff] flex items-center justify-between transition-all`}
    >
      <div className="part1 pl-64 ">
        <Button
          className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full"
          onClick={() => context.setIsSidebarOpen(!context.isSidebarOpen)}
        >
          <RiMenu2Fill className="text-[22px] flex text-[rgba(0,0,0,0.6)] " />
        </Button>
      </div>
      <div className="part2 w-[40%] flex items-center justify-end gap-5 ">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <LuBell />
          </StyledBadge>
        </IconButton>

        {context.isLogin === true ? (
          <div className="relative">
            <div
              className="rounded-full w-[40px] h-[40px] overflow-hidden cursor-pointer"
              onClick={handleClickMyAcc}
            >
              <img
                src="/profile.jpeg"
                className="w-full h-full overflow-cover"
              />
            </div>
            <Menu
              anchorEl={anchorAcc}
              id="account-menu"
              open={openMyAcc}
              onClose={handleCloseMyAcc}
              onClick={handleCloseMyAcc}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleCloseMyAcc} className="!bg-white">
                <div className="flex items-center gap-3">
                  <div className="rounded-full w-[40px] h-[40px] overflow-hidden cursor-pointer">
                    <img
                      src="/profile.jpeg"
                      className="w-full h-full overflow-cover"
                    />
                  </div>
                  <div className="info">
                    <h3 className="text-[16px] font-[500] leading-5">
                      new user
                    </h3>
                    <p className="text-[13px] font-[400] opacity-70 ">
                      user@gmailcom
                    </p>
                  </div>
                </div>
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={handleCloseMyAcc}
                className="flex items-center gap-3"
              >
                <FaRegUser />
                <span className="text-[16px]">Profile</span>
              </MenuItem>
              <MenuItem
                onClick={handleCloseMyAcc}
                className="flex items-center gap-3"
              >
                <FaRegUser />
                <span className="text-[18px]">Logout</span>
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <Link to="/login">
            <Button className="btn-blue btn-sm !rounded-full !capitalize">
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
