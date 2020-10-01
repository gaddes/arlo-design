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
`;


const Section = props => (
  <Div {...props}>
    <h1>{props.title}</h1>
    {props.children}
  </Div>
);

const { string } = PropTypes;

Section.propTypes = {
  title: string,
  bgColor: string.isRequired,
};

Section.defaultProps = {
  title: '',
};

export default Section;