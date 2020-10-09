import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import useSiteMetadata from '../../hooks/useSiteMetadata';

const SEO = props => {
  const siteMetadata = useSiteMetadata();

  return (
    <Helmet
      defaultTitle={siteMetadata.title}
      titleTemplate={`%s | ${siteMetadata.title}`}
    >
      <html lang="en" />
      <title>{props.title}</title>
      <meta name="description" content={siteMetadata.description} />

      {/* Open Graph tags for sharing on social media */}
      {props.location && <meta property="og:url" content={props.location.href} />}
      <meta property="og:image" content={props.image || `${siteMetadata.siteUrl}${siteMetadata.image}`} />
      <meta property="og:image:alt" content={props.alt || 'Arlo Design logo'} />
      <meta property="og:title" content={props.title} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={props.description || siteMetadata.description} />
      <meta property="og:type" content={props.type || 'website'} />

      {/* Allow other components to override tags by passing as children to <SEO /> */}
      {props.children}
    </Helmet>
  );
};

const { string } = PropTypes;

SEO.propTypes = {
  title: string,
  description: string,
  image: string,
  type: string,
};

SEO.defaultProps = {
  title: '',
  description: '',
  image: '',
  type: '',
};

export default SEO;