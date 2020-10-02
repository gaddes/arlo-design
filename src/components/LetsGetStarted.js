import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section } from './common';

const Div = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
`;

const LetsGetStarted = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: {eq: "images/mugshot.jpg"}) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fixed(width: 400, height: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Section bgColor="light" title="Let's get started!">
      <Div>
        <div>form goes here</div>
        <Img
          fixed={data.image.childImageSharp.fixed}
          alt="An app with two people chatting"
        />
      </Div>
    </Section>
  );
};

export default LetsGetStarted;