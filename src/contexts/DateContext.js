import React, { createContext, useState } from "react";
export const DateContext = createContext();

const today = new Date();

const DateContextProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(today);
  const [duration, setDuration] = useState(4);
  const [durationFormat, setDurationFormat] = useState("weeks");

  return (
    <DateContext.Provider
      value={{
        startDate,
        setStartDate,
        duration,
        setDuration,
        durationFormat,
        setDurationFormat
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

export default DateContextProvider;
