import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import { DateContext } from "../contexts/DateContext";

const calculateEndDate = (startDate, duration, durationFormat) =>
  moment(startDate)
    .add(duration, durationFormat)
    .format("DD MMMM YYYY");

const CalendarSetup = () => {
  const {
    startDate,
    setStartDate,
    duration,
    setDuration,
    durationFormat,
    setDurationFormat
  } = useContext(DateContext);

  return (
    <>
      CalendarSetup
      <DatePicker
        showPopperArrow={false}
        selected={startDate}
        onChange={date => setStartDate(date)}
        inline
      />
      <input
        type="number"
        max="365"
        value={duration}
        onChange={e => setDuration(e.target.value)}
      />
      <select
        onChange={e => setDurationFormat(e.target.value)}
        defaultValue={durationFormat}
      >
        <option value="days">days</option>
        <option value="weeks">weeks</option>
      </select>
      <h4>
        Your end date will be{" "}
        {calculateEndDate(startDate, duration, durationFormat)}
      </h4>
    </>
  );
};

export default CalendarSetup;
