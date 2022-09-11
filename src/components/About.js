import React from 'react'
import Terminal from './Terminal'
import Education from './Education'
import Work from './Work'

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
            I am an aspiring software engineer who graduated from Fullstack Academy in September 2022.
            Although I recently left teaching to pursue a career in software development, I still enjoy explaining concepts and engaging in meaningful discussions to deepen 
            my and my peers' knowledge. I am a lifelong learner who hopes to spread that same love of learning to those around me!
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
    const skills = ['JavaScript', 'React', 'Redux', 'Express', 'PostgreSQL' , 'Sequelize', 'Node.js', 'HTML', 'CSS', 'Progressive Web Applications']
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
    const interests = ["💪 Bodybuilding", "🧶 Crochet", "🎧 True crime podcasts", "🍽️ Cooking (and eating)","🦗 Cricut crafts", "💃 Concerts"]
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
            {interests.map(interest => {
              return (
                <li 
                  className="terminal-interest"
                  key={interest}
                >
                  {interest}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }

  function work () {
    const jobs = [
      {
        company: 'New York City Department of Education',
        position: 'Special Education Teacher',
        dates: 'September 2019 - March 2022',
        logo: '/nycdoe.png',
        location: 'New York, NY',
        description: '4th & 5th grade special education teacher'
      }
    ]
    return (
      <div className="about-work-container">
        <h2 className="work-header">Professional Experience:</h2>
        {jobs.map(job => {
          return (
            <div className="job-container" key={job.dates}>
              <div className="work-logo-container">
                <img className="work-logo" src={job.logo} alt={job.company} />
              </div>

              <div className="work-details">
                <p className="work-position "><span className="detail-label"> </span> {job.position}</p>
                <p className="work-name detail">{job.company}</p>
                <p className="work-dates detail"><span className="detail-label">Dates: </span> {job.dates}</p>
                <p className="work-location detail"><span className="detail-label">Location: </span> {job.location}</p>
                <p className="work-description detail"><span className="detail-label">Description: </span> {job.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  function education() {
    const ed = [
      {
        // degree: 'Fullstack Software Engineer',
        school: 'Fullstack Academy',
        // major: 'N/A',
        certificate: 'Full-stack web development bootcamp',
        language: 'JavaScript, PERN Stack',
        logo: '/fullstack.png',
        location: 'New York, NY',
        date: 'September 2022 (Cohort 2206)'
      }, {
        degree: 'M.A. in Teaching of English',
        school: 'Teachers College, Columbia University',
        major: 'English Education, Grades 7-12',
        logo: '/tc.png',
        location: 'New York, NY',
        date: 'May 2019'
      }, {
        degree: 'B.S. in Education',
        school: "SUNY Geneseo",
        major: 'Childhood with Special Education, Grades 1-6',
        logo: '/geneseo.png',
        location: 'Geneseo, NY',
        date: 'May 2017'
      }
    ]
    return (
      <div className="about-school-container">
        <h2 className="education-header">Education:</h2>
        {ed.map(school => {
          return (
            <div className="school-container" key={school.date}>
              <div className="school-logo-container">
                <img className="school-logo" src={school.logo} alt={school.school} />
              </div>

              <div className="school-details">
                <p className="school-name">{school.school}</p>
                {school.degree ? (
                  <>
                    <p className="school-degree detail"><span className="detail-label">Degree: </span> {school.degree}</p>
                    <p className="school-major detail"><span className="detail-label">Major: </span> {school.major}</p>
                  </>
                ) : (
                  <>
                    <p className="school-certificate detail"><span className="detail-label">Certificate: </span> {school.certificate}</p>
                    <p className="school-language detail"><span className="detail-label">Language and Stack: </span> {school.language}</p>
                  </>
                )}
                <p className="school-date detail"><span className="detail-label">Graduation: </span> {school.date}</p>
                <p className="school-location detail"><span className="detail-label">Location: </span> {school.location}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }


  return (
    <div className='about-container'>
      <Terminal text={aboutMe()}/>
      <Terminal text={skills()}/>
      <Terminal text={misc()}/>
      <Work text={work()} />
      <Education text={education()}/>
    </div>
  )
}
