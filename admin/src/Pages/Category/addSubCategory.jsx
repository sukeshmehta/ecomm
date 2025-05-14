import React, { useState } from "react";
import Button from "@mui/material/Button";
import { FaCloudUploadAlt } from "react-icons/fa";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const AddSubCategory = () => {
  const [productCat, setProductCat] = useState("");

  const handleChangeProductCat = (event) => {
    setProductCat(event.target.value);
  };

  return (
    <>
      <section className="p-8 bg-gray-100">
        <form className="form  p-8 py-3  ">
          <div className="max-h-[80vh] pr-4 overflow-y-scroll pt-4">
            <div className="grid grid-cols-4 mb-3 gap-5 ">
              <div className="col ">
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
                  Sub Category Name
                </h3>
                <input
                  type="text"
                  className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.7)] rounded-md p-3 text-sm"
                />
              </div>
              <br />
            </div>
          </div>
          <br />
          <div className="w-[250px]">
            <Button
              type="submit"
              className="btn-blue btn-lg !capitalize w-full flex gap-2"
            >
              <FaCloudUploadAlt className="text-white text-[22px] " />
              Publish & view{" "}
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddSubCategory;
