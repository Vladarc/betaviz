import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    "& :focus": {
      backgroundColor: "transparent",
    },
    minWidth: 240,
    "&  *": {
      fontSize: "1.6rem",
    },
  },
  select: {
    fontSize: "1.6rem",
  },
}));
const Filtres = (props) => {
  const classes = useStyles();
  const defaultValue = props.sizeOptions.find(
    (el) => el.name.toLowerCase() === props.selectedSize
  );
  const [measure, setMeasure] = useState(defaultValue.value);
  const changeSizeHandler = (event) => {
    const { value } = event.target;
    setMeasure(value);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <FormControl className={classes.formControl}>
        <InputLabel id="sizes">Sizes</InputLabel>
        <Select
          labelId="sizes"
          id="sizes"
          defaultValue={defaultValue.value}
          onChange={changeSizeHandler}
        >
          {props.sizeOptions.map((option, idx) => {
            return (
              <MenuItem
                value={option.value}
                key={idx}
                className={classes.select}
              >
                {option.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <div>{measure}</div>
    </div>
  );
};

export default Filtres;
