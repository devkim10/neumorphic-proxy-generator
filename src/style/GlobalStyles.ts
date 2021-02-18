import baseStyled, {
  createGlobalStyle,
  ThemedStyledInterface,
} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *::-webkit-scrollbar {
      display: none;
    }
    *, *:before, *:after {
      box-sizing: border-box
    }
    html{
      font-size: 10px;
    }
     body {
      font-family: 'Nunito Sans', sans-serif;
      font-size: 1.5em;
      margin: 0;
      padding: 0;
      background: #eef0f4;
      height: 100vh;
      width: 100vw;
    }
    button, input, select, textarea {
      font-family : inherit;
      font-size : 1.5rem;
    }
    button,table, td, th, label, span, h1 {
      -webkit-user-select:none;
    }
  `;

export const theme = {
  main: '#eef0f4',
  shadow: '#dbdde0',
  light: '#fff',
  success: '#2ed467',
  warning: '#f8993a',
  danger: '#e82242',
  textColor: '#31344b',
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
