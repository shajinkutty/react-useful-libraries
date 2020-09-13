import React, { useState } from "react";
import Header from "../../Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePickerContainer() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div>
      <Header title="Date Picker" link="https://reactdatepicker.com/" />
      <p>Default</p>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
      <p>Cahnge Date Format</p>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
      />
      <p>Min Max date (dec 31)</p>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        maxDate={new Date("12/31/2020")}
      />
      <p>Filter weekday</p>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
      />
      <p>Clear Button</p>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        isClearable={true}
      />
      <p>Year Dropdown</p>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        isClearable={true}
        showYearDropdown
        scrollableMonthYearDropdown
      />
      <p>Date Range</p>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </div>
  );
}

export default DatePickerContainer;
