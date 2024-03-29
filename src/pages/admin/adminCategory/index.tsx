import { CategoryTable } from "@/components";
import useGetCategory from "@/hooks/useGetCategory";
import { AdminLayout } from "@/layout";
import { request } from "@/utils/request";
import { useMutation } from "@tanstack/react-query";
import React, { ReactNode } from "react";

interface InputAdminCategory {
  selectCategory: string;
  subCategoryName: string;
}

const createCategory = async (categoryName: string) => {
  const response = await request.post("/categories", {
    name: categoryName,
  });
  return response.data;
};
// ==================
const createSubCategory = async ({
  selectCategory,
  subCategoryName,
}: InputAdminCategory) => {
  console.log(subCategoryName);
  const response = await request.post("/subcategories", {
    category: selectCategory,
    name: subCategoryName,
  });
  return response.data;
};

const AdminCategory = () => {
  const {
    data: category,
    isLoading: isLoadingcategory,
    isError: isErrorcategory,
    error: errorcategory,
  } = useGetCategory();
  // const queryClient = useQueryClient();
  // const category = queryClient.getQueryData(["data1"]);
  // console.log(data1);

  // const [selectCategory, setSelectCategory] = useState("");
  const mutation = useMutation(createCategory);
  const { mutate: mutationsub } = useMutation({
    // mutationKey: "subCategory",
    mutationFn: createSubCategory,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const categoryName = e.target.elements.categoryName.value;
    mutation.mutate(categoryName);
  };

  const handleSubmitSub = (e) => {
    e.preventDefault();
    const subCategoryName = e.target.elements.subCategoryName.value;
    const selectCategory = e.target.elements.selectCategory.value;
    mutationsub({ selectCategory, subCategoryName });
  };

  if (isLoadingcategory) {
    return <div>Loading...</div>;
  }

  return (
    <div dir="rtl" className="  mt-4 rounded-3xl flex gap-4">
      <div className="w-3/12 flex flex-col gap-10">
        <form
          action=""
          className="bg-white p-4 py-8 rounded-xl w-full flex flex-col gap-4 items-center  "
          onSubmit={handleSubmit}
        >
          <h2 className="pb-8">اضافه کردن دسته بندی</h2>
          <input
            type="text"
            name="categoryName"
            placeholder="دسته بندی را وارد کنید"
            className="p-2 rounded-xl w-full bg-gray-100"
          />
          <button className=" text-center bg-meGreen hover:bg-meWhite hover:text-meGreen hover:border-2 hover:border-meGreen text-meWhite rounded-xl p-2 w-full">
            اضافه کردن
          </button>
        </form>
        <form
          onSubmit={handleSubmitSub}
          action=""
          className="bg-white p-4  flex flex-col py-8 rounded-xl gap-4 items-center"
        >
          <h2 className="pb-7">اضافه کردن زیرگروه</h2>
          <input
            type="text"
            name="subCategoryName"
            placeholder="زیر گروه را وارد کنید"
            className="p-2 rounded-xl w-full bg-gray-100"
          />
          <select
            name="selectCategory"
            id=""
            className="p-2 rounded-xl w-full bg-gray-100"
          >
            <option value="" selected hidden>
              دسته بندی
            </option>
            {category?.categories.map((item: GetCategory) => {
              return (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <button className=" text-center bg-meGreen hover:bg-meWhite hover:text-meGreen hover:border-2 hover:border-meGreen text-meWhite rounded-xl p-2 w-full">
            اضافه کردن
          </button>
        </form>
      </div>
      <CategoryTable />
    </div>
  );
};

AdminCategory.getLayout = function (page: ReactNode) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default AdminCategory;
