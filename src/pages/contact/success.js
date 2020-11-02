import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const Heading = styled.h1`
  margin: 3rem 0 0 0;
`;

const Subheading = styled.h2`
  margin: 2rem 0;
`;

const Success = () => (
  <Flex>
    <Heading>Thanks for your query!</Heading>
    <Subheading>We&apos;ll be in touch ASAP...</Subheading>
    <Link
      to="/"
      className="button"
    >
      Return to homepage
    </Link>
  </Flex>
);

export default Success;