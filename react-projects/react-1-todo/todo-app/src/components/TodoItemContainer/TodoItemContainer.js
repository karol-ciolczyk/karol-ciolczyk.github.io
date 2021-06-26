import React from "react";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    margin: "20px 200px",
    flexGrow: 1 ,
  },
}));

export default function SpacingGrid(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      spacing={2}
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      {props.children}
    </Grid>
  );
}