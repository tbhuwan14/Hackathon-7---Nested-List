import React, { useState } from "react";
import City from "./City";

export default function State({ state }) {
  const [cityArr, setCityArr] = useState([]);
  const renderCities = () => {
    let cities = state.cities.map((city) => <City city={city} />);
    setCityArr(cities);
  };
  return (
    <div>
      <h1 onClick={renderCities}>{state.name}</h1>
      {cityArr}
    </div>
  );
}
