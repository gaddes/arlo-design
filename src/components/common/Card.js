import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon from './Icon';

const bgColorMap = {
  light: 'var(--light-gray)',
  dark: 'rgba(0,0,0,0.05)',
};

const Div = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  //box-shadow: 1px 1px 5px 0 rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: ${props => bgColorMap[props.bgColor]};
  padding: 1.5rem;
  
  > div {
    width: 100%;
  },
`;

const Card = props => (
  <Div {...props} className={props.className}>
    <Icon {...props} />
    <div>{props.children}</div>
  </Div>
);

const { string, node, oneOf } = PropTypes;

Card.propTypes = {
  children: node.isRequired,
  type: string,
  className: string,
  bgColor: oneOf(['light', 'dark']),
};

Card.defaultProps = {
  type: 'none',
  className: '',
  bgColor: 'dark',
};

export default Card;