import React from "react";
import { toJS } from "../hoc/toJs/toJs";
import { connect } from "react-redux";

import { CardTemplates } from "./CardTemplates";

const CardTemplatesContainer = (props) => <CardTemplates {...props} />;

const mapStateToProps = (state) => {
  return {
   selectedSize:state.getIn(["OriginalCardReducer", "order", "size"]),
   sizeOptions:state.getIn(["OriginalCardReducer",  "mockUps", "sizes"])

  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(CardTemplatesContainer));
