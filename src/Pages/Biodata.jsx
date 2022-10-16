import React from "react";
import BiodataCard from "../components/BiodataCard";
import Header from "../components/Header";
import { FiUser, FiHome, FiPhone, FiMail, FiLinkedin, FiMap, FiGlobe, FiChevronRight } from "react-icons/fi";
import dataBio from "../constant/dataBio";
import ModalMenu from "../components/ModalMenu";

const handleIcon = (name)=>{
  switch(name){
    case "user" :
      return <FiUser/>

    case "phone" :
      return <FiPhone/>

    case "email" :
      return <FiMail/>

    case "linkedin" :
      return <FiLinkedin/>

    case "map" :
      return <FiMap/>

    case "web" :
      return <FiGlobe/>

    default :
      return <FiChevronRight/>
  }
}

export default function Biodata() {
  return (
    <div className="w-screen min-h-screen flex flex-col bg-[#212121] p-[30px] text-orange-400 overflow-hidden max-w-[500px] mx-auto">
      <Header title={"Biodata"} />
      <div className="mt-[60px] flex flex-col justify-center items-center relative">
        <img className="w-[200px] rounded-full object-cover" src="https://avatars.githubusercontent.com/u/76878221?v=4" alt="profile" />
        <div className="w-[220px] h-[220px] border-[3px] rounded-full border-orange-400 border-dashed absolute"></div>
      </div>
      <div className="flex flex-col gap-10 mt-6 mb-[100px]">
        {dataBio.map((item)=>{
          return(
            <BiodataCard
            key={item.id} 
            label={item.label} 
            value={item.value} 
            icons={item.icons && handleIcon(item.icons)} 
            link={item.link} />
          )
        })}
      </div>

      <ModalMenu/>
    </div>
  );
}
