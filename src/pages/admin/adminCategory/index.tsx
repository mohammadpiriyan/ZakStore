import { AdminLayout } from "@/layout";
import React, { ReactNode } from "react";

const AdminCategory = () => {
  return (
    <div dir="rtl" className="bg-meWhite p-4 mt-4 rounded-3xl flex">
      <div className="w-1/2">
        <form
          action=""
          className=" flex flex-col gap-4 items-center border-b-2 border-meBlack2 pb-4"
        >
          <input
            type="text"
            placeholder="دسته بندی را وارد کنید"
            className="p-2 rounded-xl w-4/6"
          />
          <button className=" text-center bg-meGreen hover:bg-meWhite hover:text-meGreen hover:border-2 hover:border-meGreen text-meWhite rounded-xl p-2 w-4/6">
            اضافه کردن
          </button>
        </form>
        <form
          action=""
          className=" flex flex-col gap-4 items-center border-b-2 border-meBlack2 pb-4 mt-4"
        >
          <input
            type="text"
            placeholder="زیر دسته را وارد کنید"
            className="p-2 rounded-xl w-4/6"
          />
          <select name="" id="" className="p-2 rounded-xl w-4/6">
            <option value="" selected hidden>
              دسته بندی
            </option>
          </select>
          <button className=" text-center bg-meGreen hover:bg-meWhite hover:text-meGreen hover:border-2 hover:border-meGreen text-meWhite rounded-xl p-2 w-4/6">
            اضافه کردن
          </button>
        </form>
      </div>
      <div></div>
    </div>
  );
};

AdminCategory.getLayout = function (page: ReactNode) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default AdminCategory;
