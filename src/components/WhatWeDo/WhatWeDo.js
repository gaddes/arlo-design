import React from 'react';
import styled from 'styled-components';

import { Section } from '../common';
import Card from './Card';

import Design from '../../assets/work_together.svg';
import Dev from '../../assets/programming.svg';
import Brand from '../../assets/color_schemes.svg';
import Seo from '../../assets/web_search.svg';

import mediaQueries from '../../helpers/mediaQueries';

const Div = styled.div({
  display: 'grid',
  gridTemplateColumns: '450px 450px',
  gridGap: '2rem',
  justifyItems: 'center',
  justifyContent: 'center',

  ['@media' + mediaQueries.mediumWidth]: {
    gridTemplateColumns: '450px',
  },

  ['@media' + mediaQueries.smallWidth]: {
    gridTemplateColumns: '1fr',
  }
});

const WhatWeDo = () => (
  <Section title="What we do" bgColor="light">
    <Div>
      <Card
        title="Design"
        Img={Design}
        alt="Designers hard at work"
      >
        <div>Attract new customers and increase sales with a unique design created just for your business</div>
        <div>We ensure your visitors can access key information and purchase your products with ease; streamlining workflows across your site and squashing pain points along the way.</div>
      </Card>

      <Card
        title="Development"
        Img={Dev}
        alt="A programmer with six screens"
      >
        <div>Modern techniques and best practices are utilized to create a fast and efficient business portal. Say goodbye to long loading times, large images and spinning loaders that never seem to end!</div>
        <div>New visitors will find your information in record time, and existing customers will be delighted with your new, best-in-class performance.</div>
      </Card>

      <Card
        title="Branding"
        Img={Brand}
        alt="A man choosing a colour palette"
      >
        <div>Strengthen your online presence with a thorough branding review; services include logo creation and colour scheme design.</div>
        <div>We enhance your existing brand and for new companies (or those looking to start from scratch) we build from the ground up, involving you every step of the way.</div>
      </Card>

      <Card
        title="SEO"
        Img={Seo}
        alt="A woman with a giant magnifying glass"
      >
        <div>What use is your brand new site if your customers can’t find it?</div>
        <div>Search Engine Optimization helps to maximize your online presence and ensure that users can find you on search engines like Google.</div>
        <div>Static pages, server-side rendering and comprehensive metadata are just some of the techniques we employ to maximize discoverability for your business.</div>
      </Card>
    </Div>
  </Section>
);

export default WhatWeDo;