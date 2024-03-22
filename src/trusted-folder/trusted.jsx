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
  const [buttonColorScot, setButtonColorScot] = useState("buttonScot");
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

  function handleClickScot() {
    setScotlandToggle(!scotlandToggle);
    setButtonColorScot(scotlandToggle ? "buttonScot" : "buttonScot orangeScot");
  }

  const [walesToggle, setWalesToggle] = useState(false);
  // change the color into orange when clicked
  const [buttonColorWales, setButtonColorWales] = useState("buttonWales");
  const [reviewWales1, setReviewWales1] = useState(null);
  const [reviewWales2, setReviewWales2] = useState(null);
  const [reviewWales3, setReviewWales3] = useState(null);

  useEffect(() => {
    async function fetchWales() {
      const response = await fetch(walesURL);
      const result = await response.json();
      setReviewWales1(result.text);
      setReviewWales2(result.author);
      setReviewWales3(result.location);
    }

    if (walesToggle) {
      fetchWales();
    }
  }, [walesToggle]);

  function handleClickWales() {
    setWalesToggle(!walesToggle);
    setButtonColorWales(walesToggle ? "buttonWales" : "buttonWales orangeWales");
  }

  const [engToggle, setEngToggle] = useState(false);
  // change the color into orange when clicked
  const [buttonColorEng, setButtonColorEng] = useState("buttonWales");
  const [reviewEng1, setReviewEng1] = useState(null);
  const [reviewEng2, setReviewEng2] = useState(null);
  const [reviewEng3, setReviewEng3] = useState(null);

  useEffect(() => {
    async function fetchEng() {
      const response = await fetch(engURL);
      const result = await response.json();
      setReviewEng1(result.text);
      setReviewEng2(result.author);
      setReviewEng3(result.location);
    }

    if (engToggle) {
      fetchEng();
    }
  }, [engToggle]);

  function handleClickEng() {
    setEngToggle(!engToggle);
    setButtonColorEng(engToggle ? "buttonEng" : "buttonEng orangeEng");
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
          <button onClick={handleClickEng} className={buttonColorEng}>
              England
            </button>
          </div>

          <div>
          <button onClick={handleClickWales} className={buttonColorWales}>
              Wales
            </button>
          </div>

          <div>
            <button onClick={handleClickScot} className={buttonColorScot}>
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
                {review2 + " - "  + review3}
              </p>
            </div>
          </div>
        ) : null}
      </div>
<div>
  
  
      
      {walesToggle ? (
          <div className="review-container">
            <div>
              <p className="review-text">{'"' + reviewWales1 + '"'}</p>
            </div>

            <div>
              <p className="review-author-location-text">
                {reviewWales2 + " - "  + reviewWales3}
              </p>
            </div>
          </div>
        ) : null}
      </div>

      {engToggle ? (
          <div className="review-container">
            <div>
              <p className="review-text">{'"' + reviewEng1 + '"'}</p>
            </div>

            <div>
              <p className="review-author-location-text">
                {reviewEng2 + " - "  + reviewEng3}
              </p>
            </div>
          </div>
        ) : null}
    </>
  );
}



//   <button onClick={handleClick}>Menu</button>
// {menuToggle ? <div className="mobile-menu">
// <button onClick={handleClick}>Close Button</button>
// </div> : null}
