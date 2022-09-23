import React from 'react'
import me from '../images/self.png'
import bootstrap from '../images/bootstrap.png'
import html from '../images/html.png'
import css from '../images/css.png';
import express from '../images/express.png'
import firebase from '../images/firebase.png'
import firestore from '../images/firestore.png'
import nodejs from '../images/nodejs.png'
import postgresql from '../images/postgresql.png'
import sequelize from '../images/sequelize.png'
import react from '../images/react.png'
import redux from '../images/redux.png'
import js from '../images/js.png'

export default function Home() {
  return (
    <div className='home-container'>
      <span className="profile-pic-container">
        <img className="profile-pic" src={me} alt='me'/>
      </span>
      <span className='info-container'>
        <h1 className='info-name'>Hi, I'm Nicole</h1>
        <h2 className='info-title'>I'm a Full Stack Developer</h2>
        <div className="info-icons">
          <img src={js} alt="js" className="info-icon"/>
          <img src={react} alt="react" className="info-icon"/>
          <img src={redux} alt="redux" className="info-icon"/>
          <img src={express} alt="express" className="info-icon"/>
          <img src={nodejs} alt="nodejs" className="info-icon"/>
          <img src={firebase} alt="firebase" className="info-icon"/>
          <img src={firestore} alt="firestore" className="info-icon"/>
          <img src={postgresql} alt="postgresql" className="info-icon"/>
          <img src={sequelize} alt="sequelize" className="info-icon"/>
          <img src={html} alt="html" className="info-icon"/>
          <img src={css} alt="css" className="info-icon"/>
          <img src={bootstrap} alt="bootstrap" className="info-icon"/>
        </div>
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