import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="shadow-sm bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-semibold">
            Book <span className="font-bold">Management</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <Link to="/books" className="hover:text-blue-600 transition">All Books</Link>
            <Link to="/create-book" className="hover:text-blue-600 transition">Add Books</Link>
            <Link to="/borrow-summary" className="hover:text-blue-600 transition">Borrow Summary</Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-3 font-medium">
            <Link to="/books" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">All Books</Link>
            <Link to="/create-book" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Add Books</Link>
            <Link to="/borrow-summary" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Borrow Summary</Link>
          </div>
        </div>
      )}
    </div>
  );
}
