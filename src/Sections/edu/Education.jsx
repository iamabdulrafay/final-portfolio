import React from "react";
import "./Education.css";
import Skills from "../skills/Skills";
import Language from "../../components/lang/Language";
const Education = () => {
  const Education = [
    {
      grade: "Matriculation",
      fileds: "Computer Science (CS) ",
      start: "20-april-2022",
      end: "3-march-2024",
      name: "Al-khalil-Huffaz School",
    },
  ];
  const Certification = [
    {
      grade: "Course",
      fileds: "React.js ",
      start: "7-december-2022",
      end: "7-march-2024",
      duration: "3months",
      name: "BanoQabil Karachi",
    },
  ];
  return (
    <>
      <div className="edu">
        <h1>EDUCATION.</h1>{" "}
        {Education.map((val, index) => (
          <div key={index} className="p-flex">
            <div className="p-left">
              <h1>{val.grade}</h1>
              <h2>{val.name}</h2>
              <p>
                <strong>Subject:</strong>
                {val.fileds}
              </p>
            </div>
            <div className="p-right">
              <p>
                <strong>Start:</strong>
                {val.start}
              </p>
              <p>
                <strong>End:</strong>
                {val.end}
              </p>
            </div>
          </div>
        ))}
        <hr style={{ border: "1px solid black", marginBottom: "4vw" }} />
        <h1>CERTIFICATION.</h1>
        {Certification.map((val, index) => (
          <div key={index} className="p-flex">
            <div className="p-left">
              <h1>{val.grade}</h1>
              <h2>{val.name}</h2>
              <p>
                <strong>Skill:</strong>
                {val.fileds}
              </p>
            </div>
            <div className="p-right">
              <p>
                <strong>Start:</strong>
                {val.start}
              </p>
              <p>
                <strong>End:</strong>
                {val.end}
              </p>
              <p>
                <strong>Duration:</strong>
                {val.duration}
              </p>
            </div>
          </div>
        ))}
        <hr style={{ border: "1px solid black", marginBottom: "4vw" }} />
        <h1>Language.</h1>
        <Language />
      </div>
    </>
  );
};

export default Education;
