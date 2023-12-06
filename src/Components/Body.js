import React from "react";
import {
  FaCertificate,
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
  FaSms,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";

const Body = () => {
  return (
    <>
      <div className="body flex items-center justify-around w-3/5 mx-auto mt-14 shadow-slate-800 rounded-xl   py-12">
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
          <div className="contacts mt-10 flex gap-3">
            <a href="tel:+2347058032078" className=" w-36 justify-center py-2 px-5 bg-slate-800 flex items-center text-white rounded-md">Call Me <FaPhone className="mx-2" /></a>
            <a href="tel:+2347058032078" className=" w-36 justify-center py-2 px-5 bg-green-100 flex items-center text-slate-800 rounded-md">SMS <FaSms className="mx-2" /></a>
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
        <span className=" flex items-center  p-2 rounded-lg border-b">
        <FaHtml5 className=" text-orange-500 text-3xl mx-2" /> HTML
        <small className=" border-l ml-2 pl-2">
          My experience with HTML is over 6 years and counting. Having a book that was very easy and simple to understand, I read and practiced alongside and was able to finish the book. The book is two in one, for HTML and CSS. The total number of pages is 541.
        </small>
        </span>
        <span className=" flex items-center  p-2 rounded-lg border-b">
        <FaCss3Alt className=" text-blue-500 text-3xl mx-2" /> CSS
        <small className=" border-l ml-2 pl-2">
          I started learning CSS ( Cascading Style Sheet ) immediately I finished HTML. I am so good with css, that I can manipulate whatever that is required to achieve the needed result
        </small>
        </span>
        <span className=" flex items-center  p-2 rounded-lg border-b">
        <FaJsSquare className=" text-yellow-400 text-3xl mx-2" /> JavaScript
        <small className=" border-l ml-2 pl-2">
          I picked up JavaScript, when I was very good with HTML and CSS and with the understanding that it adds functionality to the web page, I was excited to learning it. I read an awesome book, with total of 643 pages. I read till around page 431, then completed the rest using the Traversy media video and Net Ninja Video
        </small>
        </span>
        <span className=" flex items-center  p-2 rounded-lg border-b">
        <FaReact className=" text-blue-300 text-3xl mx-2" /> React.js
        <small className=" border-l ml-2 pl-2">
          I started React.js after learning vue because of the high demand for it and also considering how easy it makes developing with JavaScript. I became very good with react and further enrolled for Traversy Media MERN stack. 
          <br />
          <a href="#" className="mt-2 flex items-center justify-center bg-slate-700 rounded-lg w-48 p-3">MERN Certification <FaCertificate className="mx-1 text-orange-500" /></a>
        </small>
        </span>
        <span className=" flex items-center  p-2">
        <FaNodeJs className=" text-green-700 font-bold text-3xl mx-2" /> Node.js
        </span>
      </div>
    </>
  );
};

export default Body;
