import React from 'react'
import portfolio from '../images/portfolio-pic.png'

export default function Projects() {
  return (
    <div className="projects-container">
      <span className="project-container">
        <a href={'https://nicolehong.dev'}>
          <img src={portfolio} className="portfolio-pic" alt="portfolio"/>
        </a>
        <div className="portfolio-btns">
          <a href={'https://github.com/nickyjhong/portfolio'}>
            <button className="portfolio-btn portfolio-btn-demo">
              <p className="portfolio-code">Demo</p>
            </button>
          </a>
          <a href={'https://github.com/nickyjhong/portfolio'}>
            <button className="portfolio-btn portfolio-btn-code">
              <p className="portfolio-demo">{`</> Source Code`}</p>
            </button>
          </a>
        </div>
      </span>

      <span className="project-container">
        <a href={'https://nicolehong.dev'}>
          <img src={portfolio} className="portfolio-pic" alt="portfolio"/>
        </a>
        <div className="portfolio-btns">
          <a href={'https://github.com/nickyjhong/portfolio'}>
            <button className="portfolio-btn portfolio-btn-demo">
              <p className="portfolio-code">Demo</p>
            </button>
          </a>
          <a href={'https://github.com/nickyjhong/portfolio'}>
            <button className="portfolio-btn portfolio-btn-code">
              <p className="portfolio-demo">{`</> Source Code`}</p>
            </button>
          </a>
        </div>
      </span>
      
      <span className="project-container">
        <a href={'https://nicolehong.dev'}>
          <img src={portfolio} className="portfolio-pic" alt="portfolio"/>
        </a>
        <div className="portfolio-btns">
          <a href={'https://github.com/nickyjhong/portfolio'}>
            <button className="portfolio-btn portfolio-btn-demo">
              <p className="portfolio-code">Demo</p>
            </button>
          </a>
          <a href={'https://github.com/nickyjhong/portfolio'}>
            <button className="portfolio-btn portfolio-btn-code">
              <p className="portfolio-demo">{`</> Source Code`}</p>
            </button>
          </a>
        </div>
      </span>

      <span className="project-container">
        <a href={'https://nicolehong.dev'}>
          <img src={portfolio} className="portfolio-pic" alt="portfolio"/>
        </a>
        <div className="portfolio-btns">
          <a href={'https://github.com/nickyjhong/portfolio'}>
            <button className="portfolio-btn portfolio-btn-demo">
              <p className="portfolio-code">Demo</p>
            </button>
          </a>
          <a href={'https://github.com/nickyjhong/portfolio'}>
            <button className="portfolio-btn portfolio-btn-code">
              <p className="portfolio-demo">{`</> Source Code`}</p>
            </button>
          </a>
        </div>
      </span>

      <span className="project-container">
        <a href={'https://nicolehong.dev'}>
          <img src={portfolio} className="portfolio-pic" alt="portfolio"/>
        </a>
        <div className="portfolio-btns">
          <a href={'https://github.com/nickyjhong/portfolio'}>
            <button className="portfolio-btn portfolio-btn-demo">
              <p className="portfolio-code">Demo</p>
            </button>
          </a>
          <a href={'https://github.com/nickyjhong/portfolio'}>
            <button className="portfolio-btn portfolio-btn-code">
              <p className="portfolio-demo">{`</> Source Code`}</p>
            </button>
          </a>
        </div>
      </span>
    </div>
  )
}
