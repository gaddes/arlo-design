import React from 'react';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';

import Logo from '../assets/logo_text.svg';
import Img from '../assets/work_in_progress.svg';

import mediaQueries from '../helpers/mediaQueries';

const Div = styled.div({
  padding: '2rem',
  display: 'grid',
  gridTemplateColumns: '600px 400px',
  justifyContent: 'center',

  ['@media' + mediaQueries.mediumWidth]: {
    gridTemplateColumns: '1fr',
    justifyItems: 'center',
  },
});

const MainText = styled.div({
  margin: '0 3rem 0 0',

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
  margin: 0 0 2rem 0;
`;

const Text = styled.div`
  font-size: 1.5rem;
`;

const SmallText = styled.div`
  font-size: 0.8rem;
  margin: 2rem 0;
`;

const Image = styled(Img)({
  width: '100%',
  height: '400px',

  ['@media' + mediaQueries.mediumWidth]: {
    width: '350px',
    height: '300px',
    margin: '2rem 0 0 0',
  },
});


const Hero = () => (
  <Div id='hero'>
    <MainText>
      <Title><Logo /></Title>
      <Subtitle>Bespoke design and development services.</Subtitle>
      <Text>Let us create a website tailored to your needs.</Text>
      <Text>Beautiful. Discoverable. Blazing fast.</Text>
      <SmallText>Proudly based in Vancouver since 2019</SmallText>
      <button onClick={() => scrollTo('#contact')}>Let's get started!</button>
    </MainText>

    <Image />
  </Div>
);

export default Hero;