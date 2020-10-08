import React from 'react';
import { Layout } from './src/components/common';

require('typeface-open-sans');
require('typeface-domine');

// Wrap ALL pages with the component returned from this function
export function wrapPageElement({ element, props }) {
  return (
    <Layout {...props}>{element}</Layout>
  );
}