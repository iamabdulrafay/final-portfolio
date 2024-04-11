import React from "react";
import "./Home1.css";
import { Link } from "react-router-dom";
import resume from "./../../assets/resume.pdf";
const Home1 = () => {
  return (
    <div>
      <div className="top-flex">
        {" "}
        <div className="line"></div>
      </div>
      <div class="context">
        <div className="left">
          {" "}
          <h1>
            <b>Empowering </b>Change Through Web Development by{" "}
            <b>Abdul Rafay</b>
          </h1>
          <p>
            Welcome to my portfolio! As a web developer, I believe in the
            transformative power of technology to shape a better world today.
            Through my work, I aim to empower communities, amplify diverse
            voices, and foster meaningful connections. With a focus on
            inclusivity, accessibility, and sustainability, I create online
            spaces that reflect the richness of human experience. Join me on
            this journey as we harness the potential of technology to build a
            more equitable, empathetic, and interconnected world for all.
          </p>
          <div className="inside-flex">
            <button>
              <a href={resume} download="resume.pdf">
                Download Resume
              </a>
            </button>
            <Link to="/projects" className="Link">
              My Work <span>→</span>
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="circle">
            <div className="innner-circle">↓</div>
          </div>
        </div>
      </div>

      <div class="area">
        {/* <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul> */}
      </div>
    </div>
  );
};

export default Home1;
