import React, { useState } from "react";
import City from "./City";

export default function State({ id, state }) {
  const [cityArr, setCityArr] = useState([]);
  const renderCities = () => {
    let cities = state.cities.map((city, index) => (
      <City id={`city${index + 1}`} city={city} />
    ));
    setCityArr(cities);
  };
  return (
    <div>
      <h1 id={id} onClick={renderCities}>
        {state.name}
      </h1>
      {cityArr}
    </div>
  );
}
