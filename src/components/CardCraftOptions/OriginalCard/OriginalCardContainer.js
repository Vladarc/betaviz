import React from 'react';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';
import OriginalCard from './OriginalCard';
import { toJS } from '../../hoc/toJs/toJs';
import {
  changeImage,
  selectRowHandle,
  selectCornerHandle,
  selectMaterialHandle,
  selectSizeHandle,
  selectDefaultCombination,
} from '../../../actions/originalCardsActions';
import { setCraftOptions } from '../../../actions/orderInformationActions';

const OriginalCardContainer = (props) => (
  <Container maxWidth="lg">
    <OriginalCard {...props} />
  </Container>
);
const mapStateToProps = (state) => ({
  productImg: state.getIn(['originalCardReducer', 'productImage']),
  cardFeatured: state.getIn(['originalCardReducer', 'cardFeatured']),
  sizeOption: state.getIn(['originalCardReducer', 'sizeOption']),
  chooseMaterial: state.getIn(['originalCardReducer', 'chooseMaterial']),
  chooseCorners: state.getIn(['originalCardReducer', 'chooseCorners']),
  quanTityTableData: state.getIn(['originalCardReducer', 'quanTityTable']),
  selectedElements: state.getIn(['originalCardReducer', 'selectedElements']),
  summaryOrderInfo: state.getIn(['originalCardReducer', 'summaryOrderInfo']),
  isSetDefaultOptions: state.getIn([
    'originalCardReducer',
    'isSetDefaultOptions',
  ]),
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  changeImage: (payload) => dispatch(changeImage(payload)),
  selectRowHandle: (payload) => dispatch(selectRowHandle(payload)),
  selectCornerHandle: (payload) => dispatch(selectCornerHandle(payload)),
  selectMaterialHandle: (payload) => dispatch(selectMaterialHandle(payload)),
  selectSizeHandle: (payload) => dispatch(selectSizeHandle(payload)),
  setDefaultCombination: (payload) =>
    dispatch(selectDefaultCombination(payload)),
  setCraftOptions: (payload) => dispatch(setCraftOptions(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(OriginalCardContainer));
