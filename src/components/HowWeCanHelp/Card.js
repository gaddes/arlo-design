import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Card as BaseCard } from '../common';

import mediaQueries from '../../helpers/mediaQueries';

const Div = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr 200px',

  ['@media' + mediaQueries.mediumWidth]: {
    gridTemplateColumns: '1fr',
  },
});

const Title = styled.div`
  font-size: 1.2rem;
`;

const Line = styled.div({
  width: 60,
  height: 3,
  backgroundColor: 'var(--dusty-blue)',
  margin: '12px 0',

  ['@media' + mediaQueries.mediumWidth]: {
    margin: '12px auto',
  },
});

const Image = styled.div({
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 0 0 1rem',

  ['@media' + mediaQueries.mediumWidth]: {
    margin: '1.5rem 0 0 0',
  },

  'svg': {
    width: 180,
    height: 120,

    ['@media' + mediaQueries.mediumWidth]: {
      width: 250,
    },
  },
});

const Card = ({ Img, ...props }) => (
  <BaseCard>
    <Div>
      <div>
        <Title>{props.title}</Title>
        <Line />
        {props.children}
      </div>
      <Image>
        <Img alt={props.alt} />
      </Image>
    </Div>
  </BaseCard>
);

const { shape, arrayOf, oneOfType, string, element } = PropTypes;

Card.propTypes = {
  children: oneOfType([shape({}), arrayOf(shape({}))]).isRequired,
  Img: element.isRequired,
  title: string,
  alt: string,
};

Card.defaultProps = {
  title: '',
  alt: '',
};

export default Card;