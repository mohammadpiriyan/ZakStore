import React from "react";
import { useQuery } from "@tanstack/react-query";
import { request } from "@/utils/request";

const fetchData = async (url: string) => {
  const response = await request.get(url);
  return response.data.data.subcategories;
};
const SubCategory = ({ id }: { id: string | undefined }) => {
  // console.log(id);
  const {
    data: data2,
    isLoading: isLoading2,
    isError: isError2,
    error: error2,
  } = useQuery([`data${id}`], () => fetchData(`/subcategories?category=${id}`));

  if (isLoading2) {
    return <div>Loading...</div>;
  }
  return data2?.map((item2: any) => {
    return (
      <a
        key={data2._id}
        onClick={(e) => console.log(e.target)}
        className="hover:bg-gray-100 cursor-pointer px-1 rounded"
      >
        {item2.name}
      </a>
    );
  });
};

export default SubCategory;
