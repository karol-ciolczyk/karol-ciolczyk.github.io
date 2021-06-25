import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import teal from "@material-ui/core/colors/teal";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { amber } from "@material-ui/core/colors";

const defaultMaterialTheme = createMuiTheme({
  palette: {
    // primary: {
    //   light: "#007887",
    //   main: "#00acc1",
    //   dark: "#33bccd",
    //   contrastText: "#fff",
    // },
    // secondary: {
    //   light: "#007887",
    //   main: "#00acc1",
    //   dark: "#33bccd",
    //   contrastText: "#fff",
    // },
    primary: teal,
    secondary: amber,
  },
});

export default function MyDatePicker() {

  const [selectedDate, handleDateChange] = useState(null);
  



  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ThemeProvider theme={defaultMaterialTheme}>
        <DateTimePicker
          inputVariant="outlined"
          value={selectedDate}
          onChange={handleDateChange}
          label="Set Task Date"
        />
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
}