"use client";
import React, { useState, useEffect } from "react";
import "./trusted.css";

const apiURL = "https://seal-app-336e8.ondigitalocean.app/reviews?country=";

export default function Trusted() {
  //initialise toggleState var & stores boolean vals for country toggles
  const [toggleStates, setToggleStates] = useState({
    scotland: false,
    wales: false,
    england: false,
  });

  //initialise review state var & stores review data for each country
  const [review, setReview] = useState({
    text: null,
    author: null,
    location: null,
  });

  const [currentState, setCurrentState] = useState(null);

  //fetchData runs when certain dependancies change
  useEffect(() => {
    async function fetchData() {
      if (currentState === null) {
        setReview({ text: null, author: null, location: null });
        return false;
      }
      const response = await fetch(apiURL + currentState);
      const result = await response.json();
      //updates reviews var with new data for the clicked country
      setReview({
        text: result.text,
        author: result.author,
        location: result.location,
      });
    }
    fetchData();
  }, [currentState]);

  function handleClick(country) {
    setCurrentState(country);
  }

  const buttonNames = ["England", "Wales", "Scotland"];

  return (
    <div className="trusted-container">
      <div className="trusted-title">Trusted.</div>

      <div className="trusted-desc">
        We've got thousands of happy customers all over the UK. Choose your
        country to see the latest review:
      </div>

      <div className="buttons-container">
        {buttonNames.map((country, i) => (
          <div className="buttons-container" key={i}>
            <div>
              <button
                onClick={() => handleClick(country)}
                className={country == currentState ? "button orange" : "button"}
              >
                {country}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="review-container" hidden={!currentState}>
        <div>
          <p className="review-text">{'"' + review.text + '"'}</p>
        </div>

        <div>
          <p className="review-author-location-text">
            {review.author + " - " + review.location}
          </p>
        </div>
      </div>
    </div>
  );
}
