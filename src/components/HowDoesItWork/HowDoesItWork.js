import React from 'react';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Section, Carousel } from '../common';
import Card from './Card';

import Consult from '../../assets/remote_meeting.svg';
import Scope from '../../assets/investing.svg';
import Design from '../../assets/scrum_board.svg';
import Dev from '../../assets/real_time_sync.svg';
import Complete from '../../assets/mic_drop.svg';

import mediaQueries from '../../helpers/mediaQueries';

const FlexCarousel = styled.div`
  > * {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: flex-start;
  }
  
  .list {
    margin: 0.5rem 0 0 2rem;

    > li {
      margin: 0.5rem 0;
    }
  }
  
  ul.list {
    // Must override user agent stylesheet for when we show a carousel,
    //  because <Carousel /> renders one of its elements within a <ul>,
    //  which causes irregularities in the bullet/list style.
    list-style-type: disc;    
  }
`;

const FlexMasonry = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const Masonry = styled.div({
  columns: '2',
  columnGap: '1rem',
  marginTop: '-0.5rem', // Compensate for margin applied to individual Cards
  maxWidth: 1000,

  '> *': {
    display: 'inline-block',
    margin: '0.5rem 0',
  },

  ['@media' + mediaQueries.mediumWidth]: {
    columns: '1',
    maxWidth: 650,
  },

  '.list': {
    margin: '0.5rem 0 0 2rem',

    '> li': {
      margin: '0.5rem 0',
    },
  },
});

const Scroll = styled.span`
  cursor: pointer;
  text-decoration: underline;
  
  :hover {
    text-decoration: none;
  }
`;

const cards = [
  <Card
    title="Step 1"
    subtitle="consultation"
    Img={Consult}
    alt="Two people communicating using screens"
  >
    <div>
      Enter your details in our&nbsp;
      <Scroll onClick={() => scrollTo('#contact')}>contact form</Scroll>
      &nbsp;and we’ll call you back for a free initial consultation.
    </div>
    <div>We’ll use this time to get to know each other better, discuss your business goals and design ideas, and establish a scope and budget for your project.</div>
    <div>Following our consultation you’ll receive a summary of our notes. We’ll ask you to review these to confirm our project goals are aligned before detailed design begins.</div>
  </Card>,

  <Card
    title="Step 2"
    subtitle="scope & budget"
    Img={Scope}
    alt="A man standing in front of a bar chart"
  >
    <div>Key topics that will help us to define the project scope:</div>
    <ul className="list">
      <li><b>Business goals</b> - Where do you see your business in the next 12 months? What currently brings in the most revenue, and where would you like to focus our efforts?</li>
      <li><b>Branding</b> - Would you like to use your existing branding? Do you want to build a brand from scratch?</li>
      <li><b>Budget</b> - What’s your budget for this project? We'll openly discuss our rates to ensure they align with your expectations.</li>
      <li><b>Timeframe</b> - Do you have a timeframe in mind?</li>
    </ul>
    <div>Together we’ll review everything we’ve discussed to ensure our visions for your project are aligned. We’ll then issue you with a summary, scope and brief contractual documents.</div>
    <div>This is the final step before detailed design begins!</div>
  </Card>,

  <Card
    title="Step 3"
    subtitle="design"
    Img={Design}
    alt="Two people placing sticky notes on a board"
  >
    <div>During this stage we’ll design the layout, colors and imagery for your site. There will be two main stages:</div>
    <ol className="list">
      <li><b>Initial design</b> - We'll sketch a wireframe layout to position your content on the page. We design responsively to ensure your site looks great on all size devices.</li>
      <li><b>Detailed design</b> - Your imagery and brand colors will be added. We'll issue a prototype for your review before diving in to development.</li>
    </ol>
  </Card>,

  <Card
    title="Step 4"
    subtitle="development"
    Img={Dev}
    alt="A collection of different devices"
  >
    <div>The design is done and now it’s time to build your site!</div>
    <div>We use the latest web technologies to ensure your site is lightning fast and responsive across all devices.</div>
    <div>SEO is baked in for maximum discoverability on the most popular search engines; you’ll never be more than a click away!</div>
    <div>At the end of this stage we’ll issue a fully-functional site for your review at our unique domain. After confirming that you love the new design, we transfer to your domain of choice and hand over your site.</div>
  </Card>,

  <Card
    title="Step 5"
    subtitle="complete"
    Img={Complete}
    alt="A man dropping the mic"
  >
    <div>Congratulations! It’s time to site back and reap the rewards of your online presence.</div>
  </Card>,
];

const HowDoesItWork = () => {
  const isMediumScreen = useMediaQuery(mediaQueries.mediumWidth);

  return (
    <Section title="How does it work?">
      {isMediumScreen
        ? <FlexCarousel>
            <Carousel
              alignLeft // Override default textAlign: 'center'
            >
              {cards.map(card => card)}
            </Carousel>
          </FlexCarousel>

        : <FlexMasonry>
            <Masonry>
              {cards.map(card => card)}
            </Masonry>
          </FlexMasonry>
      }
    </Section>
  );
};

export default HowDoesItWork;