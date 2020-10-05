import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import MockUps from "./MockUps/MockUps";
import ProductOptions from "../ProductOptions/ProductOptions";

const useCardTemplatesStyles = makeStyles(() => ({
  root: {
    marginTop: "40px",
  },
  filterPangel: {
    paddingRight: "15px",
    flexDirection: "column",
  },
}));

export const CardTemplates = (props) => {
  const classes = useCardTemplatesStyles();
  console.log(props);
  return (
    <div>
      <Grid container className={classes.root}>
        <Grid container item xs={3} className={classes.filterPangel}>
          <ProductOptions
            sizeOptions={props.sizes}
            orderOptions={props.orderOptions}
            paperOptions={props.paper}
            setNewSize={props.setNewSize}
            setNewPaperValue= {props.setNewPaperValue}
          />
        </Grid>
        <Grid container item xs={9}>
          <MockUps />
        </Grid>
      </Grid>
    </div>
  );
};
