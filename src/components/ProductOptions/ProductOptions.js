import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useProductOptionsStyles = makeStyles(() => ({
  formControl: {
    margin: '0 0 7px 0',
    '& :focus': {
      backgroundColor: 'transparent',
    },
    minWidth: 240,
    '&  *': {
      fontSize: '1.6rem',
    },
  },
  select: {
    fontSize: '1.6rem',
  },
  productOptionsSize: {
    paddingBottom: 15,
  },
  productOptionsPaper: {
    padding: '15px 0',
  },
  measures: {
    fontSize: '1.2rem',
    color: '#637184',
  },
}));

const ProductOptions = ({
  sizeOptions,
  orderOptions,
  paperOptions,
  setNewSize,
  setNewPaperValue,
}) => {
  const classes = useProductOptionsStyles();
  const defaultMeasure = orderOptions.size.measure || '';
  const defaultSizeSelect = orderOptions.size.value;

  const [measure, setMeasure] = useState(defaultMeasure);
  const [defaultSize] = useState(defaultSizeSelect);

  const selectSizeHandler = (id, size) => {
    setMeasure(size);
    setNewSize({ value: id, measure: size });
  };
  const selectPaperHandler = (id, name) => {
    setNewPaperValue({ value: id, name });
  };

  return (
    <>
      <div className={classes.productOptionsSize}>
        <FormControl className={classes.formControl}>
          <InputLabel id="sizes">Sizes</InputLabel>
          <Select labelId="sizes" id="sizes" defaultValue={defaultSize}>
            {sizeOptions.map((option) => (
              <MenuItem
                onClick={selectSizeHandler.bind(null, option.id, option.value)}
                value={option.id}
                key={option.id}
                className={classes.select}
              >
                {option.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className={classes.measures}>measures {measure}</div>
      </div>
      <div className={classes.productOptionsPaper}>
        <FormControl className={classes.formControl}>
          <InputLabel id="sizes">Paper</InputLabel>
          <Select labelId="Paper" id="Paper" defaultValue="original">
            {paperOptions.map((option) => (
              <MenuItem
                value={option.id}
                key={option.id}
                className={classes.select}
                onClick={selectPaperHandler.bind(null, option.id, option.name)}
              >
                {option.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
};
ProductOptions.propTypes = {
  orderOptions: PropTypes.object,
  sizeOptions: PropTypes.array,
  paperOptions: PropTypes.array,
  setNewSize: PropTypes.func,
  setNewPaperValue: PropTypes.func,
};
export default ProductOptions;
