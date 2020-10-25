import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  h2 {
    margin: 1.5rem 0 1rem 0;
  }
`;

const BlogTitle = () => {
  return (
    <Title>
      <h1>Blog</h1>
      <h2>Whatever pops into my head...</h2>
    </Title>
  );
};

export default BlogTitle;