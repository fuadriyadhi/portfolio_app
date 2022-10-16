import React from "react";
import { Link } from "react-router-dom";

export default function SkillCard({ title, image, content, link, multiLink }) {
  return (
    <div className="bg-white flex flex-col gap-2 w-full p-[20px] rounded-lg shadow-lg">
      <h1 className="text-[16px] font-bold capitalize">{title}</h1>

      <img src={image} alt={title} className="w-full h-[200px] object-cover rounded-lg" />

      <p className="font-light">{content}</p>

      {link && (
        <Link to={link} className="h-10 bg-orange-400 rounded-full w-[180px] flex justify-center items-center mx-auto">
          Lihat Portfolio
        </Link>
      )}

      {
        multiLink && (
          <div className="mt-4 text-sky-500 m-auto">
            {multiLink.map((i)=>{
              return (
                <a href={i.url} key={i.id} target="_blank" className="mr-2 italic">{i.name}</a>
              )
            })}
          </div>
        )
      }
    </div>
  );
}
