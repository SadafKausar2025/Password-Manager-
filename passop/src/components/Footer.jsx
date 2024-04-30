import React from "react";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center bg-green-950 text-white text-bold w-full h-15">
      <div className="logo font-bold text-white text-xl">
        <span className="text-green-700"> &lt;</span>
        <span>Pass</span>
        <span className="text-green-700">OP/&gt;</span>
      </div>
      <div className="flex justify-center items-center">
        Created with
        <img className="w-7 mx-2" src="icons/heart.png" alt="heart" /> by sadaf
      </div>
    </div>
  );
}

export default Footer;
