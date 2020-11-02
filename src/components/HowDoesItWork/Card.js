import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Card as BaseCard } from '../common';

import mediaQueries from '../../helpers/mediaQueries';

const Image = styled.div({
  float: 'right',
  margin: '0 0 1rem 1rem',

  '& svg': {
    width: 200,
    height: 150,

    [`@media${mediaQueries.mediumWidth}`]: {
      width: 140,
      height: 120,
    },
  },
});

const Title = styled.div`
  font-size: 1.5rem;
  margin: 0 0 0.5rem;
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

const Content = styled.div`
  > * {
    margin: 1rem 0;

    &:last-child {
      margin: 0;
    }
  }
`;

const Card = ({ Img, ...props }) => (
  <BaseCard>
    <Image>
      <Img alt={props.alt} />
    </Image>
    <Title>{props.title}</Title>
    <Subtitle>{props.subtitle}</Subtitle>
    <Line />
    <Content>{props.children}</Content>
  </BaseCard>
);

const { shape, arrayOf, oneOfType, string, func } = PropTypes;

Card.propTypes = {
  children: oneOfType([shape({}), arrayOf(shape({}))]).isRequired,
  Img: func.isRequired,
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