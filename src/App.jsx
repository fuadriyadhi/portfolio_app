import React from "react";
import { Routes, Route } from "react-router-dom";
import Biodata from "./Pages/Biodata";
import DetailSkill from "./Pages/DetailSkill";
import Home from "./Pages/Home";
import Skill from "./Pages/Skill";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/biodata" element={<Biodata />} />
      <Route path="/skill" element={<Skill />} />
      <Route path="/skill/:item" element={<DetailSkill />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}
