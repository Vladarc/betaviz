import React from "react";
import "./OriginalCard.scss";
import ProductOptionsImage from "../ProductOptionsImage/ProductOptionsImage";
import OptionImgDescription from "../ProductOptionImgDescription/OptionImgDescription";
import CardFeatured from "./OriginalCardFeatured/OriginalCardFeatured";
import SizeOptions from "../GetSizeOption/SizeOptions";
import ChooseFinish from "../ChooseFinish/ChooseFinish";
import SelectCorners from "../SelectCorners/SelectCorners";
import QuantityTable from "../QuantityTable/QuantityTable";
import { Button, makeStyles } from "@material-ui/core";
import { Summary } from "../Summary/Summary";
import {Link} from "react-router-dom"
const useOriginCardStyles = makeStyles(() => ({
  root: {
    padding: "7px 0",
    fontSize: "1.4rem",
  },
}));

const OriginalCard = (props) => {
  const classes = useOriginCardStyles();
  const setOrderInfo = () => {
    const price = props.summaryOrderInfo.tableValues.body[6].value
    const selectedElements = props.selectedElements
    props.setCraftOptions({price,selectedElements})
  }


  
  return (
    <div className={"row original-card"}>
      <div className={"col col--1-6 original-card__images"}>
        <div className={"position-sticky"}>
          <ProductOptionsImage
            productImg={props.productImg}
            dispatch={props.dispatch}
          />
          <OptionImgDescription />
        </div>
      </div>
      <div className={"col col--1-6 original-card__options"}>
        <CardFeatured cardFeatured={props.cardFeatured} />
        <SizeOptions
          sizeOption={props.sizeOption}
          changeImage={props.changeImage}
          selectedElementSize={props.selectedElements.size }
          selectSizeHandle={props.selectSizeHandle}
          setDefaultCombination={props.setDefaultCombination}
          isSetDefaultOptions={props.isSetDefaultOptions}
        />

        <ChooseFinish
          chooseMaterial={props.chooseMaterial}
          selectMaterialHandle={props.selectMaterialHandle}
          selectedElementMaterial={props.selectedElements.material}
          setDefaultCombination={props.setDefaultCombination}
          isSetDefaultOptions={props.isSetDefaultOptions}
        />
        <SelectCorners
          label={props.chooseCorners}
          selectedElementsCorner={props.selectedElements.corner}
          selectCornerHandle={props.selectCornerHandle}
          setDefaultCombination={props.setDefaultCombination}
          isSetDefaultOptions={props.isSetDefaultOptions}
        />
        <QuantityTable
          tableValues={props.quanTityTableData}
          selectRowHandle={props.selectRowHandle}
          selectedElementsQty={props.selectedElements.qty}
          setDefaultCombination={props.setDefaultCombination}
          isSetDefaultOptions={props.isSetDefaultOptions}
        />
        <Summary orderInfo={props.summaryOrderInfo} />

        <div>
          <Button
            onClick={setOrderInfo}
            component={Link}
            to="cardtemplates"
            variant="contained"
            color="secondary"
            fullWidth
            className={classes.root}
            disabled={!(props.isSetDefaultOptions)}
          >
            Start making
          </Button>
        </div>
      </div>
    </div>
  );
};
export default OriginalCard;
