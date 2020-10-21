import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const OrderInformation = (props) => <>{props.children}</>;
OrderInformation.propTypes = {
  children: PropTypes.element,
};
export default connect(null)(OrderInformation);
