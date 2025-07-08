import React from "react";
import { Link } from "react-router";

const BookCard = ({ book }: any) => {
  return (
    <div className="max-w-64 rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Book image not provided"
      />
      <div className="px-2 py-4">
        <div className="font-bold text-xl mb-2 line-clamp-1">{book?.title}</div>
        <h5 className="font-medium text-sm">
          Author: <span className="text-gray-500">{book?.author}</span>
        </h5>
        <h5 className="font-medium text-sm">
          Genre: <span className="text-gray-500">{book?.genre}</span>
        </h5>
        {/* <h5 className="font-medium text-sm">
          ISBN: <span className="text-gray-500">Saidul</span>
        </h5> */}
      </div>
      <div className="px-2 pt-4 pb-2 flex items-center justify-between">
        <Link to={`/edit-book/${book?._id}`}>
          <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
            Edit
          </button>
        </Link>
        <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
          Delete
        </button>
        <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
          Borrow
        </button>
      </div>
    </div>
  );
};

export default BookCard;
