import React, {useState} from "react";
import {
  makeStyles,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MyDatePicker from "./MyDatePicker";
import ButtonAddItem from "./ButtonAddItem";



const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Imputs() {
  const classes = useStyles();
  const [dataObject, setDataObject] = useState({task: "", place:""});

  const dataHandler = (event) =>{
    console.log(event.target.name)

    setDataObject(()=>{
      return {
        ...dataObject,
        [event.target.name]: event.target.value
      }
    });
  }


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        className={classes.text}
        name="task"
        id="outlined-basic"
        label="Add Task"
        variant="outlined"
        onChange={dataHandler}
      />
      <TextField
        name="place"
        id="outlined-basic"
        label="Add Place"
        variant="outlined"
        onChange={dataHandler}
      />
      <MyDatePicker />
      <ButtonAddItem />
    </form>
  );
}