import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all .5s linear;
  }
  .profile-pic {
    box-shadow: ${({ theme }) => theme.picShadow}
  }
  .fa-social {
    color: ${({ theme }) => theme.iconColor}
  }
  .terminal-content {
    background: ${({ theme }) => theme.termBack};
    color: ${({ theme }) => theme.termText};
    box-shadow: ${({ theme }) => theme.termShadow}
  }
  .terminal-text, .terminal-command, .terminal-skills, .terminal-interests {
    color: ${({ theme }) => theme.termText}
  }
  .terminal-user {
    color: ${({ theme }) => theme.termUser}
  }
  .terminal-top {
    background: ${({ theme }) => theme.termTop}
  }
  .email:hover, .resume:hover{
    color: ${({ theme }) => theme.hoverColor}
  }
  .portfolio-btn {
    background: ${({ theme }) => theme.btnBg};
    border: ${({ theme }) => theme.btnBrdr};
    box-shadow: ${({ theme }) => theme.btnShadow};

  }
  .portfolio-btn:hover {
    background: ${({ theme }) => theme.btnBgHvr}
  }
  .portfolio-btn:active {
    box-shadow: ${({ theme }) => theme.btnShadowActive}
  }
  .school-container, .job-container {
    box-shadow: ${({ theme }) => theme.termShadow}
  }
`;

export const lightTheme = {
  body: '#fff',
  text: '#121212',
  iconColor: '#161416',
  termBack: '#F0F0F0',
  termText: 'black',
  termUser: '#5E8B95',
  termMain: '#49617B',
  termTop: '#D2D2D2',
  termShadow: '0 .5rem 1rem .5rem #E3E3E3',
  picShadow: '0 .5rem 1rem rgba(19, 19, 18, 0.164)',
  hoverColor: '#827370',
  btnBg: '#F5F0ED',
  btnBrdr: '2px solid #422800',
  btnShadow: '#422800 4px 4px 0 0',
  btnShadowActive: '#422800 2px 2px 0 0',
  btnBgHvr: '#E5D7CF',
};

export const darkTheme = {
  body: '#2D2A2E',
  text: '#fff',
  iconColor: '#fff',
  termBack: '#27242f',
  termText: '#fff',
  termUser: '#44FFA3',
  termMain: '#249D61',
  termTop: '#8c8c8c',
  termShadow: '0 .5rem 1rem .5rem rgba(230, 230, 230, 0.1)',
  picShadow: '0 .5rem 1rem rgba(230, 230, 230, 0.2)',
  hoverColor: '#A6B2A4',
  btnBg: '#997F6F',
  btnBrdr: '1px solid #E2E1D8',
  btnShadow: '#E2E1D8 4px 4px 0 0',
  btnShadowActive: '#E2E1D8 2px 2px 0 0',
  btnBgHvr: '#8F6F58',
};