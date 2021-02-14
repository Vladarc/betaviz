import React from 'react';
import PropTypes from 'prop-types';
import DropdownCorner from './DropdownCorner/DropdownCorner';
import DropdownOrientation from './DropdownOrientation/DropdownOrientation';

const UtilityBar = (props) => {
  return (
    <div className="utility-bar">
      <DropdownCorner
        newCornerHandler={props.setNewCorner}
        updateCanvasHandler={props.updateCanvasCoord}
        corner={props.corners}
      />
      <DropdownOrientation
        setNewCanvasOrientation={props.setNewCanvasOrientation}
        updateCanvasHandler={props.updateCanvasCoord}
        orientation={props.orientation}
      />
    </div>
  );
};
UtilityBar.propTypes = {
  updateCanvasCoord: PropTypes.func,
  corners: PropTypes.string,
  setNewCorner: PropTypes.func,
  orientation: PropTypes.string,
  setNewCanvasOrientation: PropTypes.func,
};
export default UtilityBar;
