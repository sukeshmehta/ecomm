import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import UploadBox from "../../Components/UploadBox";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IoMdClose } from "react-icons/io";
import Button from "@mui/material/Button";
import { FaCloudUploadAlt } from "react-icons/fa";

const AddProduct = () => {
  const [productCat, setProductCat] = React.useState("");
  const [productSubCat, setProductSubCat] = React.useState("");
  const [productFeatured, setProductFeatured] = React.useState("");
  const [productRams, setProductRams] = React.useState("");
  const [productWeight, setProductWeight] = React.useState("");
  const [productSize, setProductSize] = React.useState("");

  const handleChangeProductCat = (event) => {
    setProductCat(event.target.value);
  };
  const handleChangeProductSubCat = (event) => {
    setProductSubCat(event.target.value);
  };
  const handleChangeProductFeatured = (event) => {
    setProductFeatured(event.target.value);
  };
  const handleChangeProductRams = (event) => {
    setProductRams(event.target.value);
  };
  const handleChangeProductWeight = (event) => {
    setProductWeight(event.target.value);
  };
  const handleChangeProductSize = (event) => {
    setProductSize(event.target.value);
  };

  return (
    <>
      <section className="p-8 bg-gray-100">
        <form className="form  p-8 py-3  ">
          <div className="max-h-[80vh] pr-4 overflow-y-scroll">
            <div className="grid grid-cols-1 mb-3">
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-1 text-black">
                  Product Name
                </h3>
                <input
                  type="text"
                  className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.7)] rounded-md p-3 text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 mb-3">
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-1 text-black">
                  Product Description
                </h3>
                <textarea
                  type="text"
                  className="w-full h-[140px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.7)] rounded-md p-3 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-4 mb-3 gap-4">
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-1 text-black">
                  Product Category
                </h3>
                <Select
                  labelId="demo-simple-select-label"
                  id="productCatDrop"
                  className="w-full"
                  size="small"
                  value={productCat}
                  label="Category"
                  onChange={handleChangeProductCat}
                >
                  <MenuItem value={""}>none</MenuItem>
                  <MenuItem value={10}>Fashion</MenuItem>
                  <MenuItem value={20}>Beauty</MenuItem>
                  <MenuItem value={30}>Wellness</MenuItem>
                </Select>
              </div>
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-1 text-black">
                  Sub Category
                </h3>
                <Select
                  labelId="demo-simple-select-label"
                  id="productCatDrop"
                  className="w-full"
                  size="small"
                  value={productSubCat}
                  label="Category"
                  onChange={handleChangeProductSubCat}
                >
                  <MenuItem value={""}>none</MenuItem>
                  <MenuItem value={10}>Men</MenuItem>
                  <MenuItem value={20}>Women</MenuItem>
                  <MenuItem value={30}>Kids</MenuItem>
                  <MenuItem value={30}>Boys</MenuItem>
                  <MenuItem value={30}>Girls</MenuItem>
                </Select>
              </div>
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-1 text-black ">
                  Product Price
                </h3>
                <input
                  type="number"
                  className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.7)] rounded-md p-3 text-sm"
                />
              </div>
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-1 text-black ">
                  Old Product Price
                </h3>
                <input
                  type="number"
                  className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.7)] rounded-md p-3 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-4 mb-3 gap-4">
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-1 text-black">
                  Is featured?
                </h3>
                <Select
                  labelId="demo-simple-select-label"
                  id="productCatDrop"
                  className="w-full"
                  size="small"
                  value={productFeatured}
                  label="Category"
                  onChange={handleChangeProductFeatured}
                >
                  <MenuItem value={10}>Ture</MenuItem>
                  <MenuItem value={20}>False</MenuItem>
                </Select>
              </div>
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-1 text-black ">
                  Product Stock
                </h3>
                <input
                  type="text"
                  className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.7)] rounded-md p-3 text-sm"
                />
              </div>
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-1 text-black ">
                  Product Discount
                </h3>
                <input
                  type="number"
                  className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.7)] rounded-md p-3 text-sm"
                />
              </div>
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-1 text-black ">
                  Product Brand
                </h3>
                <input
                  type="text"
                  className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.7)] rounded-md p-3 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-4 mb-3 gap-4">
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-1 text-black">
                  Product RAMS
                </h3>
                <Select
                  labelId="demo-simple-select-label"
                  id="productCatDrop"
                  className="w-full"
                  size="small"
                  value={productRams}
                  label="Category"
                  onChange={handleChangeProductRams}
                >
                  <MenuItem value={"4GB"}>4 GB</MenuItem>
                  <MenuItem value={"6GB"}>6 GB</MenuItem>
                  <MenuItem value={"8GB"}>8 GB</MenuItem>
                </Select>
              </div>
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-1 text-black">
                  Product Weight
                </h3>
                <Select
                  labelId="demo-simple-select-label"
                  id="productCatDrop"
                  className="w-full"
                  size="small"
                  value={productWeight}
                  label="Category"
                  onChange={handleChangeProductWeight}
                >
                  <MenuItem value={""}>none</MenuItem>
                  <MenuItem value={10}>210 g</MenuItem>
                  <MenuItem value={20}>200 g</MenuItem>
                  <MenuItem value={30}>179 g</MenuItem>
                </Select>
              </div>
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-1 text-black ">
                  Product Size
                </h3>
                <Select
                  labelId="demo-simple-select-label"
                  id="productCatDrop"
                  className="w-full"
                  size="small"
                  value={productSize}
                  label="Category"
                  onChange={handleChangeProductSize}
                >
                  <MenuItem value={""}>none</MenuItem>
                  <MenuItem value={"S"}>5.6</MenuItem>
                  <MenuItem value={"M"}>6.1</MenuItem>
                  <MenuItem value={"L"}>6.67</MenuItem>
                </Select>
              </div>
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-1 text-black ">
                  Product Rating
                </h3>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </div>
            </div>
            <div className="col w-full p-5 px-0">
              <h3 className="text-[18px] font-700 mb-3">Media & Images</h3>
              <div className="grid grid-cols-7 mb-2 gap-4 ">
                <div className="uploadBoxWrapper relative">
                  <span className="absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -right-[10px] -top-[10px] flex items-center justify-center z-50 cursor-pointer ">
                    <IoMdClose className="text-white text-[17px]" />
                  </span>
                  <div className="uploadBox p-3 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-200 cursor-pointer hover:bg-gray-300 flex items-center justify-center flex-col relative pointer-events-none">
                    <LazyLoadImage
                      alt={"image"}
                      className="w-full object-cover pt-12"
                      effect="blur"
                      wrapperProps={{
                        style: { transitionDelay: "1s" },
                      }}
                      src={
                        "https://m.media-amazon.com/images/I/71AxGkH3eWL._SY741_.jpg"
                      }
                    />
                  </div>
                </div>
                <div className="uploadBoxWrapper relative">
                  <span className="absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -right-[10px] -top-[10px] flex items-center justify-center z-50 cursor-pointer ">
                    <IoMdClose className="text-white text-[17px]" />
                  </span>
                  <div className="uploadBox p-3 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-200 cursor-pointer hover:bg-gray-300 flex items-center justify-center flex-col relative pointer-events-none">
                    <LazyLoadImage
                      alt={"image"}
                      className="w-full object-cover pt-12"
                      effect="blur"
                      wrapperProps={{
                        style: { transitionDelay: "1s" },
                      }}
                      src={
                        "https://m.media-amazon.com/images/I/61HpBLbXXiL._SY679_.jpg"
                      }
                    />
                  </div>
                </div>
                <div className="uploadBoxWrapper relative">
                  <span className="absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -right-[10px] -top-[10px] flex items-center justify-center z-50 cursor-pointer ">
                    <IoMdClose className="text-white text-[17px]" />
                  </span>
                  <div className="uploadBox p-3 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-200 cursor-pointer hover:bg-gray-300 flex items-center justify-center flex-col relative pointer-events-none">
                    <LazyLoadImage
                      alt={"image"}
                      className="w-full object-cover pt-12"
                      effect="blur"
                      wrapperProps={{
                        style: { transitionDelay: "1s" },
                      }}
                      src={
                        "https://m.media-amazon.com/images/I/71erHykObGL._SY679_.jpg"
                      }
                    />
                  </div>
                </div>
                <div className="uploadBoxWrapper relative">
                  <span className="absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -right-[10px] -top-[10px] flex items-center justify-center z-50 cursor-pointer ">
                    <IoMdClose className="text-white text-[17px]" />
                  </span>
                  <div className="uploadBox p-3 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-200 cursor-pointer hover:bg-gray-300 flex items-center justify-center flex-col relative pointer-events-none">
                    <LazyLoadImage
                      alt={"image"}
                      className="w-full object-cover pt-12"
                      effect="blur"
                      wrapperProps={{
                        style: { transitionDelay: "1s" },
                      }}
                      src={
                        "https://m.media-amazon.com/images/I/71DvFtoUcfL._SY679_.jpg"
                      }
                    />
                  </div>
                </div>
                <UploadBox multiple={true} />
              </div>
            </div>
          </div>
          <hr />
          <br />
          <Button
            type="submit"
            className="btn-blue btn-lg !capitalize w-full flex gap-2"
          >
            <FaCloudUploadAlt className="text-white text-[22px] " />
            Publish & view{" "}
          </Button>
        </form>
      </section>
    </>
  );
};

export default AddProduct;

//1.1h

// 1.39
