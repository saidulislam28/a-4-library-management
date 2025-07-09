import React from "react";
import BookCard from "../../component/book/BookCard";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useGetBooksQuery } from "../../services/baseApi";

const index = () => {
  const book = useSelector((state: RootState) => state.book.book);

  const { data, isLoading, error } = useGetBooksQuery(undefined, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return <div>loading.......</div>;
  }

  if (error) {
    return <div>something Went wrong, Try again later.</div>;
  }

  console.log("books>>>>", data);
  return (
    <div className="min-h-[600px] max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5  p-5 md:p-2">
        {data?.data?.map((book: any, index: number) => (
          <BookCard book={book} key={index} />
        ))}
      </div>
    </div>
  );
};

export default index;
