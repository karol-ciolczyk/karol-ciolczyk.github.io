import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MyDatePicker from "./MyDatePicker";
import { Button, Icon } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {
    backgroundColor: "#007887",
    padding: '15px'
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

  console.log(dataObject)
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
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
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        size="large"
        endIcon={<Icon>addchart</Icon>}
      >
        Secondary
      </Button>
    </form>
  );
}