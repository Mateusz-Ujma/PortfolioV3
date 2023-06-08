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
  }

body{
  margin:0px;
  padding:0;
  color:${theme.colors.Primary};
  width: 100dvw;
  background:${theme.colors.Secondary};
overflow-x: hidden;
}
#root{
 width: 95svw;
}
`;

export default GlobalStyle;
