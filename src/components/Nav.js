import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <a onClick={() => scrollTo('#hero')}>[LOGO]</a>
      </li>
      <li>
        <a onClick={() => scrollTo('#contact')}>Contact</a>
      </li>
    </ul>
  </nav>
);

export default Nav;