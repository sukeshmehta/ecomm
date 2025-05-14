import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";

import SearchBox from "../../Components/SearchBox";
import { MyContext } from "../../App";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdCallEnd } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const columns = [
  { id: "userImg", label: "User Image", minWidth: 80 },
  { id: "userName", label: "User Name", minWidth: 170 },
  { id: "userEmail", label: "User Email", minWidth: 170 },
  { id: "userPh", label: "User Phone", minWidth: 170 },
  { id: "createdDate", label: "Created", minWidth: 170 },
];

const Users = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const context = useContext(MyContext);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <div className="card my-3 ">
        <div className="flex items-center justify-between py-1 px-1 bg-white w-full">
          <div className="flex items-center w-full px-5 justify-between">
            <div className="col w-[40%] ">
              <h2 className="text-[20px] font-[600] ">Users List</h2>
            </div>
            <div className="col w-[25%] ml-auto ">
              <SearchBox />
            </div>
          </div>
        </div>

        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead className="bg-[#f1f1f1]">
              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} className="!text-black" size="small" />
                </TableCell>

                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3 rounded-md"
                >
                  <Checkbox {...label} className="!text-black" size="small" />
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3 rounded-md"
                >
                  <div className="flex items-center gap-4 w-[70px]">
                    <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group">
                      <Link to="/product/123" className="cursor-pointer">
                        <img
                          src="https://mui.com/static/images/avatar/1.jpg"
                          className="w-full group-hover:scale-105 trransition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  Raju Rastogi
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  <span className="flex items-center gap-2">
                    <MdOutlineMarkEmailRead />
                    raju@gmail.com
                  </span>
                </TableCell>

                <TableCell className="px-6 py-3">
                  <span className="flex items-center gap-2">
                    <MdCallEnd />
                    +91 8577545736
                  </span>
                </TableCell>
                <TableCell className="px-6 py-3">
                  <span className="flex items-center gap-2">
                    <CiCalendarDate />
                    02-05-2025
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-0 py-3 rounded-md"
                >
                  <Checkbox {...label} className="!text-black" size="small" />
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-0 py-3 rounded-md"
                >
                  <div className="flex items-center gap-4 w-[70px]">
                    <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group">
                      <Link to="/product/123" className="cursor-pointer">
                        <img
                          src="https://mui.com/static/images/avatar/1.jpg"
                          className="w-full group-hover:scale-105 trransition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  Raju Rastogi
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  <span className="flex items-center gap-2">
                    <MdOutlineMarkEmailRead />
                    raju@gmail.com
                  </span>
                </TableCell>

                <TableCell className="px-6 py-3">
                  <span className="flex items-center gap-2">
                    <MdCallEnd />
                    +91 8577545736
                  </span>
                </TableCell>
                <TableCell className="px-6 py-3">
                  <span className="flex items-center gap-2">
                    <CiCalendarDate />
                    02-05-2025
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3 rounded-md"
                >
                  <Checkbox {...label} className="!text-black" size="small" />
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-0 py-3 rounded-md"
                >
                  <div className="flex items-center gap-4 w-[70px]">
                    <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group">
                      <Link to="/product/123" className="cursor-pointer">
                        <img
                          src="https://mui.com/static/images/avatar/1.jpg"
                          className="w-full group-hover:scale-105 trransition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  Raju Rastogi
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  <span className="flex items-center gap-2">
                    <MdOutlineMarkEmailRead />
                    raju@gmail.com
                  </span>
                </TableCell>

                <TableCell className="px-6 py-3">
                  <span className="flex items-center gap-2">
                    <MdCallEnd />
                    +91 8577545736
                  </span>
                </TableCell>
                <TableCell className="px-6 py-3">
                  <span className="flex items-center gap-2">
                    <CiCalendarDate />
                    02-05-2025
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-0 py-3 rounded-md"
                >
                  <Checkbox {...label} className="!text-black" size="small" />
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-0 py-3 rounded-md"
                >
                  <div className="flex items-center gap-4 w-[70px]">
                    <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group">
                      <Link to="/product/123" className="cursor-pointer">
                        <img
                          src="https://mui.com/static/images/avatar/1.jpg"
                          className="w-full group-hover:scale-105 trransition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  Raju Rastogi
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  <span className="flex items-center gap-2">
                    <MdOutlineMarkEmailRead />
                    raju@gmail.com
                  </span>
                </TableCell>

                <TableCell className="px-6 py-3">
                  <span className="flex items-center gap-2">
                    <MdCallEnd />
                    +91 8577545736
                  </span>
                </TableCell>
                <TableCell className="px-6 py-3">
                  <span className="flex items-center gap-2">
                    <CiCalendarDate />
                    02-05-2025
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-0 py-3 rounded-md"
                >
                  <Checkbox {...label} className="!text-black" size="small" />
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-0 py-3 rounded-md"
                >
                  <div className="flex items-center gap-4 w-[70px]">
                    <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group">
                      <Link to="/product/123" className="cursor-pointer">
                        <img
                          src="https://mui.com/static/images/avatar/1.jpg"
                          className="w-full group-hover:scale-105 trransition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  Raju Rastogi
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  <span className="flex items-center gap-2">
                    <MdOutlineMarkEmailRead />
                    raju@gmail.com
                  </span>
                </TableCell>

                <TableCell className="px-6 py-3">
                  <span className="flex items-center gap-2">
                    <MdCallEnd />
                    +91 8577545736
                  </span>
                </TableCell>
                <TableCell className="px-6 py-3">
                  <span className="flex items-center gap-2">
                    <CiCalendarDate />
                    02-05-2025
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-0 py-3 rounded-md"
                >
                  <Checkbox {...label} className="!text-black" size="small" />
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-0 py-3 rounded-md"
                >
                  <div className="flex items-center gap-4 w-[70px]">
                    <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group">
                      <Link to="/product/123" className="cursor-pointer">
                        <img
                          src="https://mui.com/static/images/avatar/1.jpg"
                          className="w-full group-hover:scale-105 trransition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  Raju Rastogi
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  <span className="flex items-center gap-2">
                    <MdOutlineMarkEmailRead />
                    raju@gmail.com
                  </span>
                </TableCell>

                <TableCell className="px-6 py-3">
                  <span className="flex items-center gap-2">
                    <MdCallEnd />
                    +91 8577545736
                  </span>
                </TableCell>
                <TableCell className="px-6 py-3">
                  <span className="flex items-center gap-2">
                    <CiCalendarDate />
                    02-05-2025
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-0 py-3 rounded-md"
                >
                  <Checkbox {...label} className="!text-black" size="small" />
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-0 py-3 rounded-md"
                >
                  <div className="flex items-center gap-4 w-[70px]">
                    <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group">
                      <Link to="/product/123" className="cursor-pointer">
                        <img
                          src="https://mui.com/static/images/avatar/1.jpg"
                          className="w-full group-hover:scale-105 trransition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  Raju Rastogi
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  <span className="flex items-center gap-2">
                    <MdOutlineMarkEmailRead />
                    raju@gmail.com
                  </span>
                </TableCell>

                <TableCell className="px-6 py-3">
                  <span className="flex items-center gap-2">
                    <MdCallEnd />
                    +91 8577545736
                  </span>
                </TableCell>
                <TableCell className="px-6 py-3">
                  <span className="flex items-center gap-2">
                    <CiCalendarDate />
                    02-05-2025
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <div className="flex items-center justify-end pt-5 pb-5">
          <Pagination count={10} component="div" rowsPerPage={rowsPerPage} />
        </div>
      </div>
    </>
  );
};

export default Users;
