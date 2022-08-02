import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
    margin: 0px;
    margin: 0px;
    box-sizing: border-box;
}

*, button, input {

    /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
}

`;