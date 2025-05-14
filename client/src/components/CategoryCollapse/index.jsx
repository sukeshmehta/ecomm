import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import { LuSquareMinus } from "react-icons/lu";
import { FaRegSquarePlus } from "react-icons/fa6";

const CategoryCollapse = () => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);
  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };
  return (
    <>
      <div className="scroll">
        {/* only for fasion menu */}
        {/* for main submenu button & links */}
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.7)]">
                Fashion{" "}
              </Button>
            </Link>
            {/* for hide and show plus & minus button for outer submenu */}
            {submenuIndex === 0 ? (
              <LuSquareMinus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <FaRegSquarePlus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            )}

            {/* inner submenu button  */}

            {submenuIndex === 0 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.7)]">
                      Apparel{" "}
                    </Button>
                  </Link>
                  {/* for hide and show plus & minus button for inner submenu */}
                  {innerSubmenuIndex === 0 ? (
                    <LuSquareMinus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => setInnerSubmenuIndex(0)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => setInnerSubmenuIndex(0)}
                    />
                  )}

                  {/* inner submenu only items lists */}

                  {innerSubmenuIndex === 0 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px] !no-underline"
                        >
                          Smart Watch{" "}
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px] !no-underline"
                        >
                          Smart Phone{" "}
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px] !no-underline"
                        >
                          Smart-TV{" "}
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px] !no-underline"
                        >
                          T-Shirt{" "}
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px] !no-underline"
                        >
                          Shirt{" "}
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          {/* END OF FASION LIST */}

          {/* START OF   LIST */}

          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.7)]">
                Fasion{" "}
              </Button>
            </Link>
            {/* for hide and show plus & minus button for outer submenu */}
            {submenuIndex === 1 ? (
              <LuSquareMinus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            ) : (
              <FaRegSquarePlus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            )}

            {/* inner submenu button  */}

            {submenuIndex === 1 && (
              <ul className="submenu w-full pl-3 ">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.7)]">
                      Apparel{" "}
                    </Button>
                  </Link>
                  {/* for hide and show plus & minus button for inner submenu */}
                  {innerSubmenuIndex === 1 ? (
                    <LuSquareMinus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => setInnerSubmenuIndex(1)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => setInnerSubmenuIndex(1)}
                    />
                  )}

                  {/* inner submenu only items lists here */}

                  {innerSubmenuIndex === 1 && (
                    <ul className="inner_submenu  w-full pl-3 ">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px] !no-underline"
                        >
                          Smart Watch{" "}
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px] !no-underline"
                        >
                          Smart Phone{" "}
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px] !no-underline"
                        >
                          Smart-TV{" "}
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px] !no-underline"
                        >
                          T-Shirt{" "}
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px] !no-underline"
                        >
                          Shirt{" "}
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default CategoryCollapse;
