import { useState } from 'react'

export default function useDarkMode() {
  const [ theme, setTheme ] = useState('light')

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light') 
  }
  return [theme, toggleTheme]
}
