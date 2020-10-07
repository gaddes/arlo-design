import React from 'react';
import styled from 'styled-components';

import { Section, Card } from './common';

import Img from '../assets/content_creator.svg';

import mediaQueries from '../helpers/mediaQueries';

const Flex = styled.div({
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'center',

  ['@media' + mediaQueries.mediumWidth]: {
    flexDirection: 'column',
  },
});

const Image = styled.div({
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 3rem 0 0',

  '> svg': {
    width: 350,
    height: 300,

    ['@media' + mediaQueries.mediumWidth]: {
      width: 250,
      height: 200,
      margin: '0 0 2rem 0',
    },
  },
});

const CardWrapper = styled.div({
  flex: '0 1 600px',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center',

  ['@media' + mediaQueries.mediumWidth]: {
    // 'flex' dictates height because parent flex-direction is now 'column'
    flex: '0 1 auto',
    maxWidth: 600,
  },

  '> *': {
    margin: '1rem 0',
  },
});

const References = () => (
  <Section
    title="References"
    subtitle="Don't just take our word for it..."
  >
    <Flex>
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
    </Flex>
  </Section>
);

export default References;