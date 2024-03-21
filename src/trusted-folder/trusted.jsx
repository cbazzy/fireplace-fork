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
  // change the color into orange when clicked
  const [buttonColor, setButtonColor] = useState("button");
  const [review, setReview] = useState(null);
  const [review2, setReview2] = useState(null);
  const [review3, setReview3] = useState(null);

  useEffect(() => {
    async function fetchScot() {
      const response = await fetch(scotURL);
      const result = await response.json();
      setReview(result.text);
      setReview2(result.author);
      setReview3(result.location);
    }

    if (scotlandToggle) {
      fetchScot();
    }
  }, [scotlandToggle]);

  function handleClick() {
    setScotlandToggle(!scotlandToggle);
    setButtonColor(scotlandToggle ? "button" : "button orange");
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
            <button onClick={handleClick} className={buttonColor}>
              Scotland
            </button>
          </div>
        </div>
        {scotlandToggle ? (
          <div className="review-container">
            <div>
              <p className="review-text">{'"' + review + '"'}</p>
            </div>

            <div>
              <p className="review-author-location-text">
                {review2 + " - " + review3}
              </p>
            </div>
          </div>
        ) : null}
      </div>

      <div></div>
    </>
  );
}

//   <button onClick={handleClick}>Menu</button>
// {menuToggle ? <div className="mobile-menu">
// <button onClick={handleClick}>Close Button</button>
// </div> : null}
