import React from "react";

function Image({ dogUrl, displayValue }) {
  return (
    <div>
      <h3>Random Image of {displayValue}:</h3>
      <img
        src={dogUrl}
        alt={`A random ${displayValue}`}
        style={{ maxWidth: "300px", height: "auto" }}
      />
    </div>
  );
}

export default Image;
