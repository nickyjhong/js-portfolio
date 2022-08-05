import React from 'react'

export default function Education(props) {
  return (
    <div className="education-container" width={{xs: '80%'}}>
      <span>{props.text}</span>
    </div>
  )
}
