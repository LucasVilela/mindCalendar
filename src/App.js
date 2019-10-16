import React from "react";

import DateContextProvider from "./contexts/DateContext";
import GoalsContextProvider from "./contexts/GoalsContext";

import CalendarSetup from "./components/CalendarSetup";
import Goals from "./components/Goals";

import "./App.scss";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <div className="App">
      <DateContextProvider>
        <GoalsContextProvider>
          <CalendarSetup />
          <Goals />
        </GoalsContextProvider>
      </DateContextProvider>
    </div>
  );
}

export default App;
