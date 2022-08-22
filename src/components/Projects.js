import React from 'react'
import portfolio from '../images/portfolio-pic.png'
import baked from '../images/baked-pic.png'

const projects = [
  {
    title: 'portfolio',
    pic: portfolio,
    website: 'https://nicolehong.dev',
    demo: '#',
    repo: 'https://github.com/nickyjhong/portfolio'
  }, {
    title: 'baked by fs',
    pic: baked,
    website: 'https://baked-by-fs.herokuapp.com',
    demo: '#',
    repo: 'https://github.com/nickyjhong/baked'
  }
  // , {
  //   title: 'lift the world',
  //   pic: baked,
  //   website: 'https://lift-the-world.herokuapp.com',
  //   demo: '#',
  //   repo: 'https://github.com/2206-capstone-lifters/lift-the-world'
  // }, {
  //   title: 'delish',
  //   pic: baked,
  //   website: 'https://delish-cookbook.herokuapp.com',
  //   demo: '#',
  //   repo: 'https://github.com/nickyjhong/delish'
  // }
]

export default function Projects() {
  return (
    <div className="projects-container">
      {projects.map((project) => {
        return (
          <span className="project-container">
          <a href={project.website}>
            <img src={project.pic} className="portfolio-pic" alt="portfolio"/>
          </a>
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
        </span>
        )
      })}
    </div>
  )
}
