import React from "react";
import { FaAddressBook, FaBars, FaFile, FaHome, FaServicestack, FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className=" p-2 px-7 relative  shadow-slate-800 shadow-sm">
      <nav className="  h-16 flex justify-between items-center">
        <hgroup>
          <h2 className=" font-bold text-2xl">Lu.dev</h2>
        </hgroup> 
        <ul className="links flex justify-between gap-8 font-bold text-white">
          <li>
            <a href="#" className="flex items-center">Home <FaHome className="mx-2 text-green-600" /></a>
          </li>
          <li>
            <a href="#" className="flex items-center">About <FaUserAlt className="mx-2 text-green-600" /></a>
          </li>
          <li>
            <a href="#" className="flex items-center">Projects <FaFile className="mx-2 text-green-600"/></a>
          </li>
          <li>
            <a href="#" className="flex items-center">Services <FaServicestack className="mx-2 text-green-600" /></a>
          </li>
          <li>
            <a href="#" className="flex items-center">Contact <FaAddressBook className="mx-2 text-green-600" /></a>
          </li>
        </ul>
      </nav>
      <FaBars className=" bar text-white absolute text-4xl right-7 top-6" />
    </header>
  );
};

export default Header;
