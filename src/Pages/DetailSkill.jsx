import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ModalMenu from "../components/ModalMenu";
import dataDetailSkill from "../constant/dataDetailSkill";
import SkillCard from './../components/SkillCard';
export default function DetailSkill() {
  const { item } = useParams("item");

  return (
    <div className="w-screen min-h-screen flex flex-col bg-slate-100 p-[30px] overflow-hidden max-w-[500px] mx-auto">
      <Header title={item} />
      <div className="mt-12 flex flex-col gap-4">
        <img src={dataDetailSkill[item].bannerImage} alt={'HTML'} 
        className="w-full h-[200px] object-cover rounded-lg"/>
        <p>{dataDetailSkill[item].description}</p>
      </div>
      <div className="flex flex-col gap-4 mt-4">
          {dataDetailSkill[item].data.map((v)=>{
            return(
              <SkillCard 
              key={v.id}
              title={item}
              content={v.title}
              image={v.image}
              multiLink={v.multiLink}
              />
            )
          })}
      </div>
      <ModalMenu />
    </div>
  );
}
