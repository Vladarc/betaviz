import React from "react";
import OriginalCard from "./OriginalCard";
import { toJS } from "../../hoc/toJs/toJs";
import { connect } from "react-redux";
import {
  changeImage,
  selectRowHandle,
  selectCornerHandle,
  selectMaterialHandle,
  selectSizeHandle,
  selectDefaultCombination
} from "../../../actions/originalCardsActions";

const OriginalCardContainer = (props) => {
 
  return <OriginalCard {...props} />;
};
const mapStateToProps = (state) => {
  return {
    productImg: state.getIn(["OriginalCardReducer", "productImage"]),
    cardFeatured: state.getIn(["OriginalCardReducer", "cardFeatured"]),
    sizeOption: state.getIn(["OriginalCardReducer", "sizeOption"]),
    chooseMaterial: state.getIn(["OriginalCardReducer", "chooseMaterial"]),
    chooseCorners: state.getIn(["OriginalCardReducer", "chooseCorners"]),
    quanTityTableData: state.getIn(["OriginalCardReducer", "quanTityTable"]),
    selectedElements: state.getIn(["OriginalCardReducer", "selectedElements"]),
    summaryOrderInfo: state.getIn(["OriginalCardReducer", "summaryOrderInfo"]),
    isSetDefaultOptions: state.getIn(["OriginalCardReducer", "isSetDefaultOptions"]),

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,

    changeImage: (payload) => dispatch(changeImage(payload)),
    selectRowHandle: (payload) => dispatch(selectRowHandle(payload)),
    selectCornerHandle: (payload) => dispatch(selectCornerHandle(payload)),
    selectMaterialHandle: (payload) => dispatch(selectMaterialHandle(payload)),
    selectSizeHandle: (payload) => dispatch(selectSizeHandle(payload)),
    setDefaultCombination: (payload) => dispatch(selectDefaultCombination(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(OriginalCardContainer));


