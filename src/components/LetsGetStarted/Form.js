import React from 'react';
import styled from 'styled-components';

import { Card } from '../common';
import mediaQueries from '../../helpers/mediaQueries';

const Title = styled.div`
  margin: 0.5rem 0 1rem 0;
  text-align: center;
`;

const StyledForm = styled.div({
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'flex-start',

  margin: '2rem 1rem 1rem 1rem',

  ['@media' + mediaQueries.mediumWidth]: {
    margin: '2rem 0 1rem 0',
  },

  '& form': {
    flex: '0 1 600px',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },

  '& input, textarea': {
    border: '1px solid black',
    borderRadius: 5,
    padding: '0.8rem',
    margin: '0.5rem',
    fontSize: 'inherit',
    fontFamily: 'inherit',
  },

  '& button': {
    margin: '1rem 0 0 0',
    padding: '0.5rem 2rem',
    alignSelf: 'center',
  },
});


const Form = () => (
  <Card>
    <Title>Fill out this form and we'll be in touch ASAP</Title>
    <StyledForm>
      <form
        data-netlify="true"
        id='contact'
        name='contact'
        method='post'
        // TODO: choose where to go after submit
        action='/'
        // TODO: set up honeypot and additional spam prevention?
        // data-netlify-honeypot='bot-field'
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="text" name="phone" placeholder="Phone number" />
        <textarea name="query" placeholder="Tell us about your business" rows="10" />
        <button type="submit">Send</button>
      </form>
    </StyledForm>
  </Card>
);

export default Form;