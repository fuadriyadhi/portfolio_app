import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ModalMenu() {
  const [show, setShow] = useState(false);

  const handleShowModal = () => {
    setShow(!show);
  };

  return (
    <>
      {show && (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#212121]/90 fixed top-0 left-0 z-[200]  ">
          <Link to={"/biodata"} className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
            Biodata
          </Link>
          <Link to={"/skill"} className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
            Skill
          </Link>
          <a href={"tel:+62955366044926"} target="_blank" className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
            Contact
          </a>
          <a href={"https://www.linkedin.com/in/fuad-riyadhi-746302205/"} target="_blank" className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
            LinkedIn
          </a>
          <a href={"https://github.com/fuadriyadhi"} target="_blank" className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
            Github
          </a>
          <a href={"https://stackblitz.com/"} target="_blank" className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
            Stackblitz
          </a>
          <Link to={"/"} className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
            Home
          </Link>
        </div>
      )}
      <button className="w-[80px] h-[80px] bg-orange-400 text-gray-800 rounded-full fixed -bottom-4 -right-4 flex justify-center items-center z-[250]" onClick={handleShowModal}>
        <FiMenu />
      </button>
    </>
  );
}
