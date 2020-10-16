import React from 'react';
import styled from 'styled-components';
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
  },

  '.control-dots > .dot': {
    backgroundColor: 'var(--dark-blue)',
    opacity: '0.7',
  },
});

const Carousel = props => (
  <StyledCarousel>
    <BaseCarousel
      showArrows={false}
      showStatus={false}
      dynamicHeight
      useKeyboardArrows
      emulateTouch
      {...props}
    >
      {props.children}
    </BaseCarousel>
  </StyledCarousel>
);

export default Carousel;