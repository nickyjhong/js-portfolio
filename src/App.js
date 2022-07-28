import React from 'react'
import './styles/app.css'
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles';
import Main from './components/Main';
import { ThemeProvider } from 'styled-components';
import useDarkMode from './styles/useDarkMode';
import Toggle from './components/Toggle';

function App() {
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <Toggle theme={theme} toggleTheme={toggleTheme}/>
        <GlobalStyles />
        <Main />
      </ThemeProvider>
    </Router>
  )
}

export default App;
