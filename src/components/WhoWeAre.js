import React from 'react';
import styled from 'styled-components';
import Img from '../assets/content_team.svg';

import { Section } from './common';

const Div = styled.div`  
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const MainText = styled.div`
  flex: 0 1 600px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  
  margin: 0 3rem 0 0;
`;

const Text = styled.div`
  font-size: 1.2rem;
  margin: 0 0 1rem 0;
`;

const Image = styled(Img)`
  flex: 0 0 400px;
  height: 250px;
`;


const WhoWeAre = () => (
  <Section id="who-we-are" title="Who we are" bgColor="dark">
    <Div>
      <MainText>
        <Text>Arlo Design is a web design and development agency that works with you to enhance your online presence and help you <b>achieve your business goals</b>.</Text>
        <Text>We love to partner with small businesses like ourselves, working together to ensure every site has a <b>personal touch</b>.</Text>
        <Text>Above all else we value <b>trust, honesty and communication</b>. These three values underpin every project we do, ensuring we stay in touch and in sync <b>every step of the way</b>.</Text>
        <Text>Read on to learn more...</Text>
      </MainText>

      <Image alt="Minions working together on a project" />
    </Div>
  </Section>
);

export default WhoWeAre;