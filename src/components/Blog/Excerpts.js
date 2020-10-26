import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import difference from 'lodash/difference';
import { motion, AnimatePresence } from 'framer-motion';

import { Card } from '../common';
import useSiteMetadata from '../../hooks/useSiteMetadata';

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
  
  .excerpt-date {
    margin: 0.5rem 0;
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

const BlogExcerpts = ({ blogs, activeTags }) => {
  const siteMetadata = useSiteMetadata();

  if (!blogs.length) {
    return (
      <Div  style={{ marginTop: '1rem' }}>
        <span>There are no blogs yet... if you'd like to request one, let us know at</span>
        {' '}
        <a
          href={`mailto:${siteMetadata.email}`}
          style={{ textDecoration: 'underline' }}
        >
          {siteMetadata.email}
        </a>
        {'.'}
      </Div>
    );
  }

  return (
    <Div>
      {blogs.map(({ node }) => {
        const { tags } = node.frontmatter;

        // We have to check this const in return() statement to work correctly with framer motion 'exit' prop.
        //  - !activeTags.length = user has NOT selected a filter, so we show ALL excerpts.
        //  - !difference(activeTags, tags).length = activeTags and this excerpt's tags are exactly the same.
        //    If user has selected one or more active tags, this excerpt must include them all to be visible.
        const showExcerpt = !activeTags.length || !difference(activeTags, tags).length;

        return (
          <AnimatePresence>
            {showExcerpt &&
              <motion.div
                key={node.id}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
              >
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
                        <ExcerptTags tags={tags}/>
                      </div>
                      <div className="excerpt-date">{node.frontmatter.date}</div>
                      <div>{node.excerpt}</div>
                    </Link>
                  </Excerpt>
                </Card>
              </motion.div>
            }
          </AnimatePresence>
        );
      })}
    </Div>
  );
}

BlogExcerpts.propTypes = {
  blogs: arrayOf(shape({})).isRequired,
  activeTags: arrayOf(string),
};

BlogExcerpts.defaultProps = {
  activeTags: [],
}

export default BlogExcerpts;