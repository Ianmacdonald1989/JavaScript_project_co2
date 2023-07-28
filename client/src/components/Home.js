import React, { useState } from "react";
import FlightSearchResult from "./FlightSearchResult";
import SearchForm from "./SearchForm";
import Modal from "react-modal";
import "./Home.css";

const Home = ({
  setDate,
  date,
  origin,
  setOrigin,
  destination,
  setDestination,
  getFlightEmissions,
  emissions,
  searchSuccessful,
  addSearchedFlight,
  arrivalDate,
  setArrivalDate,
}) => {
  
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <SearchForm
        origin={origin}
        setOrigin={setOrigin}
        destination={destination}
        setDestination={setDestination}
        setDate={setDate}
        getFlightEmissions={getFlightEmissions}
        openModal={openModal}
        arrivalDate={arrivalDate}
        setArrivalDate={setArrivalDate}
      />
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
        <FlightSearchResult
          origin={origin}
          destination={destination}
          emissions={emissions}
          searchSuccessful={searchSuccessful}
          addSearchedFlight={addSearchedFlight}
          date={date}
          arrivalDate={arrivalDate}
          closeModal={closeModal}
        />
      </Modal>
      
    </>
  );
};

export default Home;
