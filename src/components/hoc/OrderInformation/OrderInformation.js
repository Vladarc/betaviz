import React from "react";
import { connect } from "react-redux";


const OrderInformation = (props) => {
  return <>{props.children}</>;
};

const mapStatetoProps = (state) => {
  return {};
};

export default connect(mapStatetoProps)(OrderInformation);
