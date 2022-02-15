import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        height: 100vh;
        margin: 0;
        background: linear-gradient(90deg, #000000 12%, rgba(0,38,84,0) 12%), linear-gradient(90deg, #191919 87%, #000000 87%);
    }
`;

export default GlobalStyle;
