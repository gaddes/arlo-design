import React from 'react';
import styled from 'styled-components';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Section, Carousel } from '../common';
import Card from './Card';

import Design from '../../assets/work_together.svg';
import Dev from '../../assets/programming.svg';
import Brand from '../../assets/color_schemes.svg';
import Seo from '../../assets/web_search.svg';

import mediaQueries from '../../helpers/mediaQueries';

const Grid = styled.div({
  display: 'grid',
  gridTemplateColumns: '450px 450px',
  gridGap: '2rem',
  justifyContent: 'center',
  justifyItems: 'center',

  ['@media' + mediaQueries.mediumWidth]: {
    gridTemplateColumns: '450px',
  },
});

const Flex = styled.div`
  > * {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: flex-start;
  }
`;

const data = [
  {
    title: 'Design',
    image: Design,
    alt: 'Designers hard at work',
    content: [
      'Attract new customers and increase sales with a unique design created just for your business',
      'We ensure your visitors can access key information and purchase your products with ease; streamlining workflows across your site and squashing pain points along the way.',
    ],
  },
  {
    title: 'Development',
    image: Dev,
    alt: 'A programmer with six screens',
    content: [
      'Modern techniques and best practices are utilized to create a fast and efficient business portal. Say goodbye to long loading times, large images and spinning loaders that never seem to end!',
      'New visitors will find your information in record time, and existing customers will be delighted with your new, best-in-class performance.',
    ],
  },
  {
    title: 'Branding',
    image: Brand,
    alt: 'A man choosing a colour palette',
    content: [
      'Strengthen your online presence with a thorough branding review; services include logo creation and colour scheme design.',
      'We enhance your existing brand and for new companies (or those looking to start from scratch) we build from the ground up, involving you every step of the way.',
    ],
  },
  {
    title: 'SEO',
    image: Seo,
    alt: 'A woman with a giant magnifying glass',
    content: [
      'What use is your brand new site if your customers can’t find it?',
      'Search Engine Optimization helps to maximize your online presence and ensure that users can find you on search engines like Google.',
      'Static pages, server-side rendering and comprehensive metadata are just some of the techniques we employ to maximize discoverability for your business.',
    ],
  },
];

// This is a function rather than <Cards /> component because <Carousel />
//  requires individual children to work, rather than one <Cards />
//  component which contains all the individual cards.
const createCards = data => (
  data.map(card => (
    <Card
      key={card.title}
      title={card.title}
      Img={card.image}
      alt={card.alt}
    >
      {card.content.map(item => <div>{item}</div>)}
    </Card>
  ))
);

const WhatWeDo = () => {
  const isMediumScreen = useMediaQuery(mediaQueries.mediumWidth);

  return (
    <Section title="What we do">
      {isMediumScreen
        ? <Flex>
            <Carousel>
              {createCards(data)}
            </Carousel>
          </Flex>

        : <Grid>
            {createCards(data)}
          </Grid>
      }
    </Section>
  );
};

export default WhatWeDo;