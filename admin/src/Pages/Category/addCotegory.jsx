import React from "react";
import { IoMdClose } from "react-icons/io";
import UploadBox from "../../Components/UploadBox";
import Button from "@mui/material/Button";
import { FaCloudUploadAlt } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AddCategory = () => {
  return (
    <>
      <section className="p-8 bg-gray-100">
        <form className="form  p-8 py-3  ">
          <div className="max-h-[80vh] pr-4 overflow-y-scroll pt-4">
            <div className="grid grid-cols-1 mb-3 w-[25%]">
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-1 text-black">
                  Category Name
                </h3>
                <input
                  type="text"
                  className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.7)] rounded-md p-3 text-sm"
                />
              </div>
              <br />
              <h3 className="text-[18px] font-[500] mb-1 text-black">
                Category Image
              </h3>
            </div>
            <br />
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

              <UploadBox multiple={true} />
            </div>
          </div>
          <br />

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

export default AddCategory;
