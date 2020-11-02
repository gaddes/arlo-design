import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const bgColorMap = {
  light: 'var(--light-gray)',
  dark: 'var(--dark-gray)',
  none: 'transparent',
};

const Div = styled.div`
  background-color: ${props => bgColorMap[props.bgColor]};
  padding: 2rem;
`;

const HorizontalLine = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 0 3rem 0;

  div {
    flex: 0 1 175px;
    height: 5px;
    background-color: var(--dark-blue);  
  };
`;

const TitleWrapper = styled.div`
  margin: 0 0 2rem 0;

  > h1 {
    margin: 0;
    font-size: 2.5rem;
    text-align: center;
  }
  
  > h2 {
    margin: 1rem 0 0 0;
    font-size: 1.2rem;
    font-weight: 200;
    text-align: center;
  }
`;

const Section = props => (
  <Div {...props}>
    <TitleWrapper>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </TitleWrapper>
    <HorizontalLine><div /></HorizontalLine>
    {props.children}
  </Div>
);

const { string, node } = PropTypes;

Section.propTypes = {
  children: node.isRequired,
  title: string,
  subtitle: string,
  bgColor: string,
};

Section.defaultProps = {
  title: '',
  subtitle: '',
  bgColor: 'none',
};

export default Section;