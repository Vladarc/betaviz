import React from 'react';
import { connect } from 'react-redux';
import { toJS } from '../hoc/toJs/toJs';
import Header from './Header';
import { hoverTogglHandler } from '../../actions/headerActions';

const HeaderContainer = (props) => <Header {...props} />;

const mapStateToProps = (state) => ({
  headerLinks: state.getIn(['headerReducer', 'headerLinks']),
  languagesList: state.getIn(['headerReducer', 'language']),
  langSelectClasses: state.getIn(['headerReducer', 'languageSelectClasses']),
});

const mapDispatchToProps = (dispatch) => ({
  hoverTogglHandler: (payload) => dispatch(hoverTogglHandler(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(HeaderContainer));
