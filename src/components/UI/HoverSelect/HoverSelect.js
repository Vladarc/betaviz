import React from "react";
import "./HoverSelect.scss";


const HoverSelect = props => {
    const cls = [
      'hover-dropdown',
       props.isActive ? 'active' : "",
      

    ]
  return (
    <div className={cls.join(' ')}>
      <div className={"hover-dropdown_content"}>
       {props.children}
      </div>
    </div>
  );
};

export default HoverSelect;