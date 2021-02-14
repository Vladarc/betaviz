import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/Layout.scss';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import { toJS } from '../toJs/toJs';

const useLayoutStyles = makeStyles(() => ({
  Backdrop: {
    zIndex: 2,
  },
}));
const Layout = (props) => {
  const classes = useLayoutStyles();
  return (
    <main>
      {props.isBackDropVisible ? (
        <Backdrop
          open={props.isBackDropVisible}
          className={classes.Backdrop}
          transitionDuration={0.3}
        />
      ) : null}

      {props.children}
    </main>
  );
};
Layout.propTypes = {
  isBackDropVisible: PropTypes.bool,
  children: PropTypes.element,
};
const mapStateToProps = (state) => ({
  isBackDropVisible: state.getIn(['navBarReducer', 'isBackDropVisible']),
});
export default connect(mapStateToProps)(toJS(Layout));
