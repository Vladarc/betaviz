import React from "react";
import { toJS } from "../../hoc/toJs/toJs";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import { toggleNavBarMenuHandler } from "../../../actions/navBarActions"
const NavBarContainer = props => <NavBar {...props} />;

const mapStateToProps = state => {
  return {
    links:state.getIn(["NavBarReducer","navBarLinks"]),
   
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    toggleNavBarMenuHandler: payload => dispatch(toggleNavBarMenuHandler(payload))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(toJS(NavBarContainer));
