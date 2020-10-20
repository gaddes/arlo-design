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
          <div><i>"My site was slick, well designed and most importantly to me - easy to use. It fit my brand perfectly and suited me as a small, independent business"</i> - Catherine Isaac, BrightBox Speech and Language Therapy</div>
        </Card>
        <Card>
          <div><i>"The final product came out better than I could have ever imagined […] concise, speedy and thorough approach to website design services"</i> - Tim Sportschuetz, Sportschuetz & Company</div>
        </Card>
      </CardWrapper>
    </Flex>
  </Section>
);

export default References;