import React from "react";
import {
  Typography,
  makeStyles,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import { RadioBtnLabel } from "../RadioBtnLabel/RadioBtnLabel";
import "./SizeOptions.scss";

const useSizeOptionStyles = makeStyles(() => ({
  sizeOption: {
    margin: "2em 0",
  },
  title: {
    fontSize: "2.1rem",
  },
  Radio: {
    display: "none",
  },
  RadioGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "2em 0",
  },
  FormControlLabel: {
    marginLeft: 0,
    marginRight: 0,
    flexBasis: "32.333%",
  },
}));

const SizeOptions = ({
  sizeOption,
  setDefaultCombination,
  isSetDefaultOptions,
  changeImage,
  selectedElementSize: selected,
  selectSizeHandle,
}) => {
  const classes = useSizeOptionStyles();
   
  const changeImageHandler = (idx, id, measure) => {
   
    changeImage(idx);
    if (!isSetDefaultOptions) {
      setDefaultCombination({
        size:id,
        measure,
        corner:"square",
        material:"matte",
        qty: "qty-150" 
      });
    } else {
      selectSizeHandle({id,measure});
    }
  };

  return (
    <div className={classes.sizeOption}>
      <Typography variant="h3" className={classes.title}>
        {sizeOption.title}
      </Typography>

      <RadioGroup className={classes.RadioGroup}>
        {sizeOption.radioBtn.map((btn, idx) => {
          return (
            <FormControlLabel
              key={btn.id}
              className={classes.FormControlLabel}
              value={btn.value}
              control={
                <Radio
                  className={classes.Radio}
                  onClick={changeImageHandler.bind(null, idx, btn.id,btn.value)}
                />
              }
              label={
                <RadioBtnLabel
                  data={btn}
                  isActive={selected.value === btn.id}
                />
              }
            />
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default SizeOptions;
