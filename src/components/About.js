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
            Although I recently left teaching to pursue a career in software development, I still enjoy explaining concepts and engaging in meaningful discussions to deepen 
            my and my peers' knowledge.
            `} 
            <br />
            {`Outside of coding, I am a pet mom to Bean (Shih Tzu and mystery breed mix) and Mancat (legal name is Oreo). 
            I hope to one day open a cat cafe so I can foster street cats.`}

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
        <div className="terminal-user">skills-tools <span className="terminal-main">(main)</span> $ 
          <span className="terminal-text"> ls</span>
          <ul className="terminal-skills">
            {skills.map(skill => 
              <li 
                className="terminal-skill"
                key={skill}
              >
                {skill}
              </li>
            )}
          </ul>
        </div>
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
        <div className="terminal-user">hobbies-interests <span className="terminal-main">(main)</span> $ 
          <span className="terminal-text"> ls</span>
          <ul className="terminal-interests">
            <li className="terminal-interest">💪 Bodybuilding</li>
            <li className="terminal-interest">🧶 Crochet</li>
            <li className="terminal-interest">🎧 True crime podcasts</li>
            <li className="terminal-interest">🍽️ Cooking (and eating)</li>
            <li className="terminal-interest">🦗 Cricut crafts</li>
            <li className="terminal-interest">💃 Concerts</li>
          </ul>
        </div>
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
