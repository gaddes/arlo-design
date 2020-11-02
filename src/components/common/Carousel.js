import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Carousel as BaseCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const StyledCarousel = styled.div({
  '.carousel-root': {
    width: '100%',
  },

  '.slider-wrapper': {
    // Push 'control dots' down so they don't overlap content
    marginBottom: '3rem',
  },

  '.slide': {
    // Default background is black
    background: 'transparent',
    padding: '0 0.5rem',
    textAlign: props => props.alignLeft && 'left',
  },

  '.control-dots > .dot': {
    backgroundColor: 'var(--dark-blue)',
    opacity: '0.7',
  },
});

const Carousel = props => (
  <StyledCarousel alignLeft={props.alignLeft}>
    <BaseCarousel
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      dynamicHeight
      useKeyboardArrows
      emulateTouch
      {...props}
    >
      {props.children}
    </BaseCarousel>
  </StyledCarousel>
);

const { bool, node } = PropTypes;

Carousel.propTypes = {
  children: node.isRequired,
  alignLeft: bool,
};

Carousel.defaultProps = {
  alignLeft: false,
};

export default Carousel;