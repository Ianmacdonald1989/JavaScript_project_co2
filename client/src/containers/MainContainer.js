import React, { useEffect, useState } from "react";
import { getFlights, postFlight } from "../Services/FlightService";
import FlightList from "../components/FlightList";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Home from "../components/Home";

const MainContainer = () => {
  const [userFlights, setUserFlights] = useState([]);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [emissions, setEmissions] = useState(null);
  const [date, setDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [searchSuccessful, setSearchSuccessful] = useState(false);

  const API_KEY = "7a2256a8afcf280c53cb5763";

  function getFlightEmissions(origin, destination) {
    let URL = `https://api.goclimate.com/v1/flight_footprint?segments[0][origin]=${origin}&segments[0][destination]=${destination}&segments[1][origin]=${destination}&segments[1][destination]=${origin}&cabin_class=economy`;
    fetch(URL, {
      method: "GET",
      headers: { Authorization: "Basic " + btoa(API_KEY) },
    }).then((response) => {
      response.json().then((result) => {
        console.log(result);
        setEmissions(result.footprint);
        setSearchSuccessful(true);
      });
    });
  }

  const addSearchedFlight = () => {
    const newFlight = {
      origin: origin,
      destination: destination,
      footprint: emissions,
      date: date,
      arrivalDate: arrivalDate,
    };

    postFlight(newFlight).then(addFlight(newFlight));
  };

  useEffect(() => {
    getFlights().then((allFlights) => {
      setUserFlights(allFlights);
    });
  }, []);

  const addFlight = (flight) => {
    setUserFlights([...userFlights, flight]);
  };

  const removeFlight = (id) => {
    const flightsToKeep = userFlights.filter((f) => f._id !== id);
    setUserFlights(flightsToKeep);
  };

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                origin={origin}
                setOrigin={setOrigin}
                destination={destination}
                setDestination={setDestination}
                getFlightEmissions={getFlightEmissions}
                emissions={emissions}
                searchSuccessful={searchSuccessful}
                addSearchedFlight={addSearchedFlight}
                addFlight={addFlight}
                userFlights={userFlights}
                removeFlight={removeFlight}
                setDate={setDate}
                date={date}
                arrivalDate={arrivalDate}
                setArrivalDate={setArrivalDate}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/flightlist"
            element={
              <FlightList
                userFlights={userFlights}
                removeFlight={removeFlight}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default MainContainer;
