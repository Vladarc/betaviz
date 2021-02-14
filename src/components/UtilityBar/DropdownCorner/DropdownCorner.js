import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CategoryIcon from '@material-ui/icons/Category';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import RoundedCornerSharpIcon from '@material-ui/icons/RoundedCornerSharp';
import CheckIcon from '@material-ui/icons/Check';
import RoundedCornerRoundedIcon from '@material-ui/icons/RoundedCornerRounded';
import { makeStyles } from '@material-ui/core/styles';

const useChooseCornerStyles = makeStyles({
  categoryIcon: {
    width: '2.4rem',
    height: '1.9rem',
    marginBottom: '.5rem',
  },
  keyboardArrowUpIcon: {
    fontSize: '2.4rem',
    fill: '#009870',
  },
  CheckIcon: {
    fontSize: '2rem',
    fill: '#009870',
  },
  CornerIcon: {
    position: 'absolute',
    top: '50%',
    left: '65%',
    transform: 'translate(-50%,-50%)',
  },
});

const DropdownCorner = (props) => {
  const classes = useChooseCornerStyles();
  const [cornerListOpen, setCornerListOpen] = useState(false);
  const openCornerListHandler = () => setCornerListOpen(!cornerListOpen);
  const updateCornerValueHandler = (corner) => {
    props.newCornerHandler(corner);
    props.updateCanvasHandler();
  };
  return (
    <>
      <div
        className={`choose-corner ${
          cornerListOpen ? 'choose-corner--open' : ''
        }`}
        onClick={openCornerListHandler}
      >
        <div className="menu-content">
          <span className="choose-corner__title">Corners</span>
          <CategoryIcon className={classes.categoryIcon} />
          <KeyboardArrowUpIcon
            className={`${classes.keyboardArrowUpIcon} keyboardArrowUpIcon`}
          />
        </div>
        <ul className="chooser-corner">
          <li
            onClick={() => updateCornerValueHandler('rounded')}
            className={`chooser-corner__item ${
              props.corner === 'rounded' ? 'chooser-corner__item--selected' : ''
            }`}
          >
            Rounded
            <RoundedCornerRoundedIcon className={classes.CornerIcon} />
            {props.corner === 'rounded' ? (
              <div className="chooser-corner__check-mark">
                <CheckIcon className={classes.CheckIcon} />
              </div>
            ) : null}
          </li>
          <li
            onClick={() => updateCornerValueHandler('square')}
            className={`chooser-corner__item ${
              props.corner === 'square' ? 'chooser-corner__item--selected' : ''
            }`}
          >
            Square
            <RoundedCornerSharpIcon className={classes.CornerIcon} />
            {props.corner === 'square' ? (
              <div className="chooser-corner__check-mark">
                <CheckIcon className={classes.CheckIcon} />
              </div>
            ) : null}
          </li>
        </ul>
      </div>
    </>
  );
};
DropdownCorner.propTypes = {
  newCornerHandler: PropTypes.func,
  updateCanvasHandler: PropTypes.func,
  corner: PropTypes.string,
};
export default DropdownCorner;
