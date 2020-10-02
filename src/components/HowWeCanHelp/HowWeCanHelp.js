import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import { Section } from '../common';
import Card from './Card';

const Div = styled.div`  
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;

const Em = styled.i`
  margin: 0;
`;


const HowWeCanHelp = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "images/mugshot.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fixed(width: 200, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Section title="How we can help your business" bgColor="dark">
      <Div>
        <Card
          title="Analytics"
          img={data.image.childImageSharp.fixed}
          alt="Woman drawing a graph on a whiteboard"
        >
          <div>With added Google Analytics you'll know <Em>exactly</Em> how many new customers you're attracting.</div>
        </Card>

        <Card
          title="Growth"
          img={data.image.childImageSharp.fixed}
          alt="Woman standing next to a bar chart"
        >
          <div>Your new site is the perfect platform on which to build your business. Add an online store to sell faster than ever before.</div>
        </Card>

        <Card
          title="Branding"
          img={data.image.childImageSharp.fixed}
          alt="Man stood next to a logo"
        >
          <div>Logo design and a fresh color palette can rejuvenate your brand and create new business opportunities.</div>
        </Card>

        <Card
          title="Discoverability"
          img={data.image.childImageSharp.fixed}
          alt="An office with a location marker above"
        >
          <div>Leave your customers with no doubt as to who you are, what you do, and where they can find you.</div>
        </Card>

        <Card
          title="Enhanced presence"
          img={data.image.childImageSharp.fixed}
          alt="A computer screen with content flowing in"
        >
          <div>Add key business information such as maps, menus and product catalogues.</div>
        </Card>

        <Card
          title="Personal touch"
          img={data.image.childImageSharp.fixed}
          alt="A woman holding a heart-shaped balloon"
        >
          <div>We work with you every step of the way to ensure your new site solves your most pressing business needs.</div>
        </Card>
      </Div>
    </Section>
  );
};

export default HowWeCanHelp;