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

const Content = styled.div`
  flex: 0 1 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;


const Card = props => {

  return (
    <Div className={props.className}>
      <Icon {...props} />
      <Content>
        {props.children}
      </Content>
    </Div>
  );
};

const { node } = PropTypes;

Card.propTypes = {
  children: node.isRequired,
};

export default Card;