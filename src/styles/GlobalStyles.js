import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --dark-blue: #002C32;
    --dusty-blue: #5B7B89;
    --pale-blue: #90B1BF;
    --pale-yellow: #E1D9B7;
    --golden-yellow: #DFC77E;
    --orange: #DD9F27;
  }
  
  html {
    font-size: 12px;
  }
  
  body {
    font-size: 1.5rem;
  }
`;

export default GlobalStyles;