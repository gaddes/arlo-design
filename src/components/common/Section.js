import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const bgColorMap = {
  light: '#FFFFFF',
  dark: 'var(--dark-gray)',
};

const Div = styled.div`
  background-color: ${props => bgColorMap[props.bgColor]};
  padding: 2rem;
  
  h1 {
    margin: 0;
    font-size: 2.5rem;
    font-weight: 300;
    text-align: center;
  }
  
  h2 {
    margin: 1rem 0 0 0;
    font-size: 1.2rem;
    font-weight: 200;
    text-align: center;
  }
`;

const TitleWrapper = styled.div`
  margin: 0 0 3rem 0;
`;


const Section = props => (
  <Div {...props}>
    <TitleWrapper>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </TitleWrapper>
    {props.children}
  </Div>
);

const { string } = PropTypes;

Section.propTypes = {
  title: string,
  subtitle: string,
  bgColor: string.isRequired,
};

Section.defaultProps = {
  title: '',
  subtitle: '',
};

export default Section;