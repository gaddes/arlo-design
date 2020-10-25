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
  margin: 1rem 0;

  > span {
    margin: 0 0.5rem;
    padding: 0.2rem 0.5rem;
    // TODO: bgColor should depend on "active" state
    background: var(--golden-yellow);
    border-radius: 1rem;
  }
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

const Tag = props => (
  // TODO: this should be a button for semantics (without styles)
  //  or possibly add type="button"?
  // TODO: toggle active in state with click handler
  // TODO: simplify these args?
  <span onClick={() => toggleTag(props.name, props.activeTags, props.setActiveTags)}>
    {`#${props.name} [${props.count}]`}
  </span>
);

const { arrayOf, string, shape, number, func } = PropTypes;

Tag.propTypes = {
  name: string,
  count: number,
  activeTags: arrayOf(string),
  setActiveTags: func,
};

Tag.defaultProps = {
  activeTags: [],
  setActiveTags: noop,
};

const BlogTags = props => {
  return (
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
};

BlogTags.propTypes = {
  tags: arrayOf(string).isRequired,
  tagsCount: shape({}).isRequired,
};

export default BlogTags;