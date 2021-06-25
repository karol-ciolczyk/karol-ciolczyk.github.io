import { MuiPickersUtilsProvider } from "@material-ui/pickers";

// pick a date util library
import MomentUtils from "@date-io/moment";
import DateFnsUtils from "@date-io/date-fns";
// import LuxonUtils from "@date-io/luxon";
import TodoItem from './components/TodoItem/TodoItem'
import TodoItemContainer from "./components/TodoItemContainer/TodoItemContainer"
import { Grid } from "@material-ui/core";

import "./App.css";

import TodoForm from "./components/TodoForm/TodoForm";


const todoObject = [
  {
    task: "go to shop",
    place: "kraków, ul. danka 9/22",
    time: "22/05/2021",
  },
  {
    task: "go to shop and clean room",
    place: "warszawa, ul. bratysławska 88/5",
    time: "22/05/2021 14:55",
  },
  {
    task: "go to shop and clean room",
    place: "kraków, ul. danka 9/22",
    time: "22/05/2021",
  },
  {
    task: "clean house",
    place: "Nieporaz",
    time: "22/05/2021 13:22",
  },
  {
    task: "must buy meat and make some course to dinner",
    place: "kraków",
    time: "22/05/2021",
  },
  {
    task: "go to shop and clean room",
    place: "warszawa, ul. bratysławska 88/5",
    time: "22/05/2021 14:55",
  },
  {
    task: "go to shop and clean room",
    place: "kraków, ul. danka 9/22",
    time: "22/05/2021",
  },
  {
    task: "go to shop and clean room",
    place: "warszawa, ul. bratysławska 88/5",
    time: "22/05/2021 14:55",
  },
];

function App() {
  return (
    <>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <TodoForm />
      </MuiPickersUtilsProvider>
      <TodoItemContainer>
        {todoObject.map((todo) => (
          <Grid item xs={3}>
            <TodoItem task={todo.task} place={todo.place} time={todo.time}/>
          </Grid>
        ))}
      </TodoItemContainer>
    </>
  );
}

export default App;
