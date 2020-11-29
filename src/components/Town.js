import React, { useState } from "react";

export default function Town({ id, town }) {
  return (
    <div>
      <h1 id={id}>{town.name}</h1>
    </div>
  );
}
