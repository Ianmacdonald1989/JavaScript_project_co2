import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import React from "react";
import "./Map2.css";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const Map2 = () => {
  return (
    <div>
      <ComposableMap>
        <Geographies
          geography={geoUrl}
          markers={[
            {
              location: [2, 0],
              icon: { conUrl: "https://some-url.com/marker.svg" },
            },
          ]}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} color="pink" />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default Map2;
