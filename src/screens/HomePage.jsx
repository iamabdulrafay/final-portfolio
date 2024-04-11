import React from "react";
import Home1 from "../Sections/Home1/Home1";
import About from "../Sections/about/About";
import Skills from "../Sections/skills/Skills";
import Education from "../Sections/edu/Education";
import ParticlesComponent from "../components/partciles/Particles";

const HomePage = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Home1 />
      <About />
      <Skills />
      <ParticlesComponent />
      <Education></Education>
    </div>
  );
};

export default HomePage;
