import React from 'react';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';
import { toJS } from '../hoc/toJs/toJs';

import { CardTemplates } from './CardTemplates';
import {
  setNewSize,
  setNewPaperValue,
} from '../../actions/orderInformationActions';

const CardTemplatesContainer = (props) => {
  return (
    <Container maxWidth="lg">
      <CardTemplates {...props} />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  orderOptions: state.getIn(['orderInformationReducer', 'order']),
  sizes: state.getIn(['cardTemplatesReducer', 'sizeOptions']),
  paper: state.getIn(['cardTemplatesReducer', 'paperOptions']),
});
const mapDispatchToProps = (dispatch) => ({
  setNewSize: (payload) => dispatch(setNewSize(payload)),
  setNewPaperValue: (payload) => dispatch(setNewPaperValue(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(CardTemplatesContainer));
