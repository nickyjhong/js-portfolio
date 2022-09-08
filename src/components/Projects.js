import React from "react";
import portfolio from "../images/portfolio-pic.png";
import baked from "../images/baked-pic.png";
import lift from "../images/lift-the-world.png";

const projects = [
  // {
  //   title: 'delish',
  //   pic: baked,
  //   website: 'https://delish-cookbook.herokuapp.com',
  //   demo: '#',
  //   repo: 'https://github.com/nickyjhong/delish'
  // }
  {
    title: "Lift the World",
    description: "A fitness tracking Progressive Web Application (PWA) that allows users to track how much weight they've lifted in a session, compare it to real-world items, level up, and compete for a spot on the leaderboard. This project was built using React, Redux, PostgreSQL, Sequelize, Node.js, Express, JavaScript, HTML, CSS, and PWA.",
    pic: lift,
    website: "https://lift-the-world.herokuapp.com",
    demo: "https://youtu.be/uSbtmAf63vo",
    repo: "https://github.com/2206-capstone-lifters/lift-the-world",
  }, {
    title: "Baked by Fullstack",
    description: "An e-commerce website that allows guest, returning customers, and admin to buy baked goods. This project was built using React, Redux, PostgreSQL, Sequelize, Node.js, Express, JavaScript, HTML, and CSS.",
    pic: baked,
    website: "https://baked-by-fs.herokuapp.com",
    demo: "#",
    repo: "https://github.com/nickyjhong/baked",
  }, {
    title: "Portfolio",
    description: "My portfolio that showcases my journey as a software engineer. This project was built using Create React App.",
    pic: portfolio,
    website: "https://nicolehong.dev",
    demo: "#",
    repo: "https://github.com/nickyjhong/portfolio",
  }
];

export default function Projects() {
  return (
    <div className="projects-container">
      {projects.map((project) => {
        return (
          <div className="project-container">
            <div className="portfolio-pic-container">
              <a href={project.website}>
                <img
                  src={project.pic}
                  className="portfolio-pic"
                  alt="portfolio"
                />
              </a>
            </div>
            <div className="portfolio-info-container">
              <div className="portfolio-title-container">
                <p className="portfolio-title">{project.title}</p>
                <p className="portfolio-description">{project.description}</p>
              </div>
              <div className="portfolio-btns">
              <a href={project.demo}>
                <button className="portfolio-btn portfolio-btn-demo">
                  <p className="portfolio-code">Demo</p>
                </button>
              </a>
              <a href={project.repo}>
                <button className="portfolio-btn portfolio-btn-code">
                  <p className="portfolio-demo">{`</> Source Code`}</p>
                </button>
              </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
