import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../../styles/GlobalStyles';

const Flex = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: stretch;
  
  // Sticky footer when content is small, but allows
  //  footer to move down page when content expands
  min-height: 100vh;
`;

const Layout = props => (
  <Flex>
    <GlobalStyles />
    <Nav />
    {props.children}
    <Footer />
  </Flex>
);

export default Layout;