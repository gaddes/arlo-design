import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import styled from 'styled-components';
import Headroom from 'react-headroom';

const NavStyles = styled.nav`
  background-color: var(--light-gray);
  border-bottom: 3px solid var(--dark-blue);
  
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  height: 70px;
  margin: 0;
  padding: 0.5rem 2rem;
`;

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: {eq: "logo_text.png"}) {
        childImageSharp {
          fixed(width: 155, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Headroom>
      <NavStyles>
        <Link to="/">
          <Image
            fixed={data.image.childImageSharp.fixed}
            alt="Arlo Design logo"
          />
        </Link>
        <AnchorLink
          to="/#contact"
          className="button"
          stripHash
        >
          Contact
        </AnchorLink>
      </NavStyles>
    </Headroom>
  );
};

export default Nav;