import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tags = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;

  > span {
    margin: 0 0.5rem;
    padding: 0.2rem 0.5rem;
    // TODO: bgColor should depend on "active" state
    background: var(--golden-yellow);
    border-radius: 1rem;
  }
`;

const Tag = ({ name, count }) => (
  // TODO: this should be a button for semantics (without styles)
  //  or possibly add type="button"?
  // TODO: toggle active in state with click handler
  <span onClick={() => console.log(name)}>{`#${name} [${count}]`}</span>
);

const { arrayOf, string, shape, number } = PropTypes;

Tag.propTypes = {
  name: string,
  count: number,
};

const BlogTags = ({ tags, tagsCount }) => {
  return (
    <Tags>
      {tags.map(tag => (
        <Tag
          key={tag}
          name={tag}
          count={tagsCount[tag]}
        />
      ))}
    </Tags>
  );
};

BlogTags.propTypes = {
  tags: arrayOf(string).isRequired,
  tagsCount: shape({}).isRequired,
};

export default BlogTags;