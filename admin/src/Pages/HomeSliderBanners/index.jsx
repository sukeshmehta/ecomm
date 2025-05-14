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
import { CiEdit } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { MyContext } from "../../App";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const columns = [
  { id: "image", label: "Image", minWidth: 250 },
  { id: "action", label: "Actions", minWidth: 100 },
];

const HomeSliderBanner = () => {
  const [categoryFilterVal, setCategoryFilterVal] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const context = useContext(MyContext);

  const handleChangeCatFilter = (event, newPage) => {
    setCategoryFilterVal(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <div className="flex items-center justify-between px-2 mb-1 py-0 mt-1 bg-whi">
        <h2 className="text-[20px] font-[600] ">Home Slider Banners</h2>
        <div className="col w-[25%] ml-auto flex items-center justify-end gap-3 ">
          <Button className="btn !bg-green-600 !text-white btn-sm flex items-center !capitalize">
            Export
          </Button>
          <Button
            className="btn-blue  !text-white btn-sm !capitalize"
            onClick={() =>
              context.setIsOpenFullScreenPanel({
                open: true,
                model: "Add Home Slide",
              })
            }
          >
            Add Home Slide
          </Button>
        </div>
      </div>
      <div className="card my-3 ">
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow className="bg-gray-400">
                <TableCell>
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
            <TableBody className="bg-white">
              <TableRow>
                <TableCell>
                  <Checkbox {...label} className="!text-black" size="small" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-full  rounded-md overflow-hidden group">
                      <img
                        src="https://i.pinimg.com/736x/10/a3/4f/10a34f1d39b2139189f7fdc25a6c5c6e.jpg"
                        className="w-full group-hover:scale-105 trransition-all"
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell width={100}>
                  <div className="flex items-center gap-4">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700">
                      <CiEdit className="text-[35px] text-white" />
                    </Button>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700">
                      <FaEye className="text-[35px] text-white" />
                    </Button>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700">
                      <MdOutlineDelete className="text-[35px] text-white" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <div className="flex items-center justify-end pt-5 pb-5">
          <Pagination count={10} />
        </div>
      </div>
    </>
  );
};

export default HomeSliderBanner;
