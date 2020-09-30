import React from 'react';
import Nav from './Nav';
import GlobalStyles from '../styles/GlobalStyles';

const Layout = props => (
  <div>
    <GlobalStyles />
    <Nav />
    {props.children}
  </div>
);

export default Layout;