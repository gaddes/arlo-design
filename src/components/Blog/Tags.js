import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import noop from 'lodash/noop';
import without from 'lodash/without';
import concat from 'lodash/concat';

const Tags = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 0 0;
`;

const toggleTag = (name, activeTags, setActiveTags) => {
  if (activeTags.includes(name)) {
    const newActiveTags = without(activeTags, name);
    setActiveTags(newActiveTags);
  } else {
    const newActiveTags = concat(activeTags, name);
    setActiveTags(newActiveTags);
  }
};

const StyledTag = styled.span`
  margin: 0 0.5rem 1rem 0.5rem;
  padding: 0.2rem 0.5rem;
  background: ${props => (props.active
    ? 'var(--orange)'
    : 'var(--pale-yellow)'
  )};
  border: 1px solid var(--dusty-blue);
  border-radius: 1rem;
  cursor: pointer;
`;

const Tag = ({ name, count, activeTags, setActiveTags }) => (
  // TODO: this should be a button for semantics (without styles)
  //  or possibly add type="button"?
  // TODO: toggle active in state with click handler
  // TODO: simplify these args?
  <StyledTag
    onClick={() => toggleTag(name, activeTags, setActiveTags)}
    active={activeTags.includes(name)}
  >
    {`#${name} [${count}]`}
  </StyledTag>
);

const { arrayOf, string, shape, number, func } = PropTypes;

Tag.propTypes = {
  name: string.isRequired,
  count: number.isRequired,
  activeTags: arrayOf(string),
  setActiveTags: func,
};

Tag.defaultProps = {
  activeTags: [],
  setActiveTags: noop,
};

const BlogTags = props => (
  <Tags>
    {props.tags.map(tag => (
      <Tag
        key={tag}
        name={tag}
        count={props.tagsCount[tag]}
        {...props}
      />
    ))}
  </Tags>
);

BlogTags.propTypes = {
  tags: arrayOf(string).isRequired,
  tagsCount: shape({}).isRequired,
};

export default BlogTags;