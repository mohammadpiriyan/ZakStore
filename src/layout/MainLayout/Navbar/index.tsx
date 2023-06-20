import SubCategory from "@/components/SubCategory";
import useGetCategory from "@/hooks/useGetCategory";
import { request } from "@/utils/request";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiLogin } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import Cookies from "universal-cookie";

// useEffect(() => {
//   const getData = async () => {
//     const { data } = await axios.get("http://localhost:8000/api/categories");

//     console.log(data.data.categories);
//     setCategoryData(data.data.categories);
//     return data;
//   };
//   getData();
// }, []);
// =====================map============================
// {categoryData &&
//   categoryData.map((item) => {
//     return (
//       <div key={item.id}>
//         <h2 className="border-b px-8">{item.name}</h2>
//       </div>
//     );
//   })}

// ========================staticReq==========================
// const fetchData = async () => {
//   const response = await axios.get("http://localhost:8000/api/categories");
//   // console.log(response.data.data);
//   return response.data.data;
// };
// ----------------------------
// const { data, isLoading, isError, error } = useQuery(["data"], fetchData);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   if (isError) {
//     return <div>Error:{error.message}</div>;
//   }
// ---------------------------

const fetchData = async (url: string) => {
  const response = await request.get(url);
  return response.data.data;
};

const Navbar = () => {
  const cookie = new Cookies();
  // console.log(cookie.get("adminToken"));

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const {
    data: category,
    isLoading: isLoadingcategory,
    isError: isErrorcategory,
    error: errorcategory,
  } = useGetCategory();

  if (isLoadingcategory) {
    return <div>Loading...</div>;
  }
  // if (isError1) {
  //   return <div>Error:{error1}</div>;
  // }

  // console.log(data1.categories);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div dir="rtl" className="container  absolute z-20">
      <div>
        <div className="flex h-full justify-between p-4 px-8 items-center bg-meMain text-meBlack2">
          <button>
            <Link href="/">
              <img src="/images/logo/logo.png" alt="" className="w-40" />
            </Link>
          </button>

          <div className="flex gap-4 items-center">
            <button onClick={toggleDropdown}>دسته بندی ها</button>
            <div className="w-[5px] h-[5px] bg-meBlackDot rounded-full"></div>
            <button>تخفیف</button>
            <div className="w-[5px] h-[5px] bg-meBlackDot rounded-full"></div>
            <button>درباره ما</button>
          </div>
          <div className="flex gap-4 ">
            <Link href="/loginAdmin">
              <button>
                <img src="/images/icon/admin2.png" alt="" className="w-6" />
              </button>
            </Link>
            <Link href="/loginUser">
              <button>
                <img src="/images/icon/login2.png" alt="" className="w-6" />
              </button>
            </Link>

            <Link href="/cart">
              <button>
                <img src="/images/icon/Cart2.png" alt="" className="w-6" />
              </button>
            </Link>
          </div>
        </div>

        {isDropdownOpen && (
          <div className="animation origin-top shadow-lg bg-meMain text-meBlack2">
            <div className=" px-8 p-2 flex justify-between ">
              {category.categories &&
                category.categories.map((item: GetCategory) => {
                  return (
                    <div key={item._id} className="flex flex-col gap-1">
                      <h2 className="border-b px-8">{item.name}</h2>
                      <SubCategory
                        id={item._id}
                        setIsDropdownOpen={setIsDropdownOpen}
                        isDropdownOpen={isDropdownOpen}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
