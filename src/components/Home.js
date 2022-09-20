import React from 'react'
import me from '../images/self.png'

export default function Home() {
  return (
    <div className='home-container'>
      <span className="profile-pic-container">
        <img className="profile-pic" src={me} alt='me'/>
      </span>
      <span className='info-container'>
        <h1 className='info-name'>Hi, I'm Nicole</h1>
        <h2 className='info-title'>I'm a Full Stack Developer</h2>
        <div className="info-mini-bio">
          <div className="info-mini-bio-section">
            <span className="emoji">📌</span> 
            <span className="info-detail">Based in New York, New York</span>
          </div>
          <div className="info-mini-bio-section">
            <span className="emoji">🍎</span> 
            <span className="info-detail">Teacher <span className="arrow">⇨</span> Student</span>
          </div>
          <div className="info-mini-bio-section">
            <span className="emoji resume">📝</span> 
            <span className="info-detail resume">
              <a href="https://drive.google.com/file/d/1IOkCix-U3LtdEZ1_LqdE4hxrPCM50kKV/view?usp=sharing" target="_blank" rel="noreferrer" className="info-detail resume">
                See my resume
              </a>
            </span>
          </div>
          <div className="info-mini-bio-section">
            <span className="emoji email">📧</span> 
            <span 
              className="info-detail email"
              onClick={() => window.location = 'mailto:nicolehong95@gmail.com'}
            >
              nicolehong95@gmail.com
            </span>
          </div>
        </div>
        <div className="socials-container">
          <a href={"https://github.com/nickyjhong"}>
            <i className="fa fa-github fa-social github" />
          </a>
          <a href={"https://www.linkedin.com/in/nicolejhong/"}>
            <i className="fa fa-linkedin-square fa-social linkedin" />
          </a>
          <a href={"https://www.youtube.com/playlist?list=PL1ET4j00SjCHltsuF0BUg0j00jfJW2IM8"}>
            <i className="fa fa-youtube-play fa-social youtube" />
          </a>
        </div>
      </span>
    </div>
  )
}