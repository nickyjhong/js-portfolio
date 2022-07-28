import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all .5s linear;
  }
  .fa-social {
    color: ${({ theme }) => theme.iconColor}
  }
  .fa-social:hover {
    color: ${({ theme }) => theme.iconHover}
  }
  .terminal-content {
    background: ${({ theme }) => theme.termBack};
    color: ${({ theme }) => theme.termText};
  }
  .terminal-text, .terminal-command, .terminal-skills {
    color: ${({ theme }) => theme.termText}
  }
  .terminal-user {
    color: ${({ theme }) => theme.termUser}
  }
  .terminal-top {
    background: ${({ theme }) => theme.termTop}
  }
`;

export const lightTheme = {
  body: '#fff',
  text: '#121212',
  iconColor: '#161416',
  iconHover: '#827370',
  termBack: '#F0F0F0',
  termText: 'black',
  termUser: '#5E8B95',
  termMain: '#49617B',
  termTop: '#D2D2D2'
};

export const darkTheme = {
  body: '#2D2A2E',
  text: '#fff',
  iconColor: '#fff',
  iconHover: '#FDDCCA',
  termBack: '#27242f',
  termText: '#fff',
  termUser: '#44FFA3',
  termMain: '#249D61',
  termTop: '#8c8c8c'
};