import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import difference from 'lodash/difference';

import { Card } from '../common';

const Div = styled.div`
  align-self: center;
  max-width: 800px;
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

const BlogExcerpts = ({ blogs, activeTags }) => (
  <Div>
    {blogs.map(({ node }) => {
      const { tags } = node.frontmatter;

      // If user has selected one or more active tags, and the current blog post
      //  doesn't include every active tag, return null.
      // If the array of activeTags is empty, this means the user has not
      //  filtered the blogs and we should display all.
      if (activeTags.length && difference(activeTags, tags).length) return null;

      return (
        <Card
          key={node.id}
          style={{ margin: '1.5rem 0' }}
        >
          <Excerpt key={node.id}>
            <Link
              to={node.fields.slug}
            >
              <div className="excerpt-title">
                <h3>{node.frontmatter.title}</h3>
                <ExcerptTags tags={tags} />
              </div>
              <div>{node.frontmatter.date}</div>
              <div>{node.excerpt}</div>
            </Link>
          </Excerpt>
        </Card>
      )
    })}
  </Div>
);

BlogExcerpts.propTypes = {
  blogs: arrayOf(shape({})).isRequired,
  activeTags: arrayOf(string),
};

BlogExcerpts.defaultProps = {
  activeTags: [],
}

export default BlogExcerpts;