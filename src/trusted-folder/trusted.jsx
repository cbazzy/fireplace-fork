"use client";
import "react";
import "./trusted.css";
import { useState, useEffect } from "react";

const apiURL = "https://seal-app-336e8.ondigitalocean.app/reviews?country=";
const scotURL = apiURL + "scotland"; //hard coded for now, will be dynamic later
const engURL = apiURL + "england";
const walesURL = apiURL + "wales";

export default function Trusted() {
  const [scotlandToggle, setScotlandToggle] = useState(false);
  const [review, setReview] = useState(null);

  useEffect(() => {
      async function fetchScot() {
      const response = await fetch(scotURL);
      const result = await response.json();
        setReview(result.text + result.author);
      }

      if (scotlandToggle) {fetchScot();}}, [scotlandToggle]);

  function handleClick() {
    setScotlandToggle(!scotlandToggle);
  }

  return (
    <>
      <div className="trusted-container">
        <div className="trusted-title">Trusted.</div>

        <div className="trusted-desc">
          We've got thousands of happy customers all over the UK. Choose your
          country to see the latest review:
        </div>

        <div className="buttons-container">
          <div>
            <button className="button">England</button>
          </div>

          <div>
            <button className="button">Wales</button>
          </div>

          <div>
            <button onClick={handleClick} className="button">
              Scotland
            </button>
            {scotlandToggle ? (<div><p>{review}</p></div>) : null}
          </div>
        </div>
      </div>
    </>
  );
}

//   <button onClick={handleClick}>Menu</button>
// {menuToggle ? <div className="mobile-menu">
// <button onClick={handleClick}>Close Button</button>
// </div> : null}
