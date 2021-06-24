import { MuiPickersUtilsProvider } from "@material-ui/pickers";

// pick a date util library
import MomentUtils from "@date-io/moment";
import DateFnsUtils from "@date-io/date-fns";
// import LuxonUtils from "@date-io/luxon";

import "./App.css";

import TodoForm from "./components/TodoForm/TodoForm";

function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <TodoForm />
    </MuiPickersUtilsProvider>
  );
}

export default App;
