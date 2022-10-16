import React from "react";
import Header from "../components/Header";
import ModalMenu from "../components/ModalMenu";
import SkillCard from "../components/SkillCard";
import dataSkill from "../constant/dataSkill";

export default function Skill() {
  return (
    <div className="w-screen min-h-screen flex flex-col bg-[#212121] p-[30px] overflow-hidden max-w-[500px] mx-auto">
      <Header title={"Skill"} />

      <div className="flex flex-col gap-4 mt-12">
        {dataSkill.map((item) => {
          return <SkillCard 
            key={item.id}
            title={item.title}
            content={item.content}
            image={item.image} 
            link={item.link} 
            />;
        })}
      </div>

      <ModalMenu />
    </div>
  );
}
