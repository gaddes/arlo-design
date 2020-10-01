import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import scrollTo from 'gatsby-plugin-smoothscroll';

const DivStyles = styled.div`  
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  padding: 2rem;
`;

const MainTextStyles = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.div`
  font-size: 3rem;
  margin: 0 0 2rem 0;
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

const Hero = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      hero: file(relativePath: { eq: "images/mugshot.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 600, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <DivStyles>
      <MainTextStyles>
        <Title>[logo] arlo_design</Title>
        <Subtitle>Bespoke design and development services.</Subtitle>
        <Text>Let us create a website tailored to your needs.</Text>
        <Text>Beautiful. Discoverable. Blazing fast.</Text>
        <SmallText>Proudly based in Vancouver since 2019</SmallText>
        <button onClick={() => scrollTo('#who-we-are')}>Let's get started!</button>
      </MainTextStyles>

      <Img
        fluid={data.hero.childImageSharp.fluid}
        alt='A woman painting a website'
      />
    </DivStyles>
  );
};

export default Hero;