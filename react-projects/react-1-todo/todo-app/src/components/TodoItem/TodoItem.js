import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { Icon } from "@material-ui/core";

import style from "./TodoItem.module.css";
import { pink } from "@material-ui/core/colors";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    padding: "3px",
    display: "flex",
    flexDirection: `column`,
    // justifyContent: "center",
    "& > *": {
      margin: theme.spacing(2),
      width: "auto",
      height: "auto",
    },
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  green: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
  },
}));

export default function TodoItem(props) {
  const classes = useStyles();

  return (
    <Paper elevation={4} className={classes.root}>
      <div className={style["flex-container"]}>
        <Avatar style={{ backgroundColor: "#f50057" }}>
          <Icon>splitscreen</Icon>
        </Avatar>
        <Paper className={style.paper} elevation={1}>
          {props.task}
        </Paper>
      </div>
      <div className={style["flex-container"]}>
        {" "}
        <Avatar style={{ backgroundColor: "#00a152" }}>
          <Icon>place</Icon>
        </Avatar>
        <Paper className={style.paper} elevation={1}>
          {props.place}
        </Paper>
      </div>
      <div className={style["flex-container"]}>
        {" "}
        <Avatar style={{ backgroundColor: "#ffc400" }}>
          <Icon>
            <span class="material-icons">today</span>
          </Icon>
        </Avatar>
        <Paper className={style.paper} elevation={1}>
          {props.time}
        </Paper>
      </div>
    </Paper>
  );
}
