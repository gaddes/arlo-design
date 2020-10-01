import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Card } from './common';

const Div = styled.div`  
  display: grid;
  grid-template-columns: 1fr 1fr;
`;


const WhatWeDo = () => {
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
    <Section title="What we do" bgColor="light">
      <Div>
        <Card type="info" className="testing-123">
          <div>hello</div>
        </Card>

        <Img
          fluid={data.image.childImageSharp.fluid}
          alt='Minions constructing a website'
        />
      </Div>
    </Section>
  );
};

export default WhatWeDo;