import React from 'react';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';

import Logo from '../assets/logo_text.svg';
import Img from '../assets/work_in_progress.svg';

const Div = styled.div`  
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  
  padding: 2rem;
`;

const MainText = styled.div`
  flex: 0 1 600px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  
  margin: 0 3rem 0 0;
`;

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

const Image = styled(Img)`
  flex: 0 0 400px;
  height: 400px;
`;


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