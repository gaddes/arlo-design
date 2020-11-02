import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Info from '@material-ui/icons/InfoOutlined';
import Error from '@material-ui/icons/ErrorOutlineOutlined';
import Warning from '@material-ui/icons/ReportProblemOutlined';

// Map props.type against Icon
const iconMap = {
  none: { // No icon specified
    Component: () => null,
    color: 'inherit',
  },
  info: {
    Component: Info,
    color: 'var(--dusty-blue)',
  },
  error: {
    Component: Error,
    color: 'red',
  },
  warning: {
    Component: Warning,
    color: 'var(--orange)',
  },
};

const BaseIcon = props => {
  const { Component } = iconMap[props.type];
  return (
    <Component className={props.className} />
  );
};

const { string } = PropTypes;

BaseIcon.propTypes = {
  type: string,
  className: string,
};

BaseIcon.defaultProps = {
  type: 'none',
  className: '',
};

const Icon = styled(BaseIcon)`
  color: ${props => iconMap[props.type].color};
  margin-right: 1rem;
`;

export default Icon;