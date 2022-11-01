import React from "react";
import portfolio from "../images/portfolio-pic.png";
import baked from "../images/baked-pic.png";
import lift from "../images/lift-the-world.png";
import jpfp from "../images/jpfp.png"
import sfc from '../images/sfc.png'
import bootstrap from '../images/bootstrap.png'
import html from '../images/html.png'
import css from '../images/css.png';
import express from '../images/express.png'
import firebase from '../images/firebase.png'
import firestore from '../images/firestore.png'
import nodejs from '../images/nodejs.png'
import js from '../images/js.png'
import postgresql from '../images/postgresql.png'
import sequelize from '../images/sequelize.png'
import react from '../images/react.png'
import redux from '../images/redux.png'

const projects = [
  {
    title: "Sutphin Family Cleaners",
    description: "A CRM system to manage dry-cleaning invoices. This was made to help my parents and my brother track invoices sent to companies. This project was built using JavaScript, React, Firebase, Firestore, HTML, CSS, and Bootstrap.",
    pic: sfc,
    icons: [js, react, firebase, firestore, html, css, bootstrap],
    website: "https://sutphin-family-cleaners.web.app",
    demo: "https://youtu.be/41xnKwh2Bco",
    repo: "https://github.com/nickyjhong/sutphin-family-cleaners"
  }, {
    title: "Lift the World",
    description: "A fitness tracking Progressive Web Application (PWA) that allows users to track how much weight they've lifted in a session, compare it to real-world items, level up, and compete for a spot on the leaderboard. This project was built using JavaScript, React, Redux, Express, Node.js, PostgreSQL, Sequelize, HTML, CSS, and PWA.",
    pic: lift,
    icons: [js, react, redux, express, nodejs, postgresql, sequelize, html, css],
    website: "https://lift-the-world.onrender.com",
    demo: "https://youtu.be/uSbtmAf63vo",
    repo: "https://github.com/2206-capstone-lifters/lift-the-world",
  }, {
    title: "Baked by Fullstack",
    description: "An e-commerce website that allows guest, returning customers, and admin to buy baked goods. This project was built using JavaScript, React, Redux, Express, Node.js, PostgreSQL, Sequelize, HTML, and CSS.",
    pic: baked,
    icons: [js, react, redux, express, nodejs, postgresql, sequelize, html, css],
    website: "https://baked.onrender.com/",
    demo: "https://youtu.be/ro3kw9VW-cI",
    repo: "https://github.com/nickyjhong/baked",
  }, {
    title: "Portfolio",
    description: "My portfolio that showcases my journey as a software engineer. This project was built using  JavaScript, React, HTML, and CSS.",
    pic: portfolio,
    icons: [js, react, html,css],
    website: "https://nicolehong.dev",
    demo: "https://youtu.be/aQ9GMtwl7SE",
    repo: "https://github.com/nickyjhong/portfolio",
  }, {
    title: "The Margaret Hamilton Academy of JavaScript - School CRM",
    description: "Fullstack Academy's 2206 Junior Phase Final Project (JPFP). A school CRM tool that tracks student information and their associated campuses. This project was built using JavaScript, React, Redux, Express, Node.js, PostgreSQL, Sequelize, HTML, and CSS. Source code is not publicly available but can be shown upon request.",
    pic: jpfp,
    icons: [js, react, redux, express, nodejs, postgresql, sequelize, html, css],
    website: "",
    demo: "https://youtu.be/4m8kb-hKfTI",
    repo: "https://github.com/nickyjhong/2206-fsa-rm-web-ft-jpfp"
  }
];

export default function Projects() {
  return (
    <div className="projects-container">
      {projects.map((project) => {
        return (
          <div className="project-container" key={project.title}>
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
                <div className="portfolio-icons">
                  {project.icons.map((icon) => {
                    return (
                      <img src={icon} alt="icon" className="portfolio-icon" key={icon}/>
                    )
                  })}
                </div>
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
