import React from 'react'

export default function Terminal(props) {
  const {text} = props
  return (
    <div className="terminal-container" width={{xs: '80%'}}>
      <div className="terminal-top">
        <i className="fa fa-circle red" />
        <i className="fa fa-circle yellow" />
        <i className="fa fa-circle green" />
      </div>
      <div className="terminal-content">
        <div>
          <div className="terminal-command"> {text}</div>
        </div>
      </div>
    </div>
  )
}
