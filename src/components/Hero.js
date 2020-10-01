import React from 'react';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';

const DivStyles = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  
  padding: 2rem;
`;

const MainTextStyles = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Illustration = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const Hero = () => {
  return (
    <DivStyles>
      <MainTextStyles>
        <div>[logo] arlo_design</div>
        <div>Bespoke design and development services.</div>
        <div>Let us create a website tailored to your needs.</div>
        <div>Beautiful. Discoverable. Blazing fast.</div>
        <div>Proudly based in Vancouver since 2019</div>
        <button onClick={() => scrollTo('#who-we-are')}>Let's get started!</button>
      </MainTextStyles>

      <Illustration>
        <div>image goes here!</div>
      </Illustration>
    </DivStyles>
  );
};

export default Hero;