import React from 'react';
import styled from 'styled-components';

import { Section } from '../common';
import Card from './Card';

import Analytics from '../../assets/progress_data.svg';
import Growth from '../../assets/investment_data.svg';
import Brand from '../../assets/logo_design.svg';
import Discover from '../../assets/my_current_location.svg';
import Presence from '../../assets/data_processing.svg';
import Personal from '../../assets/with_love.svg';

import mediaQueries from '../../helpers/mediaQueries';

const SubSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const Div = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  justifyContent: 'center',
  justifyItems: 'center',
  gridGap: '2rem',
  maxWidth: 1000,

  ['@media' + mediaQueries.mediumWidth]: {
    gridTemplateColumns: '1fr',
  },
});

const Em = styled.i`
  margin: 0;
`;


const HowWeCanHelp = () => (
  <Section title="How we can help your business">
    <SubSection>
      <Div>
        <Card
          title="Analytics"
          Img={Analytics}
          alt="Woman drawing a graph on a whiteboard"
        >
          <div>With added Google Analytics you'll know <Em>exactly</Em> how many new customers you're attracting.</div>
        </Card>

        <Card
          title="Growth"
          Img={Growth}
          alt="Woman standing next to a bar chart"
        >
          <div>Your new site is the perfect platform on which to build your business. Add an online store to sell faster than ever before.</div>
        </Card>

        <Card
          title="Branding"
          Img={Brand}
          alt="Man stood next to a logo"
        >
          <div>Logo design and a fresh color palette can rejuvenate your brand and create new business opportunities.</div>
        </Card>

        <Card
          title="Discoverability"
          Img={Discover}
          alt="An office with a location marker above"
        >
          <div>Leave your customers with no doubt as to who you are, what you do, and where they can find you.</div>
        </Card>

        <Card
          title="Enhanced presence"
          Img={Presence}
          alt="A computer screen with content flowing in"
        >
          <div>Add key business information such as maps, menus and product catalogues.</div>
        </Card>

        <Card
          title="Personal touch"
          Img={Personal}
          alt="A woman holding a heart-shaped balloon"
        >
          <div>We work with you every step of the way to ensure your new site solves your most pressing business needs.</div>
        </Card>
      </Div>
    </SubSection>
  </Section>
);

export default HowWeCanHelp;