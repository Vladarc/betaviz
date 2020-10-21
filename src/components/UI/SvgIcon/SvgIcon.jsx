import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as US } from '../../../image/usa.svg';
import { ReactComponent as Search } from '../../../image/search.svg';
import { ReactComponent as Cart } from '../../../image/cart.svg';

const us = <US />;
const search = <Search />;
const cart = <Cart />;

const getPath = (name) => {
  switch (name) {
    case 'usa':
      return [us, '0 0 512 512', 'http://www.w3.org/2000/svg'];
    case 'search':
      return [search, '0 0 512 512', 'http://www.w3.org/2000/svg'];
    case 'cart':
      return [cart, '0 0 511.343 511.343', 'http://www.w3.org/2000/svg'];
    default:
      return [];
  }
};

const SVGIcon = ({ name, id, size, className }) => {
  let [svg, viewBox, xmlns] = getPath(name);
  let [width, height] = size;
  return (
    <svg
      className={className}
      id={id}
      height={height}
      viewBox={viewBox}
      width={width}
      xmlns={xmlns}
    >
      {svg}
    </svg>
  );
};
SVGIcon.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.array,
  className: PropTypes.string,
};
export default SVGIcon;
