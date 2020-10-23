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
  
  > .footer-links > * {
    margin: 0 0 0 1rem;
  }
`;

const Footer = () => {
  return (
    <Div>
      <div>Arlo Design &#169; {new Date().getFullYear()}</div>
      <div className="footer-links">
        <Link to="/blog">Blog</Link>
        <Link to="/terms">Ts & Cs</Link>
      </div>
    </Div>
  );
};

export default Footer;