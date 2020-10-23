import React from 'react';
import styled from 'styled-components';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Section, Carousel } from '../common';
import Card from './Card';

import Analytics from '../../assets/progress_data.svg';
import Growth from '../../assets/investment_data.svg';
import Brand from '../../assets/logo_design.svg';
import Discover from '../../assets/my_current_location.svg';
import Presence from '../../assets/data_processing.svg';
import Personal from '../../assets/with_love.svg';

import mediaQueries from '../../helpers/mediaQueries';

const Grid = styled.div({
  display: 'grid',
  gridTemplateColumns: '450px 450px',
  gridGap: '2rem',
  justifyContent: 'center',
  justifyItems: 'center',

  ['@media' + mediaQueries.mediumWidth]: {
    gridTemplateColumns: '450px',
  },
});

const Flex = styled.div`
  > * {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: flex-start;
  }
`;

const Em = styled.i`
  margin: 0;
`;

const cards = [
  <Card
    key="Analytics"
    title="Analytics"
    Img={Analytics}
    alt="Woman drawing a graph on a whiteboard"
  >
    <div>With added Google Analytics you'll know <Em>exactly</Em> how many new customers you're attracting.</div>
  </Card>,

  <Card
    key="Growth"
    title="Growth"
    Img={Growth}
    alt="Woman standing next to a bar chart"
  >
    <div>Your new site is the perfect platform on which to build your business. Add an online store to sell faster than ever before.</div>
  </Card>,

  <Card
    key="Branding"
    title="Branding"
    Img={Brand}
    alt="Man stood next to a logo"
  >
    <div>Logo design and a fresh color palette can rejuvenate your brand and create new business opportunities.</div>
  </Card>,

  <Card
    key="Discoverability"
    title="Discoverability"
    Img={Discover}
    alt="An office with a location marker above"
  >
    <div>Leave your customers with no doubt as to who you are, what you do, and where they can find you.</div>
  </Card>,

  <Card
    key="Enhanced presence"
    title="Enhanced presence"
    Img={Presence}
    alt="A computer screen with content flowing in"
  >
    <div>Add key business information such as maps, menus and product catalogues.</div>
  </Card>,

  <Card
    key="Personal touch"
    title="Personal touch"
    Img={Personal}
    alt="A woman holding a heart-shaped balloon"
  >
    <div>We work with you every step of the way to ensure your new site solves your most pressing business needs.</div>
  </Card>,
];

const HowWeCanHelp = () => {
  const isMediumScreen = useMediaQuery(mediaQueries.mediumWidth);

  return (
    <Section title="How we can help your business">
      {isMediumScreen
        ? <Flex>
            <Carousel>
              {cards.map(card => card)}
            </Carousel>
          </Flex>

        : <Grid>
            {cards.map(card => card)}
          </Grid>
      }
    </Section>
  );
};

export default HowWeCanHelp;