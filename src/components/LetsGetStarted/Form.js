import React from 'react';
import styled from 'styled-components';

import { Card as BaseCard } from '../common';

const Card = styled(BaseCard)`
  margin: 0 2rem 0 0;
`;

const Title = styled.div`
  margin: 0.5rem 0 1rem 0;
  text-align: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: stretch;
  
  min-width: 400px;
  margin: 2rem 2rem 1rem 2rem;

  input, textarea {
    border: 1px solid black;
    border-radius: 5px;
    padding: 0.8rem;
    margin: 0.5rem;
    font-size: inherit;
    font-family: inherit;
  }
  
  button {
    margin: 1rem 0 0 0;
    align-self: center;
  }
`;


const Form = () => (
  <Card>
    <Title>Fill out this form and we'll be in touch ASAP</Title>
    <StyledForm
      netlify
      id='contact'
      name='contact'
      method='post'
      // TODO: choose where to go after submit
      // action='/contact/thanks/'
      data-netlify-honeypot='bot-field'
    >
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="text" name="phone" placeholder="Phone number" />
      <textarea name="query" placeholder="Tell us about your business" rows="10" />
      <button type="submit">Send</button>
    </StyledForm>
  </Card>
);

export default Form;