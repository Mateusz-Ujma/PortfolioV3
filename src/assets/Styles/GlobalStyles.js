import { createGlobalStyle } from 'styled-components';
import theme from './theme';

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
  font-family: 'Roboto Slab', serif;
  }

body{
  margin:0px;
  padding:0;
  color:${theme.colors.Primary};
  width: 100%;
  background:${theme.colors.Secondary};
height:100svh;
}
#root{


	margin: 0;
width:100%;
	overflow-y: auto;
  overflow-x:hidden;

}
`;

export default GlobalStyle;
