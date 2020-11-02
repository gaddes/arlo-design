import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Card as BaseCard } from '../common';

const Title = styled.div`
  font-size: 2rem;
  text-align: center;
`;

const Image = styled.div`
  text-align: center;

  svg {
    width: 250px;
    height: 200px;
  }
`;

const ContentWrapper = styled.div`
  * {
    margin: 1rem;
  }
`;

const Card = ({ Img, ...props }) => (
  <BaseCard>
    <Title>{props.title}</Title>
    <Image className={props.imageClassName}>
      <Img alt={props.alt} />
    </Image>
    <ContentWrapper className={props.contentClassName}>
      {props.children}
    </ContentWrapper>
  </BaseCard>
);

const { shape, arrayOf, oneOfType, string, func } = PropTypes;

Card.propTypes = {
  children: oneOfType([shape({}), arrayOf(shape({}))]).isRequired,
  Img: func.isRequired,
  title: string,
  alt: string,
  contentClassName: string,
  imageClassName: string,
};

Card.defaultProps = {
  title: '',
  alt: '',
  contentClassName: '',
  imageClassName: '',
};

export default Card;