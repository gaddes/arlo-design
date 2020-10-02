import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { Card as BaseCard } from '../common';

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Title = styled.div`
  font-size: 1.2rem;
`;

const Line = styled.div`
  width: 60px;
  height: 3px;
  background-color: var(--dusty-blue);
  margin: 12px 0;
`;

const ImgWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  
  margin: 0 0 0 1rem;
`;

const Card = props => {
  return (
    <BaseCard>
      <Div>
        <div>
          <Title>{props.title}</Title>
          <Line />
          {props.children}
        </div>
        <ImgWrapper>
          <Img
            fixed={props.img}
            alt={props.alt}
          />
        </ImgWrapper>
      </Div>
    </BaseCard>
  );
};

const { shape, arrayOf, oneOfType, string } = PropTypes;

Card.propTypes = {
  children: oneOfType([shape({}), arrayOf(shape({}))]).isRequired,
  img: shape({}).isRequired,
  title: string,
  alt: string,
};

Card.defaultProps = {
  title: '',
  alt: '',
};

export default Card;