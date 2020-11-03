import React from 'react';
import { connect } from 'react-redux';
import CustomDesignBuilder from './CustomDesignBuilder';
import { toJS } from '../hoc/toJs/toJs';
import {
  onNextUploadImageStep,
  setFrontImageURL,
} from '../../actions/uploadCardBuilderActions';

const CustomDesignBuilderContainer = (props) => (
  <CustomDesignBuilder {...props} />
);

const mapStateToProps = (state) => ({
  step: state.getIn(['uploadCardBuilderReducer', 'step']),
  frontImgUrl: state.getIn(['uploadCardBuilderReducer', 'frontImageUrl']),
  orientation: state.getIn(['uploadCardBuilderReducer', 'orientation']),
  orderInfo: state.getIn(['orderInformationReducer', 'order']),
});

const mapDispatchToProps = (dispatch) => ({
  onNextUploadImageStep: (payload) => dispatch(onNextUploadImageStep(payload)),
  setFrontImageURL: (payload) => dispatch(setFrontImageURL(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(CustomDesignBuilderContainer));
