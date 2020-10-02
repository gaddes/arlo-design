import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import { Section } from '../common';
import Card from './Card';

const Masonry = styled.div`
  columns: 2;
  column-gap: 1rem;
  
  > * {
    display: inline-block;
    margin: 0 0 1rem 0;
  }
`;

const HowDoesItWork = () => {
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
    <Section bgColor="dark" title="How does it work?">
      <Masonry>
        <Card
          title="Step 1"
          subtitle="consultation"
          img={data.image.childImageSharp.fixed}
          alt="Two people communicating using screens"
        >
          <div>Enter your details in our contact form and we’ll call you back for a free initial consultation.</div>
          <div>We’ll use this time to get to know each other better, discuss your business goals and design ideas, and establish a scope and budget for the project.</div>
          <div>Following our consultation you’ll receive a summary of our notes. We’ll ask you to review these to confirm our project goals are aligned before detailed design begins.</div>
          <div>* may be worth creating a basic questionnaire to ensure nothing is missed? We can pre-fill answers based on the initial chat as needed.</div>
        </Card>

        <Card
          title="Step 2"
          subtitle="scope & budget"
          img={data.image.childImageSharp.fixed}
          alt="A man standing in front of a bar chart"
        >
          <div>Key topics that will help us to define the project scope:</div>
          <div>Business goals - Where do you see your business in the next 12 months? What currently brings in the most revenue, and where would you like us to focus our efforts?</div>
          <div>Branding - Would you like to use your existing branding? Do you want to build a brand from scratch?</div>
          <div>Budget - What’s your budget for this project? We will openly discuss our rates to ensure they align with your expectations.</div>
          <div>Timeframe - Do you have a timeframe in mind?</div>
          <div>Together we’ll review everything we’ve discussed to ensure our visions for your project are aligned. We’ll then issue you with a summary, scope and brief contractual documents to review.</div>
          <div>This will be the final step before detailed design begins!</div>
          <div>* Before design begins, we ask for a down payment of 50% (project based on lump sum)</div>
          <div>* We ask for the first 3 hours up front (project based on hourly rate)</div>
        </Card>

        <Card
          title="Step 3"
          subtitle="design"
          img={data.image.childImageSharp.fixed}
          alt="Two people placing sticky notes on a board"
        >
          <div>During this stage we’ll design the layout, colors and imagery for your site. There will be two main stages:</div>
          <div>A) Initial design - layout, wireframes, placeholders for images, color palettes, brand logo (if requested), font options.</div>
          <div>* basic wireframe in Figma</div>
          <div>B) Detailed design - images, layout for both desktop and mobile, fonts, colors, clickable prototype.</div>
          <div>* Figma clickable prototype</div>
        </Card>

        <Card
          title="Step 4"
          subtitle="development"
          img={data.image.childImageSharp.fixed}
          alt="A collection of different devices"
        >
          <div>The design is done and now it’s time to build your site!</div>
          <div>We use the latest web technologies to ensure your site is lightning fast and responsive across all devices.</div>
          <div>SEO is baked in for maximum discoverability on the most popular search engines; you’ll never be more than a click away!</div>
          <div>At the end of this stage we’ll issue a fully-functional site for your review at our unique domain. Upon receiving final payment we flip the switch, transfer to your domain of choice and hand over your site.</div>
        </Card>

        <Card
          title="Step 5"
          subtitle="complete"
          img={data.image.childImageSharp.fixed}
          alt="A man dropping the mic"
        >
          <div>Congratulations! It’s time to site back and reap the rewards of your online presence.</div>
        </Card>
      </Masonry>
    </Section>
  );
};

export default HowDoesItWork;