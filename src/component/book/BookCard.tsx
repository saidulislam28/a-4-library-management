import React, { useState } from "react";
import { data, Link } from "react-router";
import { useDeleteBookMutation } from "../../services/baseApi";
import { toast } from "react-toastify";

const BookCard = ({ book }: any) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const [deleteBookFn, { data }] = useDeleteBookMutation();

  const handleDelete = async (id: any) => {
    const response = await deleteBookFn(id);
    if (response?.data?.success) {
      toast.success(response.data.message);
      setShowConfirm(false);
    }
  };
  return (
    <div className="max-w-full md:max-w-64 overflow-hidden shadow-lg rounded-2xl relative">
      <Link to={`/books/${book?._id}`}>
        <div className="absolute top-2 -right-8 -translate-x-1/2 bg-gray-200 hover:bg-white cursor-pointer rounded-full px-3 py-1 text-sm font-semibold text-gray-700 shadow z-20">
          Details
        </div>
      </Link>
      <img
        className="w-full"
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Book image not provided"
      />
      <div className="px-5 lg:px-2 py-4">
        <div className="font-bold text-xl mb-2 line-clamp-1">{book?.title}</div>
        <h5 className="font-medium text-sm">
          Author: <span className="text-gray-500">{book?.author}</span>
        </h5>
        <h5 className="font-medium text-sm">
          Genre: <span className="text-gray-500">{book?.genre}</span>
        </h5>
        <h5 className="font-medium text-sm">
          ISBN: <span className="text-gray-500">{book?.isbn}</span>
        </h5>
        <h5 className="font-medium text-sm">
          Copies: <span className="text-gray-500">{book?.copies}</span>
        </h5>
        <h5 className="font-medium text-sm">
          Available Book:{" "}
          <span className="text-gray-500">
            {book?.available ? "Available" : "Not Available"}
          </span>
        </h5>
        {/* <h5 className="font-medium text-sm">
          ISBN: <span className="text-gray-500">Saidul</span>
        </h5> */}
      </div>
      <div className="px-5 lg:px-2 pt-4 pb-2 flex items-center justify-between">
        <Link to={`/edit-book/${book?._id}`}>
          <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
            Edit
          </button>
        </Link>

        <div
          onMouseEnter={() => setShowConfirm(true)}
          onMouseLeave={() => setShowConfirm(false)}
          className="relative hidden md:inline-block"
        >
          {/* PopConfirm Box */}
          {showConfirm && (
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 bg-white shadow-md  rounded-lg px-4 py-2 z-10 w-48 text-center">
              <p className="text-lg text-gray-800 mb-2">Are you sure?</p>
              <div className="flex justify-center gap-2">
                <button
                  onClick={() => handleDelete(book?._id)}
                  className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600 cursor-pointer"
                >
                  Yes
                </button>
                <button
                  onClick={() => setShowConfirm(false)}
                  className="bg-gray-300 text-gray-700 text-sm px-3 py-1 rounded hover:bg-gray-400 cursor-pointer"
                >
                  No
                </button>
              </div>
            </div>
          )}

          {/* Main Delete Button */}
          <button
            onClick={() => setShowConfirm(false)}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer"
          >
            Delete
          </button>
        </div>

        {/* Delete Button with PopConfirm */}
        <div className="relative inline-block md:hidden">
          {/* PopConfirm Box */}
          {showConfirm && (
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 bg-white shadow-md rounded-lg px-4 py-2 z-10 w-48 text-center border">
              <p className="text-lg text-gray-800 mb-2">Are you sure?</p>
              <div className="flex justify-center gap-2">
                <button
                  onClick={() => {
                    handleDelete(book?._id);
                    setShowConfirm(false);
                  }}
                  className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600"
                >
                  Yes
                </button>
                <button
                  onClick={() => setShowConfirm(false)}
                  className="bg-gray-300 text-gray-700 text-sm px-3 py-1 rounded hover:bg-gray-400"
                >
                  No
                </button>
              </div>
            </div>
          )}

          {/* Main Delete Button */}
          <button
            onClick={() => setShowConfirm((prev) => !prev)}
            className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer"
          >
            Delete
          </button>
        </div>

        <Link to={`/borrow/${book?._id}`}>
          <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
            Borrow
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
