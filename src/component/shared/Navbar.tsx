import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="h-16 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between mt-5">
        <Link to={"/"}>
          <h1 className="text-xl font-bold">Logo</h1>
        </Link>
        <div className="flex items-center gap-5 font-medium">
          <Link to={"/books"}>Books</Link>
          <Link to={"/borrow"}>Borrow</Link>
        </div>
        <div>
          <Link to={"/create-book"}>
            <button className="px-4 py-2 border border-amber-400 rounded-2xl font-bold bg-amber-500 text-white cursor-pointer">Create Book</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
