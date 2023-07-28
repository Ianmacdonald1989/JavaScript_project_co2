import React from "react";
import { Link } from 'react-router-dom';
import "./FlightDetail.css";

const FlightDetail = ({ flight }) => {
  return (
    <div className="flight-detail-contrainer">
      <h1 id="header">Trip Info</h1>
      <p><b>Origin:</b> {flight.origin}</p>
      <p><b>Destination:</b> {flight.destination}</p>
      <p><b>Emissions:</b> {flight.footprint} Kg of Co2</p>
      <p><b>Departure Date:</b> {flight.date}</p>
      <p><b>Arrival Date:</b> {flight.arrivalDate}</p>
      <p><i class="fa-solid fa-tree fa-xl" style={{color: '#79d985'}}></i></p>
      <p>You will need to plant <b>{Math.round((flight.footprint * 0.7) / 21)}</b> trees to offset your journey. Click below to plant today!</p>
      <Link to="/about">
        <button id="plant-tree-button">Plant a tree</button>
      </Link>
    </div>
  );
};

export default FlightDetail;
