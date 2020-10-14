import React from 'react';

import styled from 'styled-components';

const DivStyles = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  font-size: 0.8rem;
  background: var(--gray);
  margin: 0;
  padding: 0.5rem 2rem;
`;

const Footer = () => {
  return (
    <DivStyles>Arlo Design &#169; {new Date().getFullYear()}</DivStyles>
  );
};

export default Footer;