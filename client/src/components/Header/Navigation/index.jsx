// import style from './style.css';
import "./style.css";
// import "../Navigation/style.css";

import Button from "@mui/material/Button";
import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "@mui/material";
import { SlRocket } from "react-icons/sl";
import CategoryPanel from "./CategoryPanel";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };
  return (
    <>
      <nav>
        <div className='container flex items-center justify-end gap-8'>
          <div className='col_1 w-[20%] '>
            <Button
              className='!text-black gap-2 w-full'
              onClick={openCategoryPanel}
            >
              <RiMenu2Line className='text-[18px]' />
              Shop By Categories
              <MdOutlineKeyboardArrowDown className='text-[18px] ml-auto font-bold' />
            </Button>
          </div>
          <div className='col_2 w-[60%] '>
            <ul className='flex items-center gap-3 nav'>
              <li className='list-none relative'>
                <Link to='/' className='link transition text-[14px] font-[500]'>
                  <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>
                    Home
                  </Button>
                </Link>
              </li>
              <li className='list-none relative object-cover'>
                <Link to='/' className='link transition text-[14px] font-[500]'>
                  <Button className='link transition  !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>
                    Fashion
                  </Button>
                </Link>
                <div className='submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all'>
                  {/*  men section */}

                  <ul className='submenu absolute top-[100%] left-[0%] min-w-[200px] bg-white shadow-md '>
                    <li className='list-none w-full relative'>
                      <Link to='/' className='w-full'>
                        <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start'>
                          Men
                        </Button>
                      </Link>

                      {/* menu for men */}

                      <ul className='submenu absolute top-[0%] left-[100%] min-w-[200px] bg-white shadow-md '>
                        <li className='list-none'>
                          <Link to='/' className='w-full'>
                            <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start'>
                              Jeans
                            </Button>
                          </Link>
                        </li>
                        <li className='list-none'>
                          <Link to='/' className='w-full'>
                            <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start'>
                              Shirt
                            </Button>
                          </Link>
                        </li>
                        <li className='list-none'>
                          <Link to='/' className='w-full'>
                            <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start'>
                              T-Shirt
                            </Button>
                          </Link>
                        </li>
                        <li className='list-none'>
                          <Link to='/' className='w-full'>
                            <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start'>
                              Caps
                            </Button>
                          </Link>
                        </li>
                        <li className='list-none'>
                          <Link to='/' className='w-full'>
                            <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start'>
                              Belt
                            </Button>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    {/*  women section */}
                    {/* menu for women */}

                    <li className='list-none'>
                      <Link to='/' className='w-full'>
                        <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start'>
                          Women
                        </Button>
                      </Link>
                    </li>
                    <li className='list-none'>
                      <Link to='/' className='w-full'>
                        <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start'>
                          Kids
                        </Button>
                      </Link>
                    </li>
                    <li className='list-none'>
                      <Link to='/' className='w-full'>
                        <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start'>
                          Girls
                        </Button>
                      </Link>
                    </li>
                    <li className='list-none'>
                      <Link to='/' className='w-full'>
                        <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start'>
                          Boys
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='list-none'>
                <Link to='/' className='link transition text-[14px] font-[500]'>
                  <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>
                    Electronics
                  </Button>
                </Link>
              </li>
              <li className='list-none'>
                <Link to='/' className='link transition text-[14px] font-[500]'>
                  <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>
                    Bags
                  </Button>
                </Link>
              </li>
              <li className='list-none'>
                <Link to='/' className='link transition text-[14px] font-[500]'>
                  <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>
                    Footwear
                  </Button>
                </Link>
              </li>
              <li className='list-none'>
                <Link to='/' className='link transition text-[14px] font-[500]'>
                  <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className='list-none'>
                <Link to='/' className='link transition text-[14px] font-[500]'>
                  <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>
                    Beauty
                  </Button>
                </Link>
              </li>
              <li className='list-none'>
                <Link to='/' className='link transition text-[14px] font-[500]'>
                  <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4'>
                    Jewellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className='col_2 w-[20%]'>
            <p className='text-[13px] font-[500] flex items-center gap-3 mb-0 mt-0'>
              {" "}
              <SlRocket className='text-[18px] font-[500]' />
              All India Free Delevery
            </p>
          </div>
        </div>
      </nav>

      {/* category panel conponents */}
      <CategoryPanel
        isOpenCatPanel={isOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
