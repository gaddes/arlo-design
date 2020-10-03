import React from 'react';
import styled from 'styled-components';

import { Section, Card } from './common';

import Img from '../assets/content_creator.svg';

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2rem;
  
  > div.gatsby-image-wrapper {
    margin: 0 2rem 0 0;
  }
`;

const Image = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  svg {
    width: 350px;
    height: 350px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  > * {
    margin: 2rem 0;
  }
`;

const References = () => (
  <Section
    bgColor="light"
    title="References"
    subtitle="Don't just take our word for it..."
  >
    <Div>
      <Image>
        <Img alt="A woman reading a reference" />
      </Image>
      <CardWrapper>
        <Card>
          <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor" - Person X, Company Y</div>
        </Card>
        <Card>
          <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor" - Person X, Company Y</div>
        </Card>
      </CardWrapper>
    </Div>
  </Section>
);

export default References;