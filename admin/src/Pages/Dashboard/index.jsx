import React, { useState, PureComponent, useContext } from "react";
import DashboardBoxes from "../../Components/DashboardBoxes";
import { FaPlus } from "react-icons/fa6";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

import { Link } from "react-router-dom";
import ProgressBar from "../../Components/ProgressBar";
import { CiEdit } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
// import Tooltip from "@mui/material/Tooltip";
import Pagination from "@mui/material/Pagination";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { MyContext } from "../../App";
const columns = [
  { id: "id", label: "ID", minWidth: 100 },
  { id: "product", label: "PRODUCT", minWidth: 170 },
  { id: "category", label: "CATEGORY", minWidth: 170 },
  { id: "subcategory", label: "Subcategory", minWidth: 170 },
  { id: "sales", label: "Sales", minWidth: 170 },
  { id: "price", label: "Price", minWidth: 170 },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const Dashboard = () => {
  const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null);
  const isShowOrderProduct = (index) => {
    if (isOpenOrderProduct === index) {
      setIsOpenOrderProduct(null);
    } else {
      setIsOpenOrderProduct(index);
    }
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [categoryFilterVal, setCategoryFilterVal] = React.useState("");
  const [char1Data, setChart1Data] = useState([
    {
      name: "Jan",
      total_sales: 4000,
      total_users: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      total_sales: 3000,
      total_users: 1398,
      amt: 2210,
    },
    {
      name: "March",
      total_sales: 2000,
      total_users: 6800,
      amt: 2290,
    },
    {
      name: "April",
      total_sales: 8780,
      total_users: 3908,
      amt: 2000,
    },
    {
      name: "May",
      total_sales: 3890,
      total_users: 3300,
      amt: 2181,
    },
    {
      name: "June",
      total_sales: 6390,
      total_users: 3800,
      amt: 2500,
    },
    {
      name: "July",
      total_sales: 6490,
      total_users: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      total_sales: 8990,
      total_users: 6900,
      amt: 2700,
    },
    {
      name: "Sep",
      total_sales: 4990,
      total_users: 3900,
      amt: 1700,
    },
    {
      name: "Oct",
      total_sales: 3990,
      total_users: 4900,
      amt: 2700,
    },
    {
      name: "Nov",
      total_sales: 9990,
      total_users: 8900,
      amt: 5700,
    },
    {
      name: "Dec",
      total_sales: 9590,
      total_users: 5900,
      amt: 8560,
    },
  ]);
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
      <div className="w-full p-2 py-2 px-5 bg-[#f1f1f1] border border-[rgba(0,0,0,0.1)] flex items-center gap-8 justify-start rounded-md mb-5">
        <div className="info">
          <h1 className="text-[35px] font-bold leading-10 mb-3 ">
            Hi there! ... &nbsp;&nbsp; Good Morning
          </h1>
          <p>
            Here's what happening on your store today. See the statistics at
            once.
          </p>
          <br />
          <Button
            className="btn-blue !capitalize"
            onClick={() =>
              context.setIsOpenFullScreenPanel({
                open: true,
                model: "Add Product",
              })
            }
          >
            Add Product &nbsp;
            <FaPlus />
          </Button>
        </div>
        <img src="/shop.webp" className="w-[250px]" />
      </div>
      <DashboardBoxes />
      <div className="card my-3">
        <div className="flex items-center justify-between py-5 px-5">
          <h2 className="text-[20px] font-[600] ">Products</h2>
        </div>

        <div className="flex items-center w-full pl-5 justify-between pr-5">
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
          <div className="col w-[25%] ml-auto flex items-center gap-3 ">
            <Button className="btn !bg-green-600 !text-white btn-sm flex items-center">
              Export
            </Button>
            <Button className="btn-blue  !text-white btn-sm">
              Add Product
            </Button>
          </div>
        </div>

        <div className=" relative overflow-x-auto mt-5 pb-5 rounded-md ">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 !rounded-md">
            <thead>
              <tr className="border-b dark:border-gray-500">
                <th className="px-6 py-3 pr-2 width-[10%] bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                  <div className="w-[60px]">
                    <Checkbox {...label} className="!text-white" size="small" />
                  </div>
                </th>
                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                  Products
                </th>
                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                  Categories
                </th>
                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                  Sub Categories
                </th>
                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                  Brand
                </th>
                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                  Price
                </th>
                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                  Rating
                </th>
                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                  Sales
                </th>
                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-3 pr-0 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="w-[60px]">
                    <Checkbox {...label} className="!text-white" size="small" />
                  </div>
                </td>
                <td className="px-0 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-4 w-[250px]">
                    <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group ">
                      <Link to="/product/123" className="cursor-pointer">
                        <img
                          src="https://m.media-amazon.com/images/I/71AxGkH3eWL._SY741_.jpg"
                          className="w-full group-hover:scale-105 trransition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%] ">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-green-400">
                        <Link to="/product/123" className="cursor-pointer">
                          GRECIILOOKS Regular Fit Tops for Jeans for Women
                        </Link>
                      </h3>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  WESTERN TOP
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  women
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <span className="text-[12px]">GRECIILOOKS</span>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="gap-1 w-[60px] flex flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[600]">
                      &#8377; 2999
                    </span>
                    <span className="price text-red-500 text-[14px] font-[600]">
                      &#8377; 399
                    </span>
                  </div>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  4.5 (292)
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <p className="text-[14px] w-[80px] ">
                    {" "}
                    <span className="font-[600]">563</span>&nbsp; sold this
                    month
                  </p>
                  <ProgressBar value={40} type="warning" />
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-4">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <CiEdit className="text-[35px] text-white" />
                    </Button>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <FaEye className="text-[35px] text-white" />
                    </Button>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <MdOutlineDelete className="text-[35px] text-white" />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 pr-0 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="w-[60px]">
                    <Checkbox {...label} className="!text-white" size="small" />
                  </div>
                </td>
                <td className="px-0 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-4 w-[250px]">
                    <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group ">
                      <Link to="/product/123" className="cursor-pointer">
                        <img
                          src="https://m.media-amazon.com/images/I/61HpBLbXXiL._SY679_.jpg"
                          className="w-full group-hover:scale-105 trransition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%] ">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-green-400">
                        <Link to="/product/123" className="cursor-pointer">
                          GRECIILOOKS Regular Fit Tops for Jeans for Women
                        </Link>
                      </h3>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  WESTERN TOP
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  women
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <span className="text-[12px]">GRECIILOOKS</span>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="gap-1 w-[60px] flex flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[600]">
                      &#8377; 2999
                    </span>
                    <span className="price text-red-500 text-[14px] font-[600]">
                      &#8377; 399
                    </span>
                  </div>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  4.5 (292)
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <p className="text-[14px] w-[80px] ">
                    {" "}
                    <span className="font-[600]">563</span>&nbsp; sold this
                    month
                  </p>
                  <ProgressBar value={40} type="warning" />
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-4">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <CiEdit className="text-[35px] text-white" />
                    </Button>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <FaEye className="text-[35px] text-white" />
                    </Button>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <MdOutlineDelete className="text-[35px] text-white" />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 pr-0 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="w-[60px]">
                    <Checkbox {...label} className="!text-white" size="small" />
                  </div>
                </td>
                <td className="px-0 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-4 w-[250px]">
                    <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group ">
                      <Link to="/product/123" className="cursor-pointer">
                        <img
                          src="https://m.media-amazon.com/images/I/71DvFtoUcfL._SY679_.jpg"
                          className="w-full group-hover:scale-105 trransition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%] ">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-green-400">
                        <Link to="/product/123" className="cursor-pointer">
                          GRECIILOOKS Regular Fit Tops for Jeans for Women
                        </Link>
                      </h3>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  WESTERN TOP
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  women
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <span className="text-[12px]">GRECIILOOKS</span>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="gap-1 w-[60px] flex flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[600]">
                      &#8377; 2999
                    </span>
                    <span className="price text-red-500 text-[14px] font-[600]">
                      &#8377; 399
                    </span>
                  </div>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  4.5 (292)
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <p className="text-[14px] w-[80px] ">
                    {" "}
                    <span className="font-[600]">563</span>&nbsp; sold this
                    month
                  </p>
                  <ProgressBar value={40} type="warning" />
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-4">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <CiEdit className="text-[35px] text-white" />
                    </Button>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <FaEye className="text-[35px] text-white" />
                    </Button>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <MdOutlineDelete className="text-[35px] text-white" />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 pr-0 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="w-[60px]">
                    <Checkbox {...label} className="!text-white" size="small" />
                  </div>
                </td>
                <td className="px-0 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-4 w-[250px]">
                    <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group ">
                      <Link to="/product/123" className="cursor-pointer">
                        <img
                          src="https://m.media-amazon.com/images/I/71erHykObGL._SY679_.jpg"
                          className="w-full group-hover:scale-105 trransition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%] ">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-green-400">
                        <Link to="/product/123" className="cursor-pointer">
                          GRECIILOOKS Regular Fit Tops for Jeans for Women
                        </Link>
                      </h3>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  WESTERN TOP
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  women
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <span className="text-[12px]">GRECIILOOKS</span>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="gap-1 w-[60px] flex flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[600]">
                      &#8377; 2999
                    </span>
                    <span className="price text-red-500 text-[14px] font-[600]">
                      &#8377; 399
                    </span>
                  </div>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  4.5 (292)
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <p className="text-[14px] w-[80px] ">
                    {" "}
                    <span className="font-[600]">563</span>&nbsp; sold this
                    month
                  </p>
                  <ProgressBar value={40} type="warning" />
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-4">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <CiEdit className="text-[35px] text-white" />
                    </Button>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <FaEye className="text-[35px] text-white" />
                    </Button>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <MdOutlineDelete className="text-[35px] text-white" />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 pr-0 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="w-[60px]">
                    <Checkbox {...label} className="!text-white" size="small" />
                  </div>
                </td>
                <td className="px-0 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-4 w-[250px]">
                    <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group ">
                      <Link to="/product/123" className="cursor-pointer">
                        <img
                          src="https://m.media-amazon.com/images/I/610QkFn9ceL._SY679_.jpg"
                          className="w-full group-hover:scale-105 trransition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%] ">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-green-400">
                        <Link to="/product/123" className="cursor-pointer">
                          Miss Chase Women's V-Neck Cap Sleeved Solid Wrap Maxi
                          Dress
                        </Link>
                      </h3>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  Miss Chase
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  women
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <span className="text-[12px]">GRECIILOOKS</span>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="gap-1 w-[60px] flex flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[600]">
                      &#8377; 2199
                    </span>
                    <span className="price text-red-500 text-[14px] font-[600]">
                      &#8377; 999
                    </span>
                  </div>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  4.5 (492)
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <p className="text-[14px] w-[80px] ">
                    {" "}
                    <span className="font-[600]">563</span>&nbsp; sold this
                    month
                  </p>
                  <ProgressBar value={40} type="warning" />
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-4">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <CiEdit className="text-[35px] text-white" />
                    </Button>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <FaEye className="text-[35px] text-white" />
                    </Button>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <MdOutlineDelete className="text-[35px] text-white" />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 pr-0 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="w-[60px]">
                    <Checkbox {...label} className="!text-white" size="small" />
                  </div>
                </td>
                <td className="px-0 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-4 w-[250px]">
                    <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group ">
                      <Link to="/product/123" className="cursor-pointer">
                        <img
                          src="https://m.media-amazon.com/images/I/71qXsgDF8sL._SY679_.jpg"
                          className="w-full group-hover:scale-105 trransition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%] ">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-green-400">
                        <Link to="/product/123" className="cursor-pointer">
                          Miss Chase Women's V-Neck Cap Sleeved Solid Wrap Maxi
                          Dress
                        </Link>
                      </h3>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  Miss Chase
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  women
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <span className="text-[12px]">GRECIILOOKS</span>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="gap-1 w-[60px] flex flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[600]">
                      &#8377; 2199
                    </span>
                    <span className="price text-red-500 text-[14px] font-[600]">
                      &#8377; 999
                    </span>
                  </div>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  4.5 (492)
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <p className="text-[14px] w-[80px] ">
                    {" "}
                    <span className="font-[600]">563</span>&nbsp; sold this
                    month
                  </p>
                  <ProgressBar value={40} type="warning" />
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-4">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <CiEdit className="text-[35px] text-white" />
                    </Button>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <FaEye className="text-[35px] text-white" />
                    </Button>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <MdOutlineDelete className="text-[35px] text-white" />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 pr-0 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="w-[60px]">
                    <Checkbox {...label} className="!text-white" size="small" />
                  </div>
                </td>
                <td className="px-0 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-4 w-[250px]">
                    <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group ">
                      <Link to="/product/123" className="cursor-pointer">
                        <img
                          src="https://m.media-amazon.com/images/I/81+tZW7yg8L._SY679_.jpg"
                          className="w-full group-hover:scale-105 trransition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%] ">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-green-400">
                        <Link to="/product/123" className="cursor-pointer">
                          COTLAND Fashions Jaipuri Cotton Printed Spaghetti
                          Strap Top for Women
                        </Link>
                      </h3>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  COTLAND Fashions
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  women
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <span className="text-[12px]">COTLAND</span>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="gap-1 w-[60px] flex flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[600]">
                      &#8377; 1299
                    </span>
                    <span className="price text-red-500 text-[14px] font-[600]">
                      &#8377; 419
                    </span>
                  </div>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  4.3 (14)
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <p className="text-[14px] w-[80px] ">
                    {" "}
                    <span className="font-[600]">4,531</span>&nbsp; sold this
                    month
                  </p>
                  <ProgressBar value={40} type="warning" />
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-4">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <CiEdit className="text-[35px] text-white" />
                    </Button>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <FaEye className="text-[35px] text-white" />
                    </Button>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <MdOutlineDelete className="text-[35px] text-white" />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 pr-0 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="w-[60px]">
                    <Checkbox {...label} className="!text-white" size="small" />
                  </div>
                </td>
                <td className="px-0 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-4 w-[250px]">
                    <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group ">
                      <Link to="/product/123" className="cursor-pointer">
                        <img
                          src="https://m.media-amazon.com/images/I/61X1FbTtcML._SX569_.jpg"
                          className="w-full group-hover:scale-105 trransition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%] ">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-green-400">
                        <Link to="/product/123" className="cursor-pointer">
                          POPWINGS Women Casual Blue & White Stripe Print Strap
                          Crop Top
                        </Link>
                      </h3>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  POPWINGS
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  women
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <span className="text-[12px]">POPWINGS </span>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="gap-1 w-[60px] flex flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[600]">
                      &#8377; 1999
                    </span>
                    <span className="price text-red-500 text-[14px] font-[600]">
                      &#8377; 299
                    </span>
                  </div>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  4.1 (4921)
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <p className="text-[14px] w-[80px] ">
                    {" "}
                    <span className="font-[600]">428</span>&nbsp; sold this
                    month
                  </p>
                  <ProgressBar value={40} type="warning" />
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-4">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <CiEdit className="text-[35px] text-white" />
                    </Button>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <FaEye className="text-[35px] text-white" />
                    </Button>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <MdOutlineDelete className="text-[35px] text-white" />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 pr-0 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="w-[60px]">
                    <Checkbox {...label} className="!text-white" size="small" />
                  </div>
                </td>
                <td className="px-0 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-4 w-[250px]">
                    <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group ">
                      <Link to="/product/123" className="cursor-pointer">
                        <img
                          src="https://m.media-amazon.com/images/I/611DHz6a29L._SX569_.jpg"
                          className="w-full group-hover:scale-105 trransition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%] ">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-green-400">
                        <Link to="/product/123" className="cursor-pointer">
                          POPWINGS Women Casual Blue & White Stripe Print Strap
                          Crop Top
                        </Link>
                      </h3>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  Women Trendy Top
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  women
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <span className="text-[12px]">POPWINGS</span>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="gap-1 w-[60px] flex flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[600]">
                      &#8377; 1999
                    </span>
                    <span className="price text-red-500 text-[14px] font-[600]">
                      &#8377; 339
                    </span>
                  </div>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  3.6 (96)
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <p className="text-[14px] w-[80px] ">
                    {" "}
                    <span className="font-[600]">1,089</span>&nbsp; sold this
                    month
                  </p>
                  <ProgressBar value={40} type="warning" />
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-4">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <CiEdit className="text-[35px] text-white" />
                    </Button>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <FaEye className="text-[35px] text-white" />
                    </Button>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <MdOutlineDelete className="text-[35px] text-white" />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 pr-0 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="w-[60px]">
                    <Checkbox {...label} className="!text-white" size="small" />
                  </div>
                </td>
                <td className="px-0 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-4 w-[250px]">
                    <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group ">
                      <Link to="/product/123" className="cursor-pointer">
                        <img
                          src="https://m.media-amazon.com/images/I/811QGEcZbUL._SX569_.jpg"
                          className="w-full group-hover:scale-105 trransition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%] ">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-green-400">
                        <Link to="/product/123" className="cursor-pointer">
                          POPWINGS Women Casual Blue & White Stripe Print Strap
                          Crop Top
                        </Link>
                      </h3>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  Women Trendy Top
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  women
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <span className="text-[12px]">POPWINGS </span>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="gap-1 w-[60px] flex flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[600]">
                      &#8377; 2199
                    </span>
                    <span className="price text-red-500 text-[14px] font-[600]">
                      &#8377; 299
                    </span>
                  </div>
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  4.5 (492)
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <p className="text-[14px] w-[80px] ">
                    {" "}
                    <span className="font-[600]">563</span>&nbsp; sold this
                    month
                  </p>
                  <ProgressBar value={40} type="warning" />
                </td>
                <td className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-4">
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <CiEdit className="text-[35px] text-white" />
                    </Button>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <FaEye className="text-[35px] text-white" />
                    </Button>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full hover:!bg-gray-600 !bg-green-700 ">
                      <MdOutlineDelete className="text-[35px] text-white" />
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-end pt-5 pb-5">
          <Pagination count={10} />
        </div>
      </div>
      <div className="card my-3">
        <div className="flex items-center justify-between py-5 px-5">
          <h2 className="text-[20px] font-[600] ">Recent Orders</h2>
        </div>

        <div className="flex items-center w-full pl-5 justify-between pr-5">
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
          <div className="col w-[25%] ml-auto flex items-center gap-3 ">
            <Button className="btn !bg-green-600 !text-white btn-sm flex items-center">
              Export
            </Button>
            <Button className="btn-blue  !text-white btn-sm">
              Add Product
            </Button>
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
      <div className="card my-4 shadow-md rounded-lg ">
        <div className="flex items-center justify-between px-5 py-5 pb-0">
          <h2 className="text-[20px] font-[600] ">Total Users & Total Sales</h2>
        </div>
        <div className="flex items-center gap-5 px-5 py-5 pt-1">
          <span className="flex items-center gap-1 text-[13px]">
            <span className="block w-[8px] h-[8px] rounded-full bg-green-600"></span>
            Total Users
          </span>
          <span className="flex items-center gap-1 text-[13px]">
            <span className="block w-[8px] h-[8px] rounded-full bg-blue-600"></span>
            Total Sales
          </span>
        </div>
        <LineChart
          width={1000}
          height={500}
          data={char1Data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="none" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="total_sales"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="total_users"
            stroke="#82ca9d"
            strokeWidth={2}
          />
        </LineChart>
      </div>
    </>
  );
};
export default Dashboard;
