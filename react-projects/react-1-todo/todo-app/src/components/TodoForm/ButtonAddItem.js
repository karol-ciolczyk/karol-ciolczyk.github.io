import React, { useState } from "react";
import { Button, Icon, withTheme } from "@material-ui/core";
import {
  makeStyles,
} from "@material-ui/core/styles";
import { secondsToMilliseconds } from "date-fns";


const useStyles = makeStyles((theme) => ({
  button: {
    color: "black",
    backgroundColor: "#ffc400",
    padding: "15px",
    "&:hover": {
      backgroundColor: "#ffcf33",
      boxShadow: "50 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
}));


export default function ButtonAddItem() {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="contained"
      size="large"
      endIcon={<Icon>add_circle</Icon>}
    >
      Add To List
    </Button>
  );
}
