import Link from "next/link";
import React, { useState } from "react";
import { CiLogin } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div dir="rtl" className="container  absolute z-20">
      <div className={`${!isDropdownOpen && "shadow-lg "}`}>
        <div className="flex h-full justify-between p-4 px-8 items-center bg-meWhite text-meBlack2">
          <button>
            <img src="images/logo/logo.png" alt="" className="w-40" />
          </button>
          <div className="flex gap-8 ">
            <Link href="/login">
              <button>
                <CiLogin className="w-6 h-6 " />
              </button>
            </Link>

            <button>
              <CiShoppingCart className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="flex justify-between px-8 pb-4 bg-meWhite text-meBlack2">
          <div className="flex gap-4">
            <button onClick={toggleDropdown}>دسته بندی ها</button>
            <button>پیشنهادات</button>
            <button>تخفیف</button>
            <button>سوالات متداول</button>
            <button>درباره ما</button>
          </div>
          <div>
            <p className="text-mePrimary">همدان</p>
          </div>
        </div>
        {isDropdownOpen && (
          <div className="animation origin-top shadow-lg bg-meWhite text-meBlack2">
            <div className=" px-8 p-2 flex justify-between ">
              <div className="flex flex-col gap-1">
                <h2 className="border-b px-8">زنانه</h2>
                <a className="hover:bg-gray-100 cursor-pointer px-1 rounded">
                  تی شرت
                </a>
                <a className="hover:bg-gray-100 cursor-pointer px-1 rounded">
                  پولوشرت
                </a>
                <a className="hover:bg-gray-100 cursor-pointer px-1 rounded">
                  لباس راحتی و خواب
                </a>
                <a className="hover:bg-gray-100 cursor-pointer px-1 rounded">
                  مانتو
                </a>
                <a className="hover:bg-gray-100 cursor-pointer px-1 rounded">
                  شومیز
                </a>
                <a className="hover:bg-gray-100 cursor-pointer px-1 rounded">
                  هودی
                </a>
                <a className="hover:bg-gray-100 cursor-pointer px-1 rounded">
                  پالتو
                </a>
                <a className="hover:bg-gray-100 cursor-pointer px-1 rounded">
                  پیراهن و لباس مجلسی
                </a>
              </div>
              <div>
                <h2 className="border-b px-8">مردانه</h2>
              </div>
              <div>
                <h2 className="border-b px-8">بچگانه</h2>
              </div>
              <div>
                <h2 className="border-b px-8">ورزشی</h2>
              </div>
              <div className="flex flex-col">
                <h2 className="border-b px-8">زیبایی و سلامت</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
