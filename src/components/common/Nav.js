import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import styled from 'styled-components';

import Logo from '../../assets/logo_text.svg';

const NavStyles = styled.nav`
  ul {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    height: 40px;
    background: var(--gray);
    margin: 0;
    padding: 0.5rem 2rem;
    list-style: none;
  }
`;

const Span = styled.span`
  cursor: pointer;

  svg {
    width: 150px;
  }
`;

const Nav = () => (
  <NavStyles>
    <ul>
      <li>
        <Span onClick={() => scrollTo('#hero')}>
          <Logo />
        </Span>
      </li>
      <li>
        <button onClick={() => scrollTo('#contact')}>Contact</button>
      </li>
    </ul>
  </NavStyles>
);

export default Nav;