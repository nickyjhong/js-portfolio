import React from 'react'

export default function Work(props) {
  return (
    <div className="work-container" width={{xs: '80%'}}>
      <span>{props.text}</span>
    </div>
  )
}
