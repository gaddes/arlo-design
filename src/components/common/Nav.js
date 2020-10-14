import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
// TODO: delete me!
import Image from 'gatsby-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import styled from 'styled-components';

import Logo from '../../assets/logo_text.svg';

const NavStyles = styled.nav`
  background-color: var(--light-gray);
  border-bottom: 3px solid var(--dark-blue);

  ul {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    height: 70px;
    margin: 0;
    padding: 0.5rem 2rem;
    list-style: none;
  }
`;

const Span = styled.span`
  svg {
    width: 150px;
  }
`;

const Nav = () => {
  // TODO: delete me!
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: {eq: "logo_text.png"}) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <NavStyles>
      <ul>
        <li>
          <Span>
            <Link to="/">
              <Logo alt="Arlo Design logo" />
            </Link>

            {/* TODO: delete me! AND logo_text.png */}
            {/*<Link to="/">*/}
            {/*  <Image*/}
            {/*    fluid={data.image.childImageSharp.fluid}*/}
            {/*    alt="Arlo Design logo"*/}
            {/*  />*/}
            {/*</Link>*/}
          </Span>
        </li>
        <li>
          <button onClick={() => scrollTo('#contact')}>Contact</button>
        </li>
      </ul>
    </NavStyles>
  );
};

export default Nav;