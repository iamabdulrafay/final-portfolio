import React, { useRef } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import me from "./../../assets/me.png";
const About = () => {
  const ref = useRef(null); // Creating a ref using useRef

  const { scrollYProgress } = useScroll({
    target: ref, // Pass the ref to the target option
    offset: ["0 2", "0 0"],
  });

  return (
    <motion.div
      className="About"
      ref={ref} // Assigning the ref to the motion.div
      style={{
        opacity: scrollYProgress, // Fade in as the element scrolls into view

        transition: "0.5s ease-in ",
        // Move element slightly as it scrolls
        scale: scrollYProgress, // Scale down slightly as it scrolls
      }}
      initial={{ opacity: 0 }} // Initial opacity is set to 0 for the fade-in effect
      animate={{ opacity: scrollYProgress }} // Animate opacity to 1 as the component mounts
      transition={{ duration: 0.5 }}>
      <div className="about-container">
        <h1 className="Heading">ABOUT ME.</h1>
        <h2 className="name">Abdul Rafay Khan</h2>
        <p className="position">Front End Developer</p>

        <div className="summary">
          <p>
            Passionate Front End Developer with a knack for crafting captivating
            Hey there, I'm Abdul Rafay Khan, a passionate Front End Developer
            based in Karachi, Pakistan. With a keen eye for detail and a knack
            for creativity, I specialize in crafting captivating user
            experiences through innovative web development. My journey began at
            Al Khalil Huffaz School, where I laid the foundation for my
            technical skills. Since then, I've been on a mission to push the
            boundaries of what's possible in web design and development. From
            React Admin Dashboards to E-commerce platforms, I've had the
            privilege of working on a diverse range of projects. My toolkit
            includes React.js, JavaScript, HTML, CSS, and a plethora of
            frameworks and libraries that enable me to bring ideas to life.
            Driven by a passion for learning, I recently completed a React Js
            course at Banoqabil Institute, further expanding my expertise and
            staying ahead of the curve. But beyond the code, I believe in the
            power of collaboration and innovation. I thrive in environments
            where creativity meets technology, and I'm always on the lookout for
            exciting new challenges. So, whether you're a fellow developer, a
            potential collaborator, or someone with a bold vision, I'm here and
            ready to bring your ideas to life. Let's connect and create
            something amazing together!
          </p>
        </div>

        {/* <div className="education">
          <h3>Education:</h3>
          <p>
            <strong>School:</strong> Al Khalil Huffaz School
            <br />
            <strong>Class:</strong> Matriculation
            <br />
            <strong>End Date:</strong> 20-2-24
          </p>
        </div>
        <div className="education">
          <h3>Certification:</h3>
          <p>
            <strong>Institute:</strong> BanoQabil
            <br />
            <strong>Field:</strong> React.js
            <br />
            <strong>End Date:</strong> 7-3-24
          </p>
        </div> */}
      </div>
      <div className="right">
        <img src={me} alt="" />
      </div>
    </motion.div>
  );
};

export default About;
