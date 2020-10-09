import React from 'react';

import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../../styles/GlobalStyles';

const Layout = props => (
  <div>
    <GlobalStyles />
    <Nav />
    {props.children}
    <Footer />
  </div>
);

export default Layout;