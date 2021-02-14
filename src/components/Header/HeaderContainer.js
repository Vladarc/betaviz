import React from 'react';
import { connect } from 'react-redux';
import { toJS } from '../hoc/toJs/toJs';
import Header from './Header';

const HeaderContainer = (props) => <Header {...props} />;
// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(HeaderContainer));
