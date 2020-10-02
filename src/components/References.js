import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Card } from './common';

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2rem;
  
  > div.gatsby-image-wrapper {
    margin: 0 2rem 0 0;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  > * {
    margin: 2rem 0;
  }
`;

const References = () => {
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
    <Section
      bgColor="light"
      title="References"
      subtitle="Don't just take our word for it..."
    >
      <Div>
        <Img
          fluid={data.image.childImageSharp.fluid}
          alt="A woman reading a reference"
        />
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
};

export default References;