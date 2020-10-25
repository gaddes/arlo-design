import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Card } from '../common';

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

const ExcerptTags = ({ tags }) => {
  if (!tags) return null;
  return (
    <div>
      {tags.map(tag => <span key={tag} className="excerpt-tag">#{tag}</span>)}
    </div>
  );
};

const { arrayOf, shape, string } = PropTypes;

ExcerptTags.propTypes = {
  tags: arrayOf(string),
};

ExcerptTags.defaultProps = {
  tags: [],
};

const BlogExcerpts = ({ blogs }) => {
  return (
    blogs.map(({ node }) => (
      <Card
        key={node.id}
        style={{ margin: '1rem 0' }}
      >
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
    ))
  );
};

BlogExcerpts.propTypes = {
  blogs: arrayOf(shape({})).isRequired,
};

export default BlogExcerpts;