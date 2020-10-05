import React from "react";
import { ReactComponent as US } from "../../../image/usa.svg";
import { ReactComponent as Search } from "../../../image/search.svg";
import { ReactComponent as Cart } from "../../../image/cart.svg";

const getPath = (name) => {
  switch (name) {
    case "usa":
      return [<US />, "0 0 512 512", "http://www.w3.org/2000/svg"];
    case "search":
      return [<Search />, "0 0 512 512", "http://www.w3.org/2000/svg"];
    case "cart":
      return [<Cart />, "0 0 511.343 511.343", "http://www.w3.org/2000/svg"];
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

export default SVGIcon;
