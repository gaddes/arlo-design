import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { Card as BaseCard } from '../common';

const Title = styled.div`
  font-size: 2rem;
  text-align: center;
`;

const ImgWrapper = styled.div`
  padding: 2rem 3rem;
`;

const ContentWrapper = styled.div`
  * {
    margin: 1rem;
  }
`;

const Card = props => {
  return (
    <BaseCard>
      <Title>{props.title}</Title>
      <ImgWrapper>
        <Img
          fluid={props.img}
          alt={props.alt}
        />
      </ImgWrapper>
      <ContentWrapper>
        {props.children}
      </ContentWrapper>
    </BaseCard>
  );
};

export default Card;