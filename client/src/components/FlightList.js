import React, { useState } from "react";
import FlightItem from "./FlightItem";
import FlightDetail from "./FlightDetail";
import Modal from "react-modal";
import UserGraph from "./UserGraph";
import Map2 from "./Map2";
import "./FlightList.css";

const FlightList = ({ userFlights, removeFlight, data }) => {
  const [selectedTrip, setSelectedTrip] = useState(null);
  
  const [modalIsOpen, setIsOpen] = useState(false);

  const viewTrip = (flight) => {
    setSelectedTrip(flight);
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  }

  const allFlights = userFlights
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((flight, index) => {
      return (
        <FlightItem
          key={index}
          flight={flight}
          removeFlight={removeFlight}
          viewTrip={viewTrip}
        />
      );
    });

  return (
    <>
      <h1 className="page-header">My trip portal.</h1>
    <div>
      <h2 id="my-trips-heading">
        <i className="fa-solid fa-plane fa-sm" style={{ color: "#ffffff" }}></i>{" "}
        My Trips.
      </h2>
      <div className="graph-and-list-container">
        <div className="list-container">{allFlights}</div>
        <div className="graph">
          <h2>My Emissions.</h2>
          <UserGraph data={data} userFlights={userFlights} />
          <br></br>
          <h2>Flight Map.</h2>
          <Map2 className="map" />
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            width: "400px",
            height: "408px",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        
        {selectedTrip && <FlightDetail flight={selectedTrip} />}
      </Modal>

    </div>
    </>
  );
};

export default FlightList;
