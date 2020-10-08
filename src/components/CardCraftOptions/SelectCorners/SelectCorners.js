import React from "react";
import {
  Typography,
  makeStyles,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../styles/SelectCorners.scss";
const useSelectCornersStyles = makeStyles(() => ({
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
    flexBasis: "47.666%",
    "& span": {
      width: "100%",
    },
  },
  LabelTitle: {
    fontSize: "1.8rem",
  },
}));

const RadioBtnLabelWithIcon = ({
  title,
  LabelTitle,
  icon,
  description,
  isActive,
}) => {
  const cls = ["corners-lable", isActive ? "active" : ""];
  return (
    <div className={cls.join(" ")}>
      <div className={"corners-lable__text"}>
        <Typography className={LabelTitle}>{title}</Typography>
        <span className={"corners-lable__description"}>{description}</span>
      </div>
      <div className={"corners-lable__icon"}>
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
  );
};

const SelectCorners = ({
  label,
  selectCornerHandle,
  selectedElementsCorner: selected,
  setDefaultCombination,
  isSetDefaultOptions,
}) => {
  const classes = useSelectCornersStyles();
  const [square, rounded] = label;

  const setCornarsCardsHandler = (event) => {
    let selected = event.target.value.toLowerCase();
   
    if (!isSetDefaultOptions) {
      setDefaultCombination({
        size: "standard",
        measure:"2.0-3.5",
        corner: selected,
        material: "matte",
        qty: "qty-150",
      });
    } else {
      
      selectCornerHandle(selected);
    }
  };
  return (
    <div>
      <Typography variant="h5" className={classes.title}>
        Choose your corners
      </Typography>

      <RadioGroup
        className={classes.RadioGroup}
        onChange={setCornarsCardsHandler}
      >
        <FormControlLabel
          className={classes.FormControlLabel}
          control={<Radio className={classes.Radio} />}
          value={square.value}
          label={
            <RadioBtnLabelWithIcon
              isActive={square.id === selected.value && true}
              LabelTitle={classes.LabelTitle}
              icon={faSquare}
              title={square.title}
              description={square.text}
            />
          }
        />
        <FormControlLabel
          className={classes.FormControlLabel}
          control={<Radio className={classes.Radio} />}
          value={rounded.value}
          label={
            <RadioBtnLabelWithIcon
              isActive={rounded.id === selected.value && true}
              LabelTitle={classes.LabelTitle}
              icon={faCircle}
              title={rounded.title}
              description={rounded.text}
            />
          }
        />
      </RadioGroup>
    </div>
  );
};

export default SelectCorners;
