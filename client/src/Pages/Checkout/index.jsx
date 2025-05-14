import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { BsFillHandbagFill } from "react-icons/bs";

const Checkout = () => {
  return (
    <section className="py-10">
      <div className="container flex gap-5">
        <div className="leftCol w-[70%]">
          <div className="card bg-white shadow-md p-5 rounded-md w-full">
            <h1>Billing Details </h1>

            <form action="" className="w-full mt-5">
              <div className="flex items-center gap-5 pb-5">
                <div className="w-[50%] col">
                  <TextField
                    className="w-full"
                    label="Full Name"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="w-[50%] col">
                  <TextField
                    type="email"
                    className="w-full"
                    label="email"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <h6 className="text-[14px] font-[500] mb-3">Street Address *</h6>

              <div className="flex items-center gap-5 pb-5">
                <div className="w-full col">
                  <TextField
                    type="text"
                    className="w-full"
                    label="House no. & Street name *"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
              <div className="flex items-center gap-5 pb-5">
                <div className="w-full col">
                  <TextField
                    className="w-full"
                    label="Apartment, suite, unit etc (optional)"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 pb-5">
                <div className="w-[50%] col">
                  <TextField
                    type="text"
                    className="w-full"
                    label="Town / City"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="w-[50%] col">
                  <TextField
                    type="text"
                    className="w-full"
                    label="State / Country"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <h6 className="text-[14px] font-[500] mb-3">Postcode / Zip *</h6>
              <div className="flex items-center gap-5 pb-5">
                <div className="w-full col">
                  <TextField
                    type="text"
                    className="w-full"
                    label="Code"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
              <div className="flex items-center gap-5 pb-5">
                <div className="w-[50%] col">
                  <TextField
                    type="number"
                    className="w-full"
                    label="Phome Number"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="w-[50%] col">
                  <TextField
                    type="email"
                    className="w-full"
                    label="email"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="rightCol w-[30%]">
          <div className="card shadow-md bg-white p-5 rounded-md">
            <h2 className="mb-3">Your Order</h2>
            <div className="flex items-center justify-between py-3 border-t border-[rgba(0,0,0,0.1)]">
              <span className="text-[14px] font-[600]">Product</span>
              <span className="text-[14px] font-[600]">Subtotal</span>
            </div>
            <div className="scroll max-h-[250px] overflow-y-scroll overflow-x-hidden pr-2 mb-5">
              <div className="flex items-center justify-between py-2 ">
                <div className=" part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://m.media-amazon.com/images/I/71zu8EyjbrL._SY741_.jpg"
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="info">
                    <h4 className="text-[14px]">rytras Women's Top</h4>
                    <span className="text-[14px]">Qty: 1</span>
                  </div>
                </div>

                <span className="text-[14px] font-[500]"> &#8377; 599</span>
              </div>
              <div className="flex items-center justify-between py-2 ">
                <div className=" part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://m.media-amazon.com/images/I/71zu8EyjbrL._SY741_.jpg"
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="info">
                    <h4 className="text-[14px]">rytras Women's Top</h4>
                    <span className="text-[14px]">Qty: 1</span>
                  </div>
                </div>

                <span className="text-[14px] font-[500]"> &#8377; 599</span>
              </div>
              <div className="flex items-center justify-between py-2 ">
                <div className=" part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://m.media-amazon.com/images/I/71zu8EyjbrL._SY741_.jpg"
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="info">
                    <h4 className="text-[14px]">rytras Women's Top</h4>
                    <span className="text-[14px]">Qty: 1</span>
                  </div>
                </div>

                <span className="text-[14px] font-[500]"> &#8377; 599</span>
              </div>
              <div className="flex items-center justify-between py-2 ">
                <div className=" part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://m.media-amazon.com/images/I/71zu8EyjbrL._SY741_.jpg"
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="info">
                    <h4 className="text-[14px]">rytras Women's Top</h4>
                    <span className="text-[14px]">Qty: 1</span>
                  </div>
                </div>

                <span className="text-[14px] font-[500]"> &#8377; 599</span>
              </div>
              <div className="flex items-center justify-between py-2 ">
                <div className=" part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://m.media-amazon.com/images/I/71zu8EyjbrL._SY741_.jpg"
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="info">
                    <h4 className="text-[14px]">rytras Women's Top</h4>
                    <span className="text-[14px]">Qty: 1</span>
                  </div>
                </div>

                <span className="text-[14px] font-[500]"> &#8377; 599</span>
              </div>
              <div className="flex items-center justify-between py-2 ">
                <div className=" part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://m.media-amazon.com/images/I/71zu8EyjbrL._SY741_.jpg"
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="info">
                    <h4 className="text-[14px]">rytras Women's Top</h4>
                    <span className="text-[14px]">Qty: 1</span>
                  </div>
                </div>

                <span className="text-[14px] font-[500]"> &#8377; 599</span>
              </div>
              <div className="flex items-center justify-between py-2 ">
                <div className=" part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://m.media-amazon.com/images/I/71zu8EyjbrL._SY741_.jpg"
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="info">
                    <h4 className="text-[14px]">rytras Women's Top</h4>
                    <span className="text-[14px]">Qty: 1</span>
                  </div>
                </div>

                <span className="text-[14px] font-[500]"> &#8377; 599</span>
              </div>
            </div>

            <Button className="btn-org btb-lg w-full flex gap-2 items-center">
              {" "}
              <BsFillHandbagFill className="text-[18px]" />
              CheckOut
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
