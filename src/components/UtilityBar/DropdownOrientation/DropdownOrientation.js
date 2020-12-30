import React, { useState } from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';

const useChooseOrientation = makeStyles({
  keyboardArrowUpIcon: {
    fontSize: '2.4rem',
    fill: '#009870',
  },
  CheckIcon: {
    fontSize: '2rem',
    fill: '#009870',
  },
});

const DropdownOrientation = (props) => {
  const [orientationListOpen, setOrientationListOpen] = useState(false);
  const classes = useChooseOrientation();
  const orientationDropdownHandler = () => {
    setOrientationListOpen(!orientationListOpen);
  };
  const setOrientationHandler = (orientation) => {
    props.setNewCanvasOrientation(orientation);
    props.updateCanvasHandler();
  };
  return (
    <div
      className={`choose-orientation ${
        orientationListOpen ? 'choose-orientation--open' : ''
      }`}
      onClick={orientationDropdownHandler}
    >
      <div className="menu-content">
        <span className="choose-corner__title">Orientation</span>
        <KeyboardArrowUpIcon
          className={`${classes.keyboardArrowUpIcon} keyboardArrowUpIcon`}
        />
      </div>
      <ul className="chooser-orientation">
        <li
          className={`chooser-orientation__item ${
            props.orientation === 'landscape'
              ? 'chooser-orientation__item--selected'
              : ''
          }`}
          onClick={() => setOrientationHandler('landscape')}
        >
          Landscape
          {props.orientation === 'landscape' ? (
            <div className="chooser-corner__check-mark">
              <CheckIcon className={classes.CheckIcon} />
            </div>
          ) : null}
        </li>
        <li
          className={`chooser-orientation__item ${
            props.orientation === 'portrait'
              ? 'chooser-orientation__item--selected'
              : ''
          }`}
          onClick={() => setOrientationHandler('portrait')}
        >
          Portrait
          {props.orientation === 'portrait' ? (
            <div className="chooser-corner__check-mark">
              <CheckIcon className={classes.CheckIcon} />
            </div>
          ) : null}
        </li>
      </ul>
    </div>
  );
};

DropdownOrientation.propTypes = {
  orientation: PropTypes.string,
  setNewCanvasOrientation: PropTypes.func,
  updateCanvasHandler: PropTypes.func,
};

export default DropdownOrientation;
