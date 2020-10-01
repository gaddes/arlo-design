import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --dark-blue: #002C32;
    --dusty-blue: #5B7B89;
    --pale-blue: #90B1BF;
    --pale-yellow: #E1D9B7;
    --golden-yellow: #DFC77E;
    --orange: #DD9F27;
    
    --gray: #E0E0E0;
    --light-gray: #F2F2F2;
    --dark-gray: #E2E2E2;
  }
  
  html {
    font-size: 16px;
    font-family: Arial, sans-serif;
  }
  
  body {
    margin: 0;
    // font-size: 1.5rem;
  }

  button {
    font-size: inherit;
    border: none;
    box-shadow: 1px 1px 5px 0 rgba(0,0,0,0.25);
    background-color: var(--orange);
    padding: 0.5rem 1rem;
    border-radius: 5px;
  }
`;

export default GlobalStyles;