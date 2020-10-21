import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/HoverSelect.scss';

const HoverSelect = (props) => {
  const cls = ['hover-dropdown', props.isActive ? 'active' : ''];
  return (
    <div className={cls.join(' ')}>
      <div className="hover-dropdown_content">{props.children}</div>
    </div>
  );
};
HoverSelect.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.element,
};
export default HoverSelect;
