import React from 'react';
import styled from 'styled-components';

import { Section } from '../common';
import Form from './Form';

import Img from '../../assets/chatting.svg';

const Div = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const Image = styled(Img)`
  flex: 0 0 400px;
  height: 600px;
`;

const LetsGetStarted = () => (
  <Section title="Let's get started!">
    <Div>
      <Form />
      <Image alt="An app with two people chatting" />
    </Div>
  </Section>
);

export default LetsGetStarted;