import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Imputs from "./Imputs";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: 'auto',
      marginTop: '20px',
      width: "auto",
      height: "auto",
      padding: theme.spacing(3),
      backgroundColor: "#9bc5d5",
    },
  },
}));

const TodoForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Imputs />
      </Paper>
    </div>
  );
};

export default TodoForm;
