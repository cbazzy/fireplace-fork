"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./form.css";

export default function Form() {
  const [fullName, submitFullName] = useState("");
  const [postcode, submitPostcode] = useState("");
  const [address, submitAddress] = useState("");
  const [city, submitCity] = useState("");
  const [number, submitNumber] = useState("");
  const [email, submitEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [postcodeErrorMessage, setPostcodeErrorMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "full-name") {
      submitFullName(value);
    } else if (id === "postcode") {
      submitPostcode(value);
    } else if (id === "address") {
      submitAddress(value);
    } else if (id === "phone-number") {
      submitCity(value);
    } else if (id === "city") {
      submitNumber(value);
    } else if (id === "email") {
      submitEmail(value);
    }
  };

  const verifyField = (e) => {
    e.preventDefault();
    if (!fullName || !postcode || !address || !city || !number || !email) {
      setErrorMessage("Please ensure all fields are complete."); // Display an error message if the field is empty
    } else {
      setErrorMessage(""); // Clear the error message if the field is not empty
      // Add similar checks for other fields if needed
    }
  };

  const postcodeURL = "https://api.postcodes.io/postcodes/";

  useEffect(() => {
    async function fetchPostcode(postcode) {
      // put the inputted postcode into a variable "postcode"
      if (postcode === "") {
        return;
      }
      const response = await fetch(postcodeURL + postcode);
      const result = await response.json();
      const validCountry = ["England", "Scotland", "Wales"];
      if (!validCountry.includes(result.country)) {
        setPostcodeErrorMessage("Please enter a valid UK postcode.");
      } else {
        setPostcodeErrorMessage("");
      }
    }
    fetchPostcode(postcode);
    console.log(postcode);
  });

  return (
    <>
      <div className="main-div">
        <div className="design-booking">
          <div className="design-booking-text">Design Booking</div>
        </div>

        <form className="form" onSubmit={verifyField}>
          <span>Personal Information:</span>

          <div className="gray">
            <label>Full Name</label>
            <input
              id="full-name"
              type="text"
              placeholder="John Smith"
              onChange={handleChange}
            />
            <label>Postcode</label>
            <input
              id="postcode"
              type="text"
              placeholder="B1 7UJ"
              onChange={handleChange}
            />
            {setPostcodeErrorMessage && (
              <p className="error-message">{postcodeErrorMessage}</p>
            )}
            <label>House/Flat Number and Street Name</label>
            <input
              id="address"
              type="text"
              placeholder="1 Placeholder Lane"
              onChange={handleChange}
            />
            <label>City</label>
            <input
              id="city"
              type="text"
              placeholder="London"
              onChange={handleChange}
            />
          </div>

          <span>Contact Information: </span>

          <div className="gray">
            <label id="phone-number">Phone Number</label>
            <input
              id="phone-number"
              type="tel"
              placeholder="07123 456789"
              onChange={handleChange}
              maxLength={11}
              pattern="0[0-9]{10}"
              title="Please enter an 11 digit number starting with 0"
            />
            <label>Email</label>
            <input
              id="email"
              type="email"
              placeholder="email@provider.com"
              onChange={handleChange}
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button className="submit-button" type="submit">
            Request Design Consultation
          </button>
        </form>
      </div>
    </>
  );
}
