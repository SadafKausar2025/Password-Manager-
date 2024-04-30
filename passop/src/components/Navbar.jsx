import React from "react";

function Navbar() {
  return (
    <nav className="bg-green-950 text-white">
      <div className="mycontainer text-black flex justify-between items-center px-4 py-5 h-14 ">
        <div className="logo font-bold text-white text-xl">
          <span className="text-green-700"> &lt;</span>
          <span>Pass</span>
          <span className="text-green-700">OP/&gt;</span>
        </div>
        {/* <ul>
          <li className="flex gap-4 text-white">
            <a className="hover:font-bold " href="/">
              Home
            </a>
            <a className="hover:font-bold " href="#">
              About
            </a>
            <a className="hover:font-bold " href="#">
              Contact
            </a>
          </li>
        </ul> */}
        <button className="flex  text-white bg-green-700 my-4 rounded-full justify-between items-center ring-white ring-1">
          <img
            className="invert p-1 w-12"
            src="icons/github.svg"
            alt="github logo"
          />
          <span className="font-bold px-2">Github</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
