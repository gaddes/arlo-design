import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import flatten from 'lodash/flatten';
import countBy from 'lodash/countBy';
import uniq from 'lodash/uniq';

import Title from './Title';
import Tags from './Tags';
import Excerpts from './Excerpts';

const Div = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: stretch;

  padding: 2rem;
`;

const Blog = () => {
  const data = useStaticQuery(graphql`
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
  `);

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

  const [activeTags, setActiveTags] = useState([]);

  return (
    <>
      <Div>
        <Title />
        <Tags
          tags={uniqTags}
          tagsCount={tagsCount}
          activeTags={activeTags}
          setActiveTags={setActiveTags}
        />
        <Excerpts
          blogs={blogs}
          activeTags={activeTags}
        />
      </Div>
    </>
  );
};

export default Blog;