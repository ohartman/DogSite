import React from "react";
import PropTypes from "prop-types";

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

Image.propTypes = {
  dogUrl: PropTypes.string.isRequired, // dogUrl must be a string and is required
  displayValue: PropTypes.string.isRequired, // displayValue must be a string and is required
};

export default Image;
