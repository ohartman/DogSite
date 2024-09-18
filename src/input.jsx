import React, { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "./utils.jsx";
import Image from "./image";

function Input() {
  const [inputValue, setInputValue] = useState("");
  const [storedValue, setStoredValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [dogUrl, setDogUrl] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const normalizedValue = inputValue.toLowerCase();
      setStoredValue(normalizedValue);
      setDisplayValue(capitalizeFirstLetter(inputValue));
      setError("");
      setInputValue("");
    }
  };

  useEffect(() => {
    if (storedValue) {
      const api_call = `https://dog.ceo/api/breed/${storedValue}/images/random`;

      fetch(api_call)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Breed not found");
          }
          return res.json();
        })
        .then((data) => {
          setDogUrl(data.message);
          setError("");
        })
        .catch((error) => {
          console.error("Error fetching the dog image:", error);
          setDogUrl("");
          setError("Could not find breed");
        });
    }
  }, [storedValue]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Enter dog breed"
      />
      <div>
        {error && <p style={{ color: "red" }}>{error}</p>}{" "}
        {dogUrl && !error && (
          <Image dogUrl={dogUrl} displayValue={displayValue} />
        )}
      </div>
    </div>
  );
}

export default Input;
