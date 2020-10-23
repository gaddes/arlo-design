import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import flatten from 'lodash/flatten';
import uniq from 'lodash/uniq';
import countBy from 'lodash/countBy';

import { SEO } from '../../components';
import { Card } from '../../components/common';

const Div = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: stretch;

  padding: 2rem;
`;

const PageTitle = styled.div`
  align-self: center;
  text-align: center;

  * {
    margin: 1rem 0;
  }
`;

const HashTags = styled.div`
  margin-top: 2rem;

  > span {
    margin: 0.5rem;
    padding: 0.2rem 0.5rem;
    background: var(--golden-yellow);
    border-radius: 1rem;
  }
`;


const Excerpt = styled.div`
  .excerpt-title {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }
  
  .excerpt-tag {
    margin: 0 0 0 0.5rem;
  }
`;

const Tag = ({ name }) => (
  <span>{`#${name}`}</span>
);

const ExcerptTags = ({ tags }) => {
  if (!tags) return null;
  return (
    <div>
      {tags.map(tag => <span key={tag} className="excerpt-tag">#{tag}</span>)}
    </div>
  );
};

export default function BlogLandingPage({ data }) {
  const blogs = data.allMarkdownRemark.edges;

  const hashtags =
    // Flatten each array of tags into a single array
    flatten(blogs.map(({ node }) => node.frontmatter.tags))
    // Remove null values (e.g. if post has no tag)
    .filter(tag => tag !== null);

  // Object where key = tag, value = count (number of times tag occurs)
  const tagsCount = countBy(hashtags);

  // Array with only one of each hashtag
  const uniqTags = uniq(hashtags);

  return (
    <>
      <SEO title="Blog" />
      <Div>
        <PageTitle>
          <h1>Blog</h1>
          <h2>Whatever pops into my head...</h2>
          <HashTags>
            {uniqTags.map(tag => <Tag key={tag} name={tag} />)}
          </HashTags>
        </PageTitle>
        {blogs.map(({ node }) => (
          <Card style={{ margin: '1rem 0' }}>
            <Excerpt key={node.id}>
              <Link
                to={node.fields.slug}
              >
                <div className="excerpt-title">
                  <h3>{node.frontmatter.title}</h3>
                  <ExcerptTags tags={node.frontmatter.tags} />
                </div>
                <div>{node.frontmatter.date}</div>
                <div>{node.excerpt}</div>
              </Link>
            </Excerpt>
          </Card>
        ))}
      </Div>
    </>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`;