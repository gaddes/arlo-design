import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { Card as BaseCard } from '../common';

const Title = styled.div`
  font-size: 1.2rem;
`;

const Subtitle = styled.div`
  text-transform: uppercase;
`;

const Line = styled.div`
  width: 60px;
  height: 3px;
  background-color: var(--dusty-blue);
  margin: 12px 0;
`;

const ImgWrapper = styled.div`
  float: right;
  margin: 0 0 1rem 1rem;
`;

const Card = props => (
  <BaseCard>
    <ImgWrapper>
      <Img
        fixed={props.img}
        alt={props.alt}
      />
    </ImgWrapper>
    <Title>{props.title}</Title>
    <Subtitle>{props.subtitle}</Subtitle>
    <Line />
    {props.children}
  </BaseCard>
);

const { shape, arrayOf, oneOfType, string } = PropTypes;

Card.propTypes = {
  children: oneOfType([shape({}), arrayOf(shape({}))]).isRequired,
  img: shape({}).isRequired,
  title: string,
  subtitle: string,
  alt: string,
};

Card.defaultProps = {
  title: '',
  subtitle: '',
  alt: '',

};

export default Card;