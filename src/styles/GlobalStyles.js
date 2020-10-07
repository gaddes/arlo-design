import { createGlobalStyle } from 'styled-components';
import mediaQueries from '../helpers/mediaQueries';

const GlobalStyles = createGlobalStyle({
  ':root': {
    '--dark-blue': '#002C32',
    '--dusty-blue': '#5B7B89',
    '--pale-blue': '#90B1BF',
    '--pale-yellow': '#E1D9B7',
    '--golden-yellow': '#DFC77E',
    '--orange': '#DD9F27',

    '--gray': '#E0E0E0',
    '--light-gray': '#F2F2F2',
    '--dark-gray': '#E2E2E2',
  },

  html: {
    fontSize: 16,

    ['@media' + mediaQueries.mediumWidth]: {
      fontSize: 14,
    },

    fontFamily: 'Arial, sans-serif',
  },

  body: {
    margin: 0,
    background: 'url("repeating_triangles_extra_light.svg") fixed',
    backgroundSize: '75%',
  },

  button: {
    fontSize: 'inherit',
    border: 'none',
    boxShadow: '1px 1px 5px 0 rgba(0,0,0,0.25)',
    backgroundColor: 'var(--orange)',
    padding: '0.5rem 1rem',
    borderRadius: 5,
    cursor: 'pointer',
  },
});

export default GlobalStyles;