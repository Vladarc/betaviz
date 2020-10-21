import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/OriginalCard.scss';
import { Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ProductOptionsImage from '../ProductOptionsImage/ProductOptionsImage';
import OptionImgDescription from '../ProductOptionImgDescription/OptionImgDescription';
import CardFeatured from './OriginalCardFeatured/OriginalCardFeatured';
import SizeOptions from '../GetSizeOption/SizeOptions';
import ChooseFinish from '../ChooseFinish/ChooseFinish';
import SelectCorners from '../SelectCorners/SelectCorners';
import QuantityTable from '../QuantityTable/QuantityTable';
import { Summary } from '../Summary/Summary';

const useOriginCardStyles = makeStyles(() => ({
  root: {
    padding: '7px 0',
    fontSize: '1.4rem',
  },
}));

const OriginalCard = (props) => {
  const classes = useOriginCardStyles();

  const setOrderInfo = () => {
    const price = props.summaryOrderInfo.tableValues.body[6].value;
    const { selectedElements } = props;
    props.setCraftOptions({ price, selectedElements });
  };
  return (
    <div className="row original-card">
      <div className="col col--1-6 original-card__images">
        <div className="position-sticky">
          <ProductOptionsImage
            productImg={props.productImg}
            dispatch={props.dispatch}
          />
          <OptionImgDescription />
        </div>
      </div>
      <div className="col col--1-6 original-card__options">
        <CardFeatured cardFeatured={props.cardFeatured} />
        <SizeOptions
          sizeOption={props.sizeOption}
          changeImage={props.changeImage}
          selectedElementSize={props.selectedElements.size}
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
            disabled={!props.isSetDefaultOptions}
          >
            Start making
          </Button>
        </div>
      </div>
    </div>
  );
};
OriginalCard.propTypes = {
  selectedElements: PropTypes.object,
  summaryOrderInfo: PropTypes.object,
  productImg: PropTypes.object,
  cardFeatured: PropTypes.object,
  sizeOption: PropTypes.object,
  quanTityTableData: PropTypes.object,
  chooseMaterial: PropTypes.array,
  chooseCorners: PropTypes.array,
  selectMaterialHandle: PropTypes.func,
  setCraftOptions: PropTypes.func,
  dispatch: PropTypes.func,
  selectSizeHandle: PropTypes.func,
  changeImage: PropTypes.func,
  setDefaultCombination: PropTypes.func,
  isSetDefaultOptions: PropTypes.bool,
  selectCornerHandle: PropTypes.func,
  selectRowHandle: PropTypes.func,
};
export default OriginalCard;
