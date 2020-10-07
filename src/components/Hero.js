import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import scrollTo from 'gatsby-plugin-smoothscroll';

import Logo from '../assets/logo_text.svg';

import mediaQueries from '../helpers/mediaQueries';

const Div = styled.div({
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 650,

  ['@media' + mediaQueries.mediumWidth]: {
    flexDirection: 'column',
  },
});

const MainText = styled.div({
  margin: '2rem',

  ['@media' + mediaQueries.mediumWidth]: {
    margin: '2rem 2rem 0 2rem',
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
    width: 350px;
  }
`;

const Subtitle = styled.div`
  font-size: 1.5rem;
  margin: 0 0 2rem 0;
`;

const Text = styled.div`
  font-size: 1.5rem;
  line-height: 1.4;
`;

const SmallText = styled.div`
  font-size: 0.8rem;
  margin: 2rem 0;
`;

const ImageDiv = styled.div({
  // Wrapper div with fixed width required
  //  to prevent issues with flexbox and gatsby-image
  width: 650,

  ['@media' + mediaQueries.mediumWidth]: {
    width: '70%',
  },

  ['@media' + mediaQueries.smallWidth]: {
    width: '90%',
  },
});

const Image = styled(Img)({
  margin: '3rem',
});


const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: {eq: "screens.png"}) {
        childImageSharp {
          fluid(maxWidth: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Div id='hero'>
      <MainText>
        <Title><Logo /></Title>
        <Subtitle>Bespoke design and development services.</Subtitle>
        <Text>Let us create a website tailored to your needs.</Text>
        <Text>Beautiful. Discoverable. Blazing fast.</Text>
        <SmallText>Proudly based in Vancouver since 2019</SmallText>
        <button onClick={() => scrollTo('#contact')}>Let's get started!</button>
      </MainText>

      <ImageDiv>
        <Image
          fluid={data.image.childImageSharp.fluid}
          alt="A team working together on a website"
        />
      </ImageDiv>
    </Div>
  );
};

export default Hero;