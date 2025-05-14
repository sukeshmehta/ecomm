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
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ProgressBar from "../../Components/ProgressBar";
import { CiEdit } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import SearchBox from "../../Components/SearchBox";
import { MyContext } from "../../App";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const columns = [
  { id: "id", label: "ID", minWidth: 100 },
  { id: "product", label: "PRODUCT", minWidth: 170 },
  { id: "category", label: "CATEGORY", minWidth: 170 },
  { id: "subcategory", label: "Subcategory", minWidth: 170 },
  { id: "sales", label: "Sales", minWidth: 170 },
  { id: "price", label: "Price", minWidth: 170 },
];

const Products = () => {
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
        <h2 className="text-[20px] font-[600] ">Products</h2>
        <div className="col w-[25%] ml-auto flex items-center justify-end gap-3 ">
          <Button className="btn !bg-green-600 !text-white btn-sm flex items-center">
            Export
          </Button>
          <Button
            className="btn-blue  !text-white btn-sm"
            onClick={() =>
              context.setIsOpenFullScreenPanel({
                open: true,
                model: "Add Product",
              })
            }
          >
            Add Product
          </Button>
        </div>
      </div>
      <div className="card my-3 ">
        <div className="flex items-center justify-between py-1 px-1 bg-white w-full">
          <div className="flex items-center w-full px-5 justify-between">
            <div className="col w-[20%] ">
              <h4 className="font-[600] text-[13px] mb-2">Category</h4>
              <Select
                className="w-full"
                size="small"
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={categoryFilterVal}
                onChange={handleChangeCatFilter}
                label="Category"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Men</MenuItem>
                <MenuItem value={20}>Women</MenuItem>
                <MenuItem value={30}>Kids</MenuItem>
              </Select>
            </div>
            <div className="col w-[20%] ml-auto ">
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
                  className="bg-white rounded-md"
                >
                  <Checkbox {...label} className="!text-black" size="small" />
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-0 py-3 rounded-md"
                >
                  <div className="flex items-center gap-4 w-[250px]">
                    <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group">
                      <Link to="/product/123" className="cursor-pointer">
                        <img
                          src="https://m.media-amazon.com/images/I/71AxGkH3eWL._SY741_.jpg"
                          className="w-full group-hover:scale-105 trransition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-green-400">
                        <Link to="/product/123" className="cursor-pointer">
                          GRECIILOOKS Regular Fit Tops for Jeans for Women
                        </Link>
                      </h3>
                    </div>
                  </div>
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  WESTERN TOP
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  WOMEN
                </TableCell>

                <TableCell className="px-6 py-3">GRECIILOOKS</TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  <p className="text-[14px] w-[80px]">
                    <span className="font-[600]">563</span>&nbsp; sold this
                    month
                  </p>
                  <ProgressBar value={40} type="success" />
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3 rounded-md"
                >
                  <div className="gap-1 w-[60px] flex flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[600]">
                      ₹ 2999
                    </span>
                    <span className="price text-red-500 text-[14px] font-[600]">
                      ₹ 399
                    </span>
                  </div>
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
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
              <TableRow>
                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="bg-white rounded-md"
                >
                  <Checkbox {...label} className="!text-black" size="small" />
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-0 py-3 rounded-md"
                >
                  <div className="flex items-center gap-4 w-[250px]">
                    <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group">
                      <Link to="/product/123" className="cursor-pointer">
                        <img
                          src="https://m.media-amazon.com/images/I/71AxGkH3eWL._SY741_.jpg"
                          className="w-full group-hover:scale-105 trransition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-green-400">
                        <Link to="/product/123" className="cursor-pointer">
                          GRECIILOOKS Regular Fit Tops for Jeans for Women
                        </Link>
                      </h3>
                    </div>
                  </div>
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  WESTERN TOP
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  WOMEN
                </TableCell>

                <TableCell className="px-6 py-3">GRECIILOOKS</TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  <p className="text-[14px] w-[80px]">
                    <span className="font-[600]">563</span>&nbsp; sold this
                    month
                  </p>
                  <ProgressBar value={40} type="success" />
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3 rounded-md"
                >
                  <div className="gap-1 w-[60px] flex flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[600]">
                      ₹ 2999
                    </span>
                    <span className="price text-red-500 text-[14px] font-[600]">
                      ₹ 399
                    </span>
                  </div>
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
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
              <TableRow>
                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="bg-white rounded-md"
                >
                  <Checkbox {...label} className="!text-black" size="small" />
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-0 py-3 rounded-md"
                >
                  <div className="flex items-center gap-4 w-[250px]">
                    <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group">
                      <Link to="/product/123" className="cursor-pointer">
                        <img
                          src="https://m.media-amazon.com/images/I/71AxGkH3eWL._SY741_.jpg"
                          className="w-full group-hover:scale-105 trransition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-green-400">
                        <Link to="/product/123" className="cursor-pointer">
                          GRECIILOOKS Regular Fit Tops for Jeans for Women
                        </Link>
                      </h3>
                    </div>
                  </div>
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  WESTERN TOP
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  WOMEN
                </TableCell>

                <TableCell className="px-6 py-3">GRECIILOOKS</TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  <p className="text-[14px] w-[80px]">
                    <span className="font-[600]">563</span>&nbsp; sold this
                    month
                  </p>
                  <ProgressBar value={40} type="success" />
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3 rounded-md"
                >
                  <div className="gap-1 w-[60px] flex flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[600]">
                      ₹ 2999
                    </span>
                    <span className="price text-red-500 text-[14px] font-[600]">
                      ₹ 399
                    </span>
                  </div>
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
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
              <TableRow>
                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="bg-white rounded-md"
                >
                  <Checkbox {...label} className="!text-black" size="small" />
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-0 py-3 rounded-md"
                >
                  <div className="flex items-center gap-4 w-[250px]">
                    <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group">
                      <Link to="/product/123" className="cursor-pointer">
                        <img
                          src="https://m.media-amazon.com/images/I/71AxGkH3eWL._SY741_.jpg"
                          className="w-full group-hover:scale-105 trransition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-green-400">
                        <Link to="/product/123" className="cursor-pointer">
                          GRECIILOOKS Regular Fit Tops for Jeans for Women
                        </Link>
                      </h3>
                    </div>
                  </div>
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  WESTERN TOP
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  WOMEN
                </TableCell>

                <TableCell className="px-6 py-3">GRECIILOOKS</TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  <p className="text-[14px] w-[80px]">
                    <span className="font-[600]">563</span>&nbsp; sold this
                    month
                  </p>
                  <ProgressBar value={40} type="success" />
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3 rounded-md"
                >
                  <div className="gap-1 w-[60px] flex flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[600]">
                      ₹ 2999
                    </span>
                    <span className="price text-red-500 text-[14px] font-[600]">
                      ₹ 399
                    </span>
                  </div>
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
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
              <TableRow>
                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="bg-white rounded-md"
                >
                  <Checkbox {...label} className="!text-black" size="small" />
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-0 py-3 rounded-md"
                >
                  <div className="flex items-center gap-4 w-[250px]">
                    <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group">
                      <Link to="/product/123" className="cursor-pointer">
                        <img
                          src="https://m.media-amazon.com/images/I/71AxGkH3eWL._SY741_.jpg"
                          className="w-full group-hover:scale-105 trransition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-green-400">
                        <Link to="/product/123" className="cursor-pointer">
                          GRECIILOOKS Regular Fit Tops for Jeans for Women
                        </Link>
                      </h3>
                    </div>
                  </div>
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  WESTERN TOP
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  WOMEN
                </TableCell>

                <TableCell className="px-6 py-3">GRECIILOOKS</TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
                  <p className="text-[14px] w-[80px]">
                    <span className="font-[600]">563</span>&nbsp; sold this
                    month
                  </p>
                  <ProgressBar value={40} type="success" />
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3 rounded-md"
                >
                  <div className="gap-1 w-[60px] flex flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[600]">
                      ₹ 2999
                    </span>
                    <span className="price text-red-500 text-[14px] font-[600]">
                      ₹ 399
                    </span>
                  </div>
                </TableCell>

                <TableCell
                  style={{ minWidth: columns.minWidth }}
                  className="px-6 py-3"
                >
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

export default Products;
