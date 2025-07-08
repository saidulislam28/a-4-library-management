import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-600 py-4 mt-10 shadow-inner">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Library Management System. All rights reserved.</p>
        <p className="mt-1">Made with by Md Saidul Houlader</p>
      </div>
    </footer>
  );
};

export default Footer;
