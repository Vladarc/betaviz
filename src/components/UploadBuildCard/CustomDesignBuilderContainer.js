import React from 'react';
import { connect } from 'react-redux';
import CustomDesignBuilder from './CustomDesignBuilder';
import { toJS } from '../hoc/toJs/toJs';
import {
  onNextUploadImageStep,
  setFrontImageURL,
  setFrontImgCoord,
  updateFrontCoord,
  setNewCanvasOrientation,
} from '../../actions/uploadCardBuilderActions';
import { setNewCornerValue } from '../../actions/orderInformationActions';

const CustomDesignBuilderContainer = (props) => (
  <CustomDesignBuilder {...props} />
);

const mapStateToProps = (state) => ({
  step: state.getIn(['uploadCardBuilderReducer', 'step']),
  frontImgUrl: state.getIn(['uploadCardBuilderReducer', 'frontImageUrl']),
  orientation: state.getIn(['uploadCardBuilderReducer', 'orientation']),
  orderInfo: state.getIn(['orderInformationReducer', 'order']),
  frontDefaultCoord: state.getIn([
    'uploadCardBuilderReducer',
    'frontDefaultCoord',
  ]),
});

const mapDispatchToProps = (dispatch) => ({
  onNextUploadImageStep: (payload) => dispatch(onNextUploadImageStep(payload)),
  setFrontImageURL: (payload) => dispatch(setFrontImageURL(payload)),
  setNewCornerValue: (payload) => dispatch(setNewCornerValue(payload)),
  setFrontImgCoord: (payload) => dispatch(setFrontImgCoord(payload)),
  updateFrontCoord: (payload) => dispatch(updateFrontCoord(payload)),
  setNewCanvasOrientation: (payload) =>
    dispatch(setNewCanvasOrientation(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(CustomDesignBuilderContainer));
