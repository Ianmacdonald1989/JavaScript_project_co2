import React from "react";
import "./FlightSearchResult.css";

const FlightSearchResult = ({
  origin,
  destination,
  emissions,
  date,
  addSearchedFlight,
  arrivalDate,
  closeModal
}) => {

  return (
    <>
    <div className="flight-search-container">
      <h1 id="header">Trip Info</h1>
      <p><b>Origin:</b> {origin}</p>
      <p><b>Destination:</b> {destination}</p>
      <p><b>Emissions:</b> {emissions} Kg of Co2</p>
      <p><b>Departure Date:</b> {date}</p>
      <p><b>Arrival Date:</b> {arrivalDate}</p>
      <p><i class="fa-solid fa-tree fa-xl" style={{color: '#79d985'}}></i></p>
      <p>You will need to plant <b>{Math.round((emissions * 0.7) / 21)}</b> trees to offset your journey.</p>
      
        <button id="add-to-trips-button"
          onClick={() => {
            addSearchedFlight();
            closeModal();
          }}
        >
          Add to My Trips
        </button>
      
      </div>
    </>
  );
};

export default FlightSearchResult;
