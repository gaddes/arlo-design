import React from 'react';
import styled from 'styled-components';

import { Section, Card } from './common';

import Img from '../assets/content_creator.svg';

import mediaQueries from '../helpers/mediaQueries';

const Div = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateAreas: `
    'image references'
  `,
  gridGap: '2rem',
  margin: '2rem',

  ['@media' + mediaQueries.mediumWidth]: {
    gridTemplateColumns: '1fr',
    gridTemplateAreas: `
      'image'
      'references'
    `,
    gridGap: '0.5rem',
    margin: '0 2rem 1rem 2rem',
  },

  '> div.gatsby-image-wrapper': {
    margin: '0 2rem 0 0',
  },
});

const Image = styled.div({
  gridArea: 'image',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'center',

  '> svg': {
    width: 350,
    height: 350,

    ['@media' + mediaQueries.mediumWidth]: {
      width: 250,
      height: 250,
    },
  },
});

const CardWrapper = styled.div({
  gridArea: 'references',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center',

  '> *': {
    margin: '1rem 0',
  },
});

const References = () => (
  <Section
    bgColor="light"
    title="References"
    subtitle="Don't just take our word for it..."
  >
    <Div>
      <Image>
        <Img alt="A woman reading a reference" />
      </Image>
      <CardWrapper>
        <Card>
          <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor" - Person X, Company Y</div>
        </Card>
        <Card>
          <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor" - Person X, Company Y</div>
        </Card>
      </CardWrapper>
    </Div>
  </Section>
);

export default References;