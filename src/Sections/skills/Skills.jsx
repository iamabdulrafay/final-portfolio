import React from "react";
import "./Skills.css";
const Skills = () => {
  // const randomColor = () => {
  //   return "#" + Math.floor(Math.random() * 16777215).toString(16);
  // };

  // Define an array of background image URLs for each card
  const CardData = [
    {
      name: "Html",
      Expericence: "Expert",
      projects: "100+",
    },
    {
      name: "Css",
      Expericence: "Expert",
      projects: "100+",
    },
    {
      name: "Js",
      Expericence: "Expert",
      projects: "70+",
    },
    {
      name: "React",
      Expericence: "Intermediate",
      projects: "50+",
    },

    {
      name: "Gsap",
      Expericence: "Intermediate",
      projects: "60+",
    },
    {
      name: "Tailwind",
      Expericence: "Intermediate",
      projects: "20+",
    },
    {
      name: "BootStrap",
      Expericence: "Intermediate",
      projects: "20+",
    },
    {
      name: "RTK",
      Expericence: "Beginner",
      projects: "5+",
    },

    {
      name: "AntD",
      Expericence: "Beginner",
      projects: "20+",
    },

    {
      name: "FarmerMotion",
      Expericence: "Beginner",
      projects: "20+",
    },
  ];

  return (
    <div className="skills">
      <h1>SKILLS.</h1>{" "}
      <div className="ag-format-container">
        <div className="ag-courses_box">
          {CardData.map((Data, index) => (
            <div className="ag-courses_item" key={index}>
              <div className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                  <h1>{Data.name}</h1>
                  <p className="project-count">
                    <strong>Projects</strong>:{Data.projects}
                  </p>
                </div>

                <div className="ag-courses-item_date-box">
                  Experience:
                  <span className="ag-courses-item_date">
                    {Data.Expericence}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
