import React from "react";
import { connect } from "react-redux";


const OrderInformation = (props) => {
  return <>{props.children}</>;
};



export default connect(null)(OrderInformation);
