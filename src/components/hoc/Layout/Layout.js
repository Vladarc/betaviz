import React from "react";
import "../../../styles/Layout.scss";
import { connect } from "react-redux";
import { toJS } from "../../hoc/toJs/toJs";
import {  makeStyles } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";

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
const mapStateToProps = (state) => {
  return {
    isBackDropVisible: state.getIn(["navBarReducer", "isBackDropVisible"]),
  };
};
export default connect(mapStateToProps)(toJS(Layout));
