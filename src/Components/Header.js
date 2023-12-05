import React from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header className="shadow-sm p-2 px-7 relative border-b border-slate-800">
      <nav className="  h-16 flex justify-between items-center">
        <hgroup>
          <h2 className=" font-bold text-2xl">Lu.dev</h2>
        </hgroup> 
        <ul className="links flex justify-between gap-8 font-bold text-white">
          <li>
            <a href="#">Home </a>
          </li>
          <li>
            <a href="#">About </a>
          </li>
          <li>
            <a href="#">Projects </a>
          </li>
          <li>
            <a href="#">Services </a>
          </li>
          <li>
            <a href="#">Contact </a>
          </li>
        </ul>
      </nav>
      <FaBars className=" bar text-white absolute text-4xl right-7 top-6" />
    </header>
  );
};

export default Header;
