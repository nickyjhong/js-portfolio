import React from 'react'

export default function Toggle({ theme, toggleTheme }) {
  return (
    <span className="toggle">
      { theme === 'light' ?
        <button onClick={toggleTheme} className="toggle-btn">🌙</button> 
        :
        <button onClick={toggleTheme} className="toggle-btn">☀️</button>
      }
    </span>
  )
}
