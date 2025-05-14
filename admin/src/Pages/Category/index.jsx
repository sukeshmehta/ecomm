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
  { id: "catName", label: "Category Name", minWidth: 250 },
  { id: "action", label: "Actions", minWidth: 100 },
];

const CategoryList = () => {
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
        <h2 className="text-[20px] font-[600] ">Category List</h2>
        <div className="col w-[30%] ml-auto flex items-center justify-end gap-3 ">
          <Button className="btn !bg-green-600 !text-white btn-sm flex items-center !capitalize">
            Export
          </Button>
          <Button
            className="btn-blue  !text-white btn-sm !capitalize"
            onClick={() =>
              context.setIsOpenFullScreenPanel({
                open: true,
                model: "Add New Category",
              })
            }
          >
            Add New Category
          </Button>
        </div>
      </div>
      <div className="card my-3 ">
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead className=" mb-5 pb-10">
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
            <br />
            <TableBody className="bg-white">
              <TableRow>
                <TableCell width={50}>
                  <Checkbox {...label} className="!text-black" size="small" />
                </TableCell>
                <TableCell width={100}>
                  <div className="flex items-center gap-4 w-[80px] ">
                    <div className="img w-full  rounded-md overflow-hidden group">
                      <img
                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/j/v/w/3-stuffed-spongy-huggable-smartoys-cute-soft-89-rss-soft-toys-original-imahyffhhvvhexg6.jpeg?q=70"
                        className="w-full h-[80px] group-hover:scale-105 trransition-all"
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell width={100}>Fashion</TableCell>
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
            <TableBody className="bg-white">
              <TableRow>
                <TableCell width={50}>
                  <Checkbox {...label} className="!text-black" size="small" />
                </TableCell>
                <TableCell width={100}>
                  <div className="flex items-center gap-4 w-[80px]">
                    <div className="img w-full  rounded-md overflow-hidden group">
                      <img
                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/p/q/0/sofia-pink-dolls-soft-toy-cute-dolls-for-kids-girls-40-aryan-original-imahahqyhfuxbe4f.jpeg?q=70"
                        className="w-full  h-[80px]   group-hover:scale-105 trransition-all"
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell width={100}>Fashion</TableCell>
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
            <TableBody className="bg-white">
              <TableRow>
                <TableCell width={50}>
                  <Checkbox {...label} className="!text-black" size="small" />
                </TableCell>
                <TableCell width={100}>
                  <div className="flex items-center gap-4 w-[80px]">
                    <div className="img w-full  rounded-md overflow-hidden group">
                      <img
                        src="https://rukminim2.flixcart.com/image/612/612/ke4kjgw0/stuffed-toy/3/s/c/5-feet-soft-smooth-teddy-bear-very-smooth-toys-birthday-150-original-imafuvgcdgwvyg6y.jpeg?q=70"
                        className="w-full  h-[80px]   group-hover:scale-105 trransition-all"
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell width={100}>Fashion</TableCell>
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
            <TableBody className="bg-white">
              <TableRow>
                <TableCell width={50}>
                  <Checkbox {...label} className="!text-black" size="small" />
                </TableCell>
                <TableCell width={100}>
                  <div className="flex items-center gap-4 w-[80px]">
                    <div className="img w-full  rounded-md overflow-hidden group">
                      <img
                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/t/r/c/stuffed-soft-toy-for-kids-children-playing-4-set-26-mpr-original-imahyy47nsbrst4f.jpeg?q=70"
                        className="w-full  h-[80px]   group-hover:scale-105 trransition-all"
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell width={100}>Fashion</TableCell>
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
            <TableBody className="bg-white">
              <TableRow>
                <TableCell width={50}>
                  <Checkbox {...label} className="!text-black" size="small" />
                </TableCell>
                <TableCell width={100}>
                  <div className="flex items-center gap-4 w-[80px]">
                    <div className="img w-full  rounded-md overflow-hidden group">
                      <img
                        src="https://rukminim2.flixcart.com/image/612/612/l2qhjm80/stuffed-toy/2/t/i/big-size-funny-unicorn-stuffed-animal-plush-toy-100-ozee-original-imagey35r9tgahf8.jpeg?q=70"
                        className="w-full  h-[80px]   group-hover:scale-105 trransition-all"
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell width={100}>Fashion</TableCell>
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

export default CategoryList;
