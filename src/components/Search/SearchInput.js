import React from "react";
import { TextField, makeStyles } from "@material-ui/core";
import SvgIcon from "../UI/SvgIcon/SvgIcon.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "180px",
      fontSize: "1.8rem",
    },
  },
}));
export const SerchInput = ({ action, className }) => {
  const classes = useStyles();
  const cls = [classes.root, "search-field"];
  return (
    <>
      <form method="GET" action={action} className={className}>
        <div className={"search-wrap"}>
          <SvgIcon
            className={"search__icon"}
            size={["1.9em", "1.9em"]}
            name="search"
          />
        </div>
        <TextField
          id="standard-basic"
          label="Search"
          className={cls.join(" ")}
          name="serch-field"
        />
      </form>
    </>
  );
};
