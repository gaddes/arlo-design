import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { Section } from '../components/common';

const Div = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
`;

const Content = styled.div`
  flex: 0 1 800px;
  width: 100%; // Required for mobile screens, not sure why 🤔
  
  h1, h2 {
    margin: 0 0 1rem 0;
  }
  
  a {
    text-decoration: underline;
  }
  
  code {
    background-color: var(--light-gray);
    padding: 0.25rem;
    overflow: auto;
  }
  
  pre > code {
    display: block;
    padding: 0.5rem;
  }
`;

export default function BlogPost({ data }) {
  const post = data.markdownRemark;

  return (
    <Section title={post.frontmatter.title}>
      <Div>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      </Div>
    </Section>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;