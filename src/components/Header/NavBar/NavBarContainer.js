import React from 'react';
import { connect } from 'react-redux';
import { toJS } from '../../hoc/toJs/toJs';
import NavBar from './NavBar';
import { toggleNavBarMenuHandler } from '../../../actions/navBarActions';

const NavBarContainer = (props) => <NavBar {...props} />;

const mapStateToProps = (state) => ({
  links: state.getIn(['navBarReducer', 'navBarLinks']),
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  toggleNavBarMenuHandler: (payload) =>
    dispatch(toggleNavBarMenuHandler(payload)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(NavBarContainer));
