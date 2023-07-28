import React from "react";
import { deleteFlight } from "../Services/FlightService";
import './FlightItem.css'

const FlightItem = ({ flight, removeFlight, viewTrip }) => {


  const handleDelete = () => {
    deleteFlight(flight._id).then(() => {
      removeFlight(flight._id);
    });
  };

  const handleViewTrip = () => {
    viewTrip(flight);

  };


  return (
    <div className="flight-item-container">
      <p>{flight.origin} <i class="fa-solid fa-arrow-right fa-xs"></i> {flight.destination}</p>
      <p>{flight.footprint}Kg of Co2</p>
      <p>{flight.date}</p>
      <p>{flight.arrivalDate}</p>
      <p>{Math.round((flight.footprint * 0.7) / 21)} <i class="fa-solid fa-tree" style={{color: '#79d985'}}></i></p>
      <div className="button-container">
      <button className="delete button"onClick={handleDelete}>Delete Trip</button>
      <button className="view button" onClick={handleViewTrip}>View Trip</button>
      </div>
    </div>
  );
};

export default FlightItem;