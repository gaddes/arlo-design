import React from 'react';
import styled from 'styled-components';

import { Section } from '../common';
import Form from './Form';
import mediaQueries from '../../helpers/mediaQueries';

import Img from '../../assets/chatting.svg';

const Div = styled.div({
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'center',

  [`@media${mediaQueries.mediumWidth}`]: {
    flexDirection: 'column-reverse',
  },
});

const FormWrapper = styled.div({
  flex: '0 1 500px',
  margin: '0 3rem 0 0',

  [`@media${mediaQueries.mediumWidth}`]: {
    margin: 0,
  },
});

const Image = styled(Img)({
  flex: '0 0 400px',
  maxHeight: 600,

  [`@media${mediaQueries.mediumWidth}`]: {
    maxWidth: 300,
    // 'flex' now dictates height because parent flex-direction is 'column-reverse'
    flex: '0 0 275px',
    margin: '0 0 3rem 0',
  },
});

const LetsGetStarted = () => (
  <Section title="Let's get started!">
    <Div>
      <FormWrapper><Form /></FormWrapper>
      <Image alt="An app with two people chatting" />
    </Div>
  </Section>
);

export default LetsGetStarted;