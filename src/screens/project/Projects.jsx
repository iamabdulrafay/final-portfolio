import React from "react";
import "./Projects.css";
import dashboard from "./../../assets/dashboard.png";
import food from "./../../assets/food.png";
import ecommerce from "./../../assets/ecommerce.png";
import portfolio from "./../../assets/portfolio.png";
import duostudio from "./../../assets/duostudio.png";
import movie from "./../../assets/movie.png";

const Projects = () => {
  const projectArray = [
    {
      name: "FOOD & Recipe Web",
      skills: "React | FramerMotion | Bootstrap | RTK | Jsx | Tailwind ",
      img: food,
      link: "https://restaurant-and-recipe-app-test.vercel.app/",
    },
    {
      name: "Admin Dasboard",
      skills: "React | Recharts| Rtk | AntD | Jsx | Css |",
      img: dashboard,
      link: " https://react-admin-dashboard-alpha-three.vercel.app/",
    },
    {
      name: "E-Commerce Web",
      skills: "React | FramerMotion | Bootstrap |   Jsx | Tailwind ",
      img: ecommerce,
      link: "https://restaurant-and-recipe-app-test.vercel.app/",
    },
    {
      name: "Duo Studio Web",
      skills: "Html | Css | Js | Gsap",
      img: duostudio,
      link: "https://iamabdulrafay.github.io/duo2/",
    },
    {
      name: "Portfolio-Web",
      skills: "Html | Css | Js | Gsap",
      img: portfolio,
      link: "https://iamabdulrafay.github.io/Web-Dev-Portfolio/",
    },
    {
      name: "Movie Search",
      skills: "Html | Css | Js ",
      img: movie,
      link: "https://iamabdulrafay.github.io/my-movie-search-app/",
    },
  ];
  return (
    <div className="projects">
      <div className="top">
        <h1>
          My <strong>Works...</strong>
        </h1>
        <p className="para">
          I care about the work I do and the people I do it with. That's why I
          show up ready every day to create amazing projects. I'm proud to have
          worked with really cool people, learning powerful insights along the
          way and gaining valuable experience.
        </p>
      </div>

      {projectArray.map((val, index) => (
        <div
          key={index}
          className="p-flex"
          onClick={() => {
            window.open(val.link, "_blank");
          }}>
          <div className="p-left">
            <h1>{val.name}</h1>
            <p>{val.skills}</p>
          </div>
          <div className="p-right">
            <img src={val.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
