import React, { useState } from "react";
import Town from "./Town";

export default function City({ city }) {
  const [townArr, setTownArr] = useState([]);
  const renderTown = () => {
    let towns = city.towns.map((town) => <Town town={town} />);
    setTownArr(towns);
  };
  return (
    <div>
      <h5 onClick={renderTown}>{city.name}</h5>
      {townArr}
    </div>
  );
}
