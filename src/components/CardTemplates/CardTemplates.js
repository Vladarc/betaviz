import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import MockUps from "./MockUps/MockUps"
import FiltersBar from "../Filters/Filtres"

const useCardTemplatesStyles = makeStyles(()=> ({
    root:{
        marginTop:"40px"
    }
}))


export const CardTemplates = (props) => {
    const classes = useCardTemplatesStyles()
 
  return (
    <div>
      <Grid container className={classes.root}>
        <Grid container item xs={3}  >
        < FiltersBar sizeOptions = {props.sizeOptions} selectedSize = {props.selectedSize} /> 
        </Grid>
        <Grid container item xs={9}>
            <MockUps />
        </Grid>
      </Grid>
    </div>
  );
};
