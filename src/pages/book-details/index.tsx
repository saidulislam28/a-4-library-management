import React from "react";
import { Link, useParams } from "react-router";
import { useGetSingleBookQuery } from "../../services/baseApi";

const bookDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleBookQuery(id);

  console.log(data?.data);
  const book = data?.data;

  return (
    <div className="min-h-[620px] bg-gray-50 py-10 px-4 flex items-start justify-center">
      <div className="bg-white rounded-xl shadow-md w-full max-w-3xl p-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
          {book?.title}
        </h2>

        {/* Info Section */}
        <div className="space-y-2 text-gray-700">
          <p>
            <span className="font-medium">Author:</span> {book?.author}
          </p>
          <p>
            <span className="font-medium">Genre:</span> {book?.genre}
          </p>
          <p>
            <span className="font-medium">ISBN:</span> {book?.isbn}
          </p>
          <p>
            <span className="font-medium">Copies Available:</span> {book?.copies}
          </p>
          <p>
            <span className="font-medium">Status:</span>{" "}
            <span
              className={`font-semibold ${
                book?.available ? "text-green-600" : "text-red-600"
              }`}
            >
              {book?.available ? "Available" : "Not Available"}
            </span>
          </p>
          <p className="mt-3">
            <span className="font-medium">Description:</span> {book?.description}
          </p>
        </div>

        {/* Borrow Button */}
        <div className="mt-6">
          <Link to={`/borrow/${book?._id}`}>
            <button className="bg-indigo-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-600 transition">
              Borrow
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default bookDetail;
