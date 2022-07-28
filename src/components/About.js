import React from 'react'
import Terminal from './Terminal'

export default function About() {
  function aboutMe() {
    return (
      <div>
        <span className="terminal-user">{`nicolehong $ `}
          <span className="terminal-command">
             cat aboutnicole
          </span>
        </span>
        <p className="terminal-user">aboutnicole <span className="terminal-main">(main)</span> $ 
          <span className="terminal-text"> 
            {` Hello! I'm Nicole! 
            I am an aspiring software engineer currently attending Fullstack Academy with a graduation date of September 2022.
            `} 
          </span>
        </p>
      </div>
    )
  }

  function skills() {
    const skills = ['JavaScript', 'React', 'Redux', 'Express', 'PostgreSQL' , 'Node.js']
    return (
      <div>
        <span className="terminal-user">{`nicolehong $ `}
          <span className="terminal-command">
             cd skills-tools
          </span>
        </span>
        <p className="terminal-user">skills-tools <span className="terminal-main">(main)</span> $ 
          <span className="terminal-text"> ls</span>
          <ul className="terminal-skills">
            {skills.map(skill => 
              <li 
                className="terminal-skill"
              >
                {skill}
              </li>
            )}
          </ul>
        </p>
      </div>
    )
  }
  
  function misc() {
    return (
      <div>
        <span className="terminal-user">{`nicolehong $ `}
          <span className="terminal-command">
             cd hobbies-interests
          </span>
        </span>
        <p className="terminal-user">hobbies-interests <span className="terminal-main">(main)</span> $ 
          <span className="terminal-text"> ls</span>
        </p>
      </div>
    )
  }

  return (
    <div className='about-container'>
      <Terminal text={aboutMe()}/>
      <Terminal text={skills()}/>
      <Terminal text={misc()}/>
    </div>
  )
}
