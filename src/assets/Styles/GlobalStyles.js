import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

}
*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
  margin:0;
  padding:0;
  }

body{
  margin:0px;
  padding:0;
  color:white;
  width: 100dvw;
  background:black;
overflow-x: hidden;
}
#root{

 width: 95svw;
}
`;

export default GlobalStyle;
