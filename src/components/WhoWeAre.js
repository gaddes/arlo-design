import React from 'react';
import styled from 'styled-components';
import Img from '../assets/work_in_progress.svg';

import { Section } from './common';

import mediaQueries from '../helpers/mediaQueries';

const Flex = styled.div({
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'center',

  ['@media' + mediaQueries.mediumWidth]: {
    flexDirection: 'column-reverse',
  },
});

const MainText = styled.div({
  flex: '0 1 550px',
  margin: '0 3rem 0 2rem',

  ['@media' + mediaQueries.mediumWidth]: {
    margin: '3rem 1rem 0rem 1rem',
    flex: '0 0 auto',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',

    '> *': {
      textAlign: 'center',
    }
  },
});

const Text = styled.div`
  font-size: 1.2rem;
  margin: 0 0 1rem 0;
`;

const Image = styled(Img)({
  flex: '0 0 350px',
  maxHeight: 300,
  margin: '0 1rem',

  ['@media' + mediaQueries.mediumWidth]: {
    // Specify 'maxWidth' rather than 'flex'
    //  because parent changes to 'column' at breakpoint
    maxWidth: 275,
    maxHeight: 250,
  },
});


const WhoWeAre = () => (
  <Section id="who-we-are" title="Who we are">
    <Flex>
      <MainText>
        <Text>Arlo Design is a web design and development agency that works with you to enhance your online presence and help you <b>achieve your business goals</b>.</Text>
        <Text>We love to partner with small businesses like ourselves, working together to ensure every site has a <b>personal touch</b>.</Text>
        <Text>Above all else we value <b>trust, honesty and communication</b>. These three values underpin every project we do, ensuring we stay in touch and in sync <b>every step of the way</b>.</Text>
      </MainText>

      <Image alt="A woman painting a giant screen" />
    </Flex>
  </Section>
);

export default WhoWeAre;