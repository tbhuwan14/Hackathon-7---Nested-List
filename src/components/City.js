import React, { useState } from "react";
import Town from "./Town";

export default function City({ id, city }) {
  const [townArr, setTownArr] = useState([]);
  const renderTown = () => {
    let towns = city.towns.map((town, index) => (
      <Town id={`town${index + 1}`} town={town} />
    ));
    setTownArr(towns);
  };
  return (
    <div>
      <h5 id={id} onClick={renderTown}>
        {city.name}
      </h5>
      {townArr}
    </div>
  );
}
