import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  makeStyles,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@material-ui/core';
import { RadioBtnLabel } from '../RadioBtnLabel/RadioBtnLabel';
const useChooseFinishStyles = makeStyles(() => ({
  Radio: {
    display: 'none',
  },
  RadioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  FormControlLabel: {
    margin: '2em 0',
    flexBasis: '49%',
  },
  chooseMaterial: {
    margin: '2em 0',
  },
}));

const ChooseFinish = ({
  chooseMaterial,
  selectMaterialHandle,
  selectedElementMaterial: selected,
  setDefaultCombination,
  isSetDefaultOptions,
}) => {
  const classes = useChooseFinishStyles();
  const selectMaterialHandler = (event) => {
    const selectedEl = event.target.value;

    if (!isSetDefaultOptions) {
      setDefaultCombination({
        size: 'standard',
        measure: '2.0-3.5',
        corner: 'square',
        material: selectedEl,
        qty: 'qty-150',
      });
    } else {
      selectMaterialHandle(selectedEl);
    }
  };
  return (
    <div className={classes.chooseMaterial}>
      <Typography variant="h4">Choose your finish</Typography>

      <RadioGroup
        className={classes.RadioGroup}
        onChange={selectMaterialHandler}
      >
        {chooseMaterial.map((radioBtn) => (
          <FormControlLabel
            key={radioBtn.id}
            className={classes.FormControlLabel}
            control={<Radio className={classes.Radio} />}
            value={radioBtn.value}
            label={
              <RadioBtnLabel
                isActive={radioBtn.value === selected.value && true}
                data={{
                  img: radioBtn.img,
                  title: radioBtn.title,
                  description: radioBtn.description,
                }}
              />
            }
          />
        ))}
      </RadioGroup>
    </div>
  );
};
ChooseFinish.propTypes = {
  chooseMaterial: PropTypes.array,
  selectMaterialHandle: PropTypes.func,
  selectedElementMaterial: PropTypes.object,
  setDefaultCombination: PropTypes.func,
  isSetDefaultOptions: PropTypes.bool,
};
export default ChooseFinish;
