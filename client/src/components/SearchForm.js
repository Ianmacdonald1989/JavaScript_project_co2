import React, { useState } from "react";
import airports from "../data/airports";
import "./SearchForm.css";

const SearchForm = ({
  setOrigin,
  setDestination,
  origin,
  destination,
  date,
  getFlightEmissions,
  setDate,
  openModal,
  arrivalDate,
  setArrivalDate,
}) => {
  const [inputOrigin, setInputOrigin] = useState(origin);
  const [inputDestination, setInputDestination] = useState(destination);
  const [inputDate, setInputDate] = useState(date);
  const [inputArrivalDate, setInputArrivalDate] = useState(arrivalDate);

  const handleDestinationChange = (event) => {
    setInputDestination(event.target.value);
  };

  const handleOriginChange = (event) => {
    setInputOrigin(event.target.value);
  };

  const handleDateChange = (event) => {
    setInputDate(event.target.value);
  };

  const handleArrivalDateChange = (event) => {
    setInputArrivalDate(event.target.value);
  };

  const handleSubmit = (event) => {
    setOrigin(inputOrigin);
    setDestination(inputDestination);
    setDate(inputDate);
    setArrivalDate(inputArrivalDate);
    getFlightEmissions(inputOrigin, inputDestination);
    event.preventDefault();
    openModal();
    setInputOrigin("");
    setInputDestination("");
    setInputDate("");
    setInputArrivalDate("");
  };

  return (
    <>
    <div className="container">
      <h1 id="tag-line">Track your travel carbon footprint.</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="origin-input">Origin:</label>
            <input
              id="origin-input"
              className="text-input"
              type="text"
              onChange={handleOriginChange}
              value={inputOrigin}
              list="origin"
              placeholder="Enter origin"
              required
            />
            <datalist id="origin">
              {airports.map((airport) => (
                <option key={airport.code} value={airport.code}>
                  {airport.name}
                </option>
              ))}
            </datalist>
          </div>

          <div className="form-group">
            <label htmlFor="departure-date-input">Departure Date:</label>
            <input
              id="departure-date-input"
              className="date-input"
              type="date"
              onChange={handleDateChange}
              value={inputDate}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="destination-input">Destination:</label>
            <input
              id="destination-input"
              className="text-input"
              type="text"
              onChange={handleDestinationChange}
              value={inputDestination}
              list="destination"
              placeholder="Enter destination"
              required
            />
            <datalist id="destination">
              {airports.map((airport) => (
                <option key={airport.code} value={airport.code}>
                  {airport.name}
                </option>
              ))}
            </datalist>
          </div>

          <div className="form-group">
            <label htmlFor="arrival-date-input">Return Date:</label>
            <input
              id="arrival-date-input"
              className="date-input"
              type="date"
              onChange={handleArrivalDateChange}
              value={inputArrivalDate}
              required
            />
          </div>

          <div className="form-group">
            <button id="search-button" type="submit" name="submit">
              Search
            </button>
          </div>
        </div>
      </form>
      </div>
    </>
  );
};

export default SearchForm;
