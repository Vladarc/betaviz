import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { toJS } from '../components/hoc/toJs/toJs';

const RouteWrapper = ({
  component: Component,
  isPrivate,
  isSelectOptions,
  ...rest
}) => {
  if (isPrivate && !isSelectOptions) {
    return <Redirect to="/originalcard" />;
  }

  return <Route {...rest} component={Component} />;
};

const mapStateToProps = (state) => ({
  isSelectOptions: state.getIn(['orderInformationReducer', 'optionsSelected']),
});
RouteWrapper.propTypes = {
  component: PropTypes.any,
  isPrivate: PropTypes.any,
  isSelectOptions: PropTypes.any,
};
export default connect(mapStateToProps)(toJS(RouteWrapper));
