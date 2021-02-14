import React from 'react';
import PropTypes from 'prop-types';

export const UL = (props) => {
  return <ul className={props.className}>{props.children}</ul>;
};
UL.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};
