import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  font-size: 0.8rem;
  background: var(--gray);
  margin: 0;
  padding: 0.5rem 2rem;
`;

const Footer = () => {
  return (
    <Div>
      <div>Arlo Design &#169; {new Date().getFullYear()}</div>
      <Link to="/terms">Ts & Cs</Link>
    </Div>
  );
};

export default Footer;