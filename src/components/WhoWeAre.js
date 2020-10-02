import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section } from './common';

const Div = styled.div`  
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const MainText = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  
  margin: 0 2rem 0 0;
`;

const Title = styled.div`
  font-size: 2rem;
  margin: 0 0 2rem 0;
`;

const Text = styled.div`
  font-size: 1.2rem;
  margin: 0 0 1rem 0;
`;


const WhoWeAre = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "images/mugshot.jpg" }) {
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
    <Section id="who-we-are" title="Who we are" bgColor="dark">
      <Div>
        <MainText>
          <Title>[logo] arlo_design</Title>
          <Text>Arlo Design is a web design and development agency that works with you to enhance your online presence and helps you <b>achieve your business goals</b>.</Text>
          <Text>We love to partner with small businesses like ourselves, working together to ensure every site has a <b>personal touch</b>.</Text>
          <Text>Above all else we value <b>trust, honesty and communication</b>. These three values underpin every project we do, ensuring we stay in touch and in sync <b>every step of the way</b>.</Text>
          <Text>Read on to learn more...</Text>
        </MainText>

        <Img
          fluid={data.image.childImageSharp.fluid}
          alt='Minions constructing a website'
        />
      </Div>
    </Section>
  );
};

export default WhoWeAre;