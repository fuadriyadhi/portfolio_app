import React from "react";
import { FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col p-[30px] bg-[#212121] text-orange-400 overflow-hidden
    max-w-[550px] mx-auto">
      <h1 className="text-[36px] font-light">Welcome</h1>

      <div className="mt-8 relative flex flex-col items-center">
        <div className="bg-[url('https://avatars.githubusercontent.com/u/76878221?v=4')] w-[500px] h-[500px] rounded-full bg-cover bg-center"></div>
        <div className="border-orange-400 border-[7px] rounded-full w-[520px] h-[520px] absolute -top-[10px]"></div>
      </div>

      <h1 className="text-[36px] font-light">
        Saya <br /> Fuad Riyadhi
      </h1>
      <p className="text-[16px] font-light">Saya Seorang Web Developer</p>
      <Link to={"/biodata"} className="w-[80px] h-[80px] bg-orange-400 text-gray-800 rounded-full fixed -bottom-4 -right-4 flex justify-center items-center">
        <FiPlay className="text-[42px]" />
      </Link>
    </div>
  );
}
