import React from 'react';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';

import Logo from '../assets/logo_text.svg';
import Img from '../assets/work_in_progress.svg';

import mediaQueries from '../helpers/mediaQueries';

const Div = styled.div({
  padding: '2rem 0',
  display: 'grid',
  gridTemplateColumns: '550px 400px',
  gridTemplateAreas: `
    'title image'
    'content image'
  `,
  justifyContent: 'center',
  alignItems: 'center',
  gridGap: '1rem',

  ['@media' + mediaQueries.mediumWidth]: {
    gridTemplateColumns: '1fr',
    gridTemplateAreas: `
      'title'
      'image'
      'content'
    `,
    justifyItems: 'center',
  },
});

const MainText = styled.div({
  gridArea: 'title',
  margin: '0 1rem 0 2rem',

  ['@media' + mediaQueries.mediumWidth]: {
    margin: 0,
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',

    '> *': {
      textAlign: 'center',
    }
  },
});

const SubText = styled.div({
  gridArea: 'content',
  margin: '0 1rem 0 2rem',

  ['@media' + mediaQueries.mediumWidth]: {
    margin: 0,
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',

    '> *': {
      textAlign: 'center',
    }
  },
});

const Title = styled.div`
  font-size: 3rem;
  margin: 0 0 1rem 0;
  
  svg {
    width: 300px;
  }
`;

const Subtitle = styled.div`
  font-size: 1.5rem;
`;

const Text = styled.div`
  font-size: 1.5rem;
`;

const SmallText = styled.div`
  font-size: 0.8rem;
  margin: 2rem 0;
`;

const Image = styled(Img)({
  gridArea: 'image',
  width: '350px',
  height: '350px',
  margin: '0 1rem',
  justifySelf: 'center',

  ['@media' + mediaQueries.mediumWidth]: {
    height: 200,
    margin: '1rem 0 0 0',
  },
});


const Hero = () => (
  <Div id='hero'>
    <MainText>
      <Title><Logo /></Title>
      <Subtitle>Bespoke design and development services.</Subtitle>
    </MainText>

    <SubText>
      <Text>Let us create a website tailored to your needs.</Text>
      <Text>Beautiful. Discoverable. Blazing fast.</Text>
      <SmallText>Proudly based in Vancouver since 2019</SmallText>
      <button onClick={() => scrollTo('#contact')}>Let's get started!</button>
    </SubText>

    <Image />
  </Div>
);

export default Hero;