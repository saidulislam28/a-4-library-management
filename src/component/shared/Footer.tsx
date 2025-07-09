import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-600 py-4 mt-10 shadow-inner">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Book Management. All rights reserved.</p>
        <p className="mt-1">Crafted with by Md Saidul Houlader</p>
      </div>
    </footer>
  );
};

export default Footer;
