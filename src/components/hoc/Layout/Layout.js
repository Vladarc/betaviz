import React from "react";
import "../../../styles/Layout.scss";
import { connect } from "react-redux";
import { toJS } from "../../hoc/toJs/toJs";
import { Container, makeStyles } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";

const useLayoutStyles = makeStyles(() => ({
  Backdrop: {
    zIndex: 2,
  },
}));
const Layout = (props) => {
  const classes = useLayoutStyles();
  return (
    <Container maxWidth="lg">
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
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    isBackDropVisible: state.getIn(["NavBarReducer", "isBackDropVisible"]),
  };
};
export default connect(mapStateToProps)(toJS(Layout));
