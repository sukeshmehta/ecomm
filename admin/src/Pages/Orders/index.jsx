import React, { useState } from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import Badge from "../../components/Badge";
import SearchBox from "../../Components/SearchBox";

const Orders = () => {
  const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null);
  const isShowOrderProduct = (index) => {
    if (isOpenOrderProduct === index) {
      setIsOpenOrderProduct(null);
    } else {
      setIsOpenOrderProduct(index);
    }
  };

  return (
    <div className="card my-4 shadow-md sm:rounded-lg bg-white">
      <div className="flex items-center justify-between py-5 px-5">
        <h2 className="text-[20px] font-[600] ">Recent Orders</h2>
        <div className="w-[40%]">
          <SearchBox />{" "}
        </div>
      </div>

      <div className=" relative overflow-x-auto mt-5 ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 !rounded-md">
          <tbody>
            <tr className="border-b dark:border-gray-500">
              <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                Order Id
              </th>
              <td className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                3f6377sd83r3jd38
              </td>
            </tr>
            <tr className="border-b dark:border-gray-500">
              <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                Payment Id
              </th>
              <td className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                64734364372376
              </td>
            </tr>
            <tr className="border-b dark:border-gray-500">
              <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                Name
              </th>
              <td className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                Raju
              </td>
            </tr>
            <tr className="border-b dark:border-gray-500">
              <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                Phone Number
              </th>
              <td className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                +91 8473667377
              </td>
            </tr>
            <tr className="border-b dark:border-gray-500">
              <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                Address
              </th>
              <td className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                Rajendra nagar, near gov. Bus stand, colony-6, Patna, Bihar
              </td>
            </tr>
            <tr className="border-b dark:border-gray-500">
              <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                Pin Code
              </th>
              <td className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                123456
              </td>
            </tr>
            <tr className="border-b dark:border-gray-500">
              <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                User Id
              </th>
              <td className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                raju1123
              </td>
            </tr>
            <tr className="border-b dark:border-gray-500">
              <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                Email
              </th>
              <td className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                raju@example.com
              </td>
            </tr>
            <tr className="border-b dark:border-gray-500">
              <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                Total Amount
              </th>
              <td className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                &#8377; 100
              </td>
            </tr>
            <tr className="border-b dark:border-gray-500">
              <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                Order Status
              </th>
              <td className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                <Badge status="delivered" />
              </td>
            </tr>
            <tr className="border-b dark:border-gray-500">
              <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                Date
              </th>
              <td className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                2025-04-21
              </td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                <span className="mr-5">See Your Order Details</span>
                <Button
                  className="!w-[35px] h-[35px] !min-w-[35px] !rounded-full !bg-blue-500 "
                  onClick={() => isShowOrderProduct(0)}
                >
                  {isOpenOrderProduct === 0 ? (
                    <FaAngleUp className="text-[16px] !text-white" />
                  ) : (
                    <FaAngleDown className="text-[16px] !text-white" />
                  )}
                </Button>
              </th>
              <td className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300"></td>
            </tr>
          </tbody>

          {isOpenOrderProduct === 0 && (
            <tr>
              <td className="bg-[#f1f1f1]" colSpan="6">
                <div className=" relative overflow-x-auto mt-5 ">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 !rounded-md">
                    <tbody className="gap-5">
                      <tr className="border-b dark:border-gray-500">
                        <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          Product Id
                        </th>
                        <td className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          23hj42j2h423h4
                        </td>
                      </tr>
                      <tr className="border-b dark:border-gray-500">
                        <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          Product Title
                        </th>
                        <td className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          rytras Women's Embroidered Regular Top
                        </td>
                      </tr>
                      <tr className="border-b dark:border-gray-500">
                        <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          Image
                        </th>
                        <td className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          <img
                            src="https://m.media-amazon.com/images/I/61NShCPWdnL._SY741_.jpg"
                            className="w-[40px] h-[40px] object-cover rounded-md "
                          />
                        </td>
                      </tr>
                      <tr className="border-b dark:border-gray-500">
                        <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          Quantity
                        </th>
                        <td className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          1
                        </td>
                      </tr>
                      <tr className="border-b dark:border-gray-500">
                        <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          Price
                        </th>
                        <td className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          &#8377; 1234
                        </td>
                      </tr>
                      <tr className="border-b dark:border-gray-500">
                        <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          Sub Total
                        </th>
                        <td className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          &#8377; 1234
                        </td>
                      </tr>
                    </tbody>
                    <br />
                    <tbody className="gap-5 !mt-5 ">
                      <tr className="border-b dark:border-gray-500">
                        <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          Product Id
                        </th>
                        <td className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          7d73jh4ldmf443i
                        </td>
                      </tr>
                      <tr className="border-b dark:border-gray-500">
                        <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          Product Title
                        </th>
                        <td className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          rytras Women's Embroidered Regular Top
                        </td>
                      </tr>
                      <tr className="border-b dark:border-gray-500">
                        <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          Image
                        </th>
                        <td className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          <img
                            src="https://m.media-amazon.com/images/I/71pS6mmMQdL._SY741_.jpg"
                            className="w-[40px] h-[40px] object-cover rounded-md "
                          />
                        </td>
                      </tr>
                      <tr className="border-b dark:border-gray-500">
                        <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          Quantity
                        </th>
                        <td className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          1
                        </td>
                      </tr>
                      <tr className="border-b dark:border-gray-500">
                        <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          Price
                        </th>
                        <td className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          &#8377; 419
                        </td>
                      </tr>
                      <tr className="border-b dark:border-gray-500">
                        <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          Sub Total
                        </th>
                        <td className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          &#8377; 419
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          )}
        </table>
      </div>
    </div>
  );
};

export default Orders;
