import React from 'react';
import PropTypes from 'prop-types';

export const Image = (props) => (
  <img src={props.src} alt={props.alt} className={props.className} />
);
Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};
