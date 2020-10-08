import React from 'react';
import { Helmet } from 'react-helmet';

import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../../styles/GlobalStyles';
import useSiteMetadata from '../../hooks/useSiteMetadata';

const Layout = props => {
  const { title, description } = useSiteMetadata();

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <GlobalStyles />
      <Nav />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;