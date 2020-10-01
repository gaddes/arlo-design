import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon from './Icon';

const Div = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 1px 1px 5px 0 rgba(0,0,0,0.3);
  background-color: rgba(0,0,0,0.05);
  padding: 1rem;
`;

const Card = props => (
  <Div className={props.className}>
    <Icon {...props} />
    <div>{props.children}</div>
  </Div>
);

const { string, node } = PropTypes;

Card.propTypes = {
  children: node.isRequired,
  type: string,
  className: string,
};

Card.defaultProps = {
  type: 'none',
  className: '',
};

export default Card;