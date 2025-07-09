import React from "react";
import { useGetBorrowBooksQuery } from "../../services/baseApi";

const index = () => {
  const { data, isLoading, isError, error } = useGetBorrowBooksQuery("borrow", {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  console.log(data?.data);

  return (
    <div className="min-h-[600px] max-w-7xl mx-auto">
      <h1 className="text-center text-4xl font-bold my-10">
        Borrowed Books Summary
      </h1>
      <div className="grid gap-4 md:grid-cols-3">
        {data?.data?.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              {item.book.title}
            </h2>
            <p className="text-lg text-gray-600">
              <span className="font-medium">ISBN:</span> {item.book.isbn}
            </p>
            <p className="text-lg font-bold text-gray-600">
              <span className="font-medium">Total Borrowed:</span>{" "}
              {item.totalQuantity} pieces
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
