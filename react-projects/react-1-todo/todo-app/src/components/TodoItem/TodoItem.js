import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { Icon } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import style from "./TodoItem.module.css";
import { pink } from "@material-ui/core/colors";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    padding: "10px",
    display: "flex",
    flexDirection: `column`,
    // justifyContent: "center",
    "& > *": {
      // margin: theme.spacing(1),
      width: "auto",
      height: "auto",
    },
  },
  pink: {},
  green: {},
  done: {
    margin: "5px 25px",
    padding: "8px",
    backgroundColor: "#e3e3e3",
    transition: "200ms",
  },
  paper: {
    margin: "5px 25px",
    padding: "8px",
    transition: "150ms",
  },
  avatartSwitchOff: {
    transition: "150ms",
    backgroundColor: "#e3e3e3",
  },
}));

export default function TodoItem(props) {
  const classes = useStyles();
  const [isDone, setIsDone] = useState(false);

  const isDoneHandler = (event) => {
    console.log(event.target.checked);
    event.target.checked ? setIsDone(false) : setIsDone(true);
  };

  return (
    <Paper elevation={5} className={classes.root}>
      <div
        style={{
          height: "20px",
          margin: "6px 15px",
          padding: "5px",
          textAlign: "right",
        }}
      >
        <FormControlLabel
          control={
            <Switch
              checked={isDone ? false : true}
              onChange={isDoneHandler}
              name="checkedA"
            />
          }
          label=""
        />
      </div>
      <div className={style["flex-container"]}>
        <Avatar
          style={
            isDone
              ? { backgroundColor: "#e3e3e3", transition: "150ms" }
              : { backgroundColor: "#f50057", transition: "150ms" }
          }
        >
          <Icon>splitscreen</Icon>
        </Avatar>
        <Paper className={isDone ? classes.done : classes.paper} elevation={1}>
          {props.task}
        </Paper>
      </div>
      <div className={style["flex-container"]}>
        {" "}
        <Avatar
          style={
            isDone
              ? { backgroundColor: "#e3e3e3", transition: "150ms" }
              : { backgroundColor: "#00a152", transition: "150ms" }
          }
        >
          <Icon>place</Icon>
        </Avatar>
        <Paper className={isDone ? classes.done : classes.paper} elevation={1}>
          {props.place}
        </Paper>
      </div>
      <div className={style["flex-container"]}>
        {" "}
        <Avatar
          style={
            isDone
              ? { backgroundColor: "#e3e3e3", transition: "150ms" }
              : { backgroundColor: "#ffc400", transition: "150ms" }
          }
        >
          <Icon>
            <span class="material-icons">today</span>
          </Icon>
        </Avatar>
        <Paper className={isDone ? classes.done : classes.paper} elevation={1}>
          {props.time}
        </Paper>
      </div>
    </Paper>
  );
}
