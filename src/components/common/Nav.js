import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import styled from 'styled-components';

const NavStyles = styled.nav`
  ul {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    height: 36px;
    background: var(--gray);
    margin: 0;
    padding: 0.5rem 2rem;
    list-style: none;
  }
`;

const Nav = () => (
  <NavStyles>
    <ul>
      <li>
        <span onClick={() => scrollTo('#hero')}>[LOGO]</span>
      </li>
      <li>
        <button onClick={() => scrollTo('#contact')}>Contact</button>
      </li>
    </ul>
  </NavStyles>
);

export default Nav;