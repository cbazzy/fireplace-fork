"use client";
import React from "react";
import { useState } from "react";
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

  return (
    <>
      <div>
        <form className="form" onSubmit={verifyField}>
          <label>Full Name</label>
          <input
            id="full-name"
            type="text"
            placeholder="... John Smith"
            onChange={handleChange}
          />

          <label>Postcode</label>
          <input
            id="postcode"
            type="text"
            placeholder="... B1 7UJ"
            onChange={handleChange}
          />

          <label>House/Flat No./Name & first line of address</label>
          <input
            id="address"
            type="text"
            placeholder="... 1 Placeholder Lane"
            onChange={handleChange}
          />

          <label>City</label>
          <input
            id="city"
            type="text"
            placeholder="... London"
            onChange={handleChange}
          />

          <label>Phone Number</label>
          <input
            id="phone-number"
            type="tel"
            placeholder="0"
            onChange={handleChange}
            maxLength={11}
            pattern="0[0-9]*"
            title="Please enter a 11-digit phone number starting with 0"
          />

          <label>Email</label>
          <input
            id="email"
            type="email"
            placeholder="... John Smith"
            onChange={handleChange}
          />

          <button type="submit">Request Design Consultation</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </>
  );
}
