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
  const [reviews, setReviews] = useState({
    scotland: { text: null, author: null, location: null },
    wales: { text: null, author: null, location: null },
    england: { text: null, author: null, location: null },
  });

  //fetchData runs when certain dependancies change
  useEffect(() => {
    async function fetchData(country) {
      const response = await fetch(apiURL + country);
      const result = await response.json();
      //updates reviews var with new data for the clicked country
      setReviews((prevState) => ({
        ...prevState,
        [country]: {
          text: result.text,
          author: result.author,
          location: result.location,
        },
      }));
    }
    //loops over the keys of toggleStates object (these are the countries)
    Object.keys(toggleStates).forEach((country) => {
      if (toggleStates[country]) {
        fetchData(country);
      }
    });
  }, [toggleStates]);

  function handleClick(country) {
    setToggleStates((prevState) => ({
      ...prevState,
      [country]: !prevState[country],
    }));
  }

  return (
    <div className="trusted-container">
      <div
        onClick={() => handleClick("scotland")}
        className={toggleStates.scotland ? "testScot orangeScot" : "testScot"}
      >
        Trusted.
      </div>

      <div className="trusted-desc">
        We've got thousands of happy customers all over the UK. Choose your
        country to see the latest review:
      </div>

      <div className="buttons-container">
        <div>
          <button
            onClick={() => handleClick("england")}
            className={
              toggleStates.england ? "buttonEng orangeEng" : "buttonEng"
            }
          >
            England
          </button>
        </div>

        <div>
          <button
            onClick={() => handleClick("wales")}
            className={
              toggleStates.wales ? "buttonWales orangeWales" : "buttonWales"
            }
          >
            Wales
          </button>
        </div>

        <div>
          <button
            onClick={() => handleClick("scotland")}
            className={
              toggleStates.scotland ? "buttonScot orangeScot" : "buttonScot"
            }
          >
            Scotland
          </button>
        </div>
      </div>

      {Object.keys(toggleStates).map((country) => {
        if (toggleStates[country]) {
          return (
            <div className="review-container" key={country}>
              <div>
                <p className="review-text">
                  {'"' + reviews[country].text + '"'}
                </p>
              </div>

              <div>
                <p className="review-author-location-text">
                  {reviews[country].author + " - " + reviews[country].location}
                </p>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
