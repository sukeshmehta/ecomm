import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ProductsSlider from "../../components/ProductsSlider";
import { ProductDetailsComponent } from "../../components/ProductDetails";
import ProductZoom from "../../components/ProductZoom";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="py-5 pb-8">
        <div className="container flex gap-3">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/home"
              className="link transition !text-[14px]"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Fashion
            </Link>
            <Link
              underline="hover"
              color="inherit"
              className="link transition !text-[14px]"
            >
              Embroidered Regular Top
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      {/* content section of the product */}

      <section className="bg-white py-5 pl-10 ">
        <div className="container flex gap-8 pb-5">
          <div className="productZoomContainer w-[40%]  overflow-hidden ">
            <ProductZoom />
          </div>
          <br />
          <div className="productContent  items-center relative w-[60%] pr-10 pl-10">
            <ProductDetailsComponent />
          </div>
        </div>

        <hr className="opacity-25" />

        <div className="productContent actions pb-5 pt-5 overflow-hidden ">
          <div className="container w-full pt-10">
            <div className="flex items-center relative w-full gap-8 mb-5">
              <span
                className={`link text-[17px] cursor-pointer font-[500] ${
                  activeTab === 0 && "text-orange-400"
                }`}
                onClick={() => setActiveTab(0)}
              >
                Description
              </span>
              <span
                className={`link text-[17px] cursor-pointer font-[500] ${
                  activeTab === 1 && "text-orange-400"
                }`}
                onClick={() => setActiveTab(1)}
              >
                Product Details
              </span>
              <span
                className={`link text-[17px] cursor-pointer font-[500] ${
                  activeTab === 2 && "text-orange-400"
                }`}
                onClick={() => setActiveTab(2)}
              >
                Reviews
              </span>
            </div>
            {activeTab === 0 && (
              <div className="shadow-md w-full px-8 py-5 rounded-md">
                <p>
                  Customers appreciate the shirt's quality, style, and fit. They
                  find it comfortable, true to size, and good value for money.
                  However, some customers have differing views on the fabric
                  quality.Customers appreciate the shirt's quality, style, and
                  fit. They find it comfortable, true to size, and good value
                  for money. However, some customers have differing views on the
                  fabric quality.
                </p>
                <h4>Customers say</h4>
              </div>
            )}

            {activeTab === 1 && (
              <div className="shadow-md w-[100%] px-8 py-5 rounded-md">
                <div className=" relative overflow-x-auto">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Material composition
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Fit type
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Sleeve type
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Neck style
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                        <td className="px-6 py-4">Rayon</td>
                        <td className="px-6 py-4">Regular Fit</td>
                        <td className="px-6 py-4">Green</td>
                        <td className="px-6 py-4">Long Sleeve</td>
                        <td className="px-6 py-4">Round Neck</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className="shadow-md w-full px-8 py-5 rounded-md">
                <div className="w-full productReviewsContainer">
                  <h2 className="text-[18px]">
                    Costumers Questions and Answers
                  </h2>
                  <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5">
                    <div className="review pt-5 pb-5  border-b boder-[rgba(0,0,0,0.9)] w-full flex items-center justify-between">
                      <div className="info w-[60%] flex items-center gap-2 ">
                        <div className="img w-[80px] h-[80px] overflow-hidden ">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU"
                            className="w-full"
                          />
                        </div>
                        <div className="w-[70%]">
                          <h4 className="text-[16px]">Raju</h4>
                          <h5 className="text-[13px] mb-0">01/02/2025</h5>
                          <p className="!mt-0 !mb-1">Nice Product</p>
                        </div>
                      </div>
                      <Rating
                        name="size-small"
                        defaultValue={4}
                        size="small"
                        readOnly
                      />
                    </div>
                    <div className="review pt-5 pb-5  border-b boder-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                      <div className="info w-[60%] flex items-center gap-2 ">
                        <div className="img w-[80px] h-[80] overflow-hidden ">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU"
                            className="w-full"
                          />
                        </div>
                        <div className="w-[70%]">
                          <h4 className="text-[16px]">Raju</h4>
                          <h5 className="text-[13px] mb-0">01/02/2025</h5>
                          <p className="!mt-0 !mb-1">Nice Product</p>
                        </div>
                      </div>
                      <Rating
                        name="size-small"
                        defaultValue={4}
                        size="small"
                        readOnly
                      />
                    </div>
                  </div>

                  <br />
                  <div className="reviewForm bg-[#f1f1f1] p-4 rounded-md">
                    <h2 className="text-[18px]  ">Add Reviews</h2>

                    <form className="w-full mt-5">
                      <TextField
                        id="outlined-multiline-flexible"
                        label="Multiline"
                        className="w-full mb-5"
                        multiline
                        rows={5}
                      />
                      <br />
                      <br />
                      <Rating name="size-small" defaultValue={4} size="small" />
                      <div className="flex items-center mt-5">
                        <Button className="btn-org">Submit Reviews</Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="container pt-8">
            <h2 className="text-[20px] font-[600] ">Related Products</h2>
            <ProductsSlider items={6} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
