import React from "react";
import {
  FaCss3,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaJsSquare,
  FaLinkedin,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";

const Body = () => {
  return (
    <>
      <div className="body flex items-center justify-around w-3/5 mx-auto mt-14 shadow-slate-800 rounded-xl  shadow-md py-12">
        <div className="w-2/3 p-3 info">
          <h1 className=" text-4xl font-extrabold mb-5">
            I am Frontend Web Developer
          </h1>
          <p>
            I build websites for services
            <br />
            to enchance their business and
            <br />
            reach more audience
          </p>
          <div className="more mt-5 flex gap-3">
            <a href="https://github.com/LightUniversal">
              <FaGithub className=" text-xl" />
            </a>
            <a href="#">
              <FaTwitter className=" text-xl" />
            </a>
            <a href="#">
              <FaLinkedin className=" text-xl" />
            </a>
          </div>
          <div className="contacts mt-10">
            <a href="tel:+2347058032078" className=" w-36 justify-center py-2 px-5 bg-slate-800 flex items-center text-white rounded-md">Call Me <FaPhone className="mx-2" /></a>
          </div>
        </div>
        <div className="myprofileimage">
          <img
            src="/Lu.jpg"
            alt="my profile image"
            className="profileimage w-60 rounded-full shadow-lg"
          />
        </div>
      </div>
      <div className="stacks flex gap-5 items-center w-3/5 mx-auto mt-24 px-12">
        <span className=" font-bold border-r pr-4 border-slate-500 h-12 flex items-center">
          My Tech Stack
        </span>
        <span className=" flex items-center shadow-md shadow-slate-800 p-2 rounded-lg">
        <FaHtml5 className=" text-orange-500 text-3xl mx-2" /> HTML
        </span>
        <span className=" flex items-center shadow-md shadow-slate-800 p-2 rounded-lg">
        <FaCss3Alt className=" text-blue-500 text-3xl mx-2" /> CSS
        </span>
        <span className=" flex items-center shadow-md shadow-slate-800 p-2 rounded-lg">
        <FaJsSquare className=" text-yellow-400 text-3xl mx-2" /> JavaScript
        </span>
        <span className=" flex items-center shadow-md shadow-slate-800 p-2 rounded-lg">
        <FaReact className=" text-blue-300 text-3xl mx-2" /> React.js
        </span>
        <span className=" flex items-center shadow-md shadow-slate-800 p-2">
        <FaNodeJs className=" text-green-700 font-bold text-3xl mx-2" /> Node.js
        </span>
      </div>
    </>
  );
};

export default Body;
